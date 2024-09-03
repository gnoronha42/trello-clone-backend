import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { Board } from '../../../../domain/entities/board';
import { Card } from '../../../../domain/entities/cards';
import { Column } from '../../../../domain/entities/column';
import { BoardRepository } from '../../../../domain/repositories/board-repository.interface';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryBoardRepository implements BoardRepository {
  private boards: Board[] = [];

  async findById(id: string): Promise<Board | null> {
    return this.boards.find(board => board._id === id) || null;
  }

  async save(board: Board): Promise<void> {
    const index = this.boards.findIndex(b => b._id === board._id);
    if (index !== -1) {
      this.boards[index] = board;
    } else {
      this.boards.push(board);
    }
  }

  async findAll(): Promise<Board[]> {
    return this.boards;
  }

  async addColumn(boardId: string, column: Column): Promise<Board> {
    const board = await this.findById(boardId);
    if (!board) {
      throw new Error('Board not found');
    }
    board.columns.push(column);
    await this.save(board);
    return board;
  }

  async addCard(boardId: string, columnId: string, card: Card): Promise<Board> {
    if (!Types.ObjectId.isValid(boardId) || !Types.ObjectId.isValid(columnId)) {
      throw new Error('Invalid ObjectId');
    }
    const board = await this.findById(boardId);
    if (!board) {
      throw new Error('Board not found');
    }
    const column = board.columns.find(col => col._id === columnId);
    if (!column) {
      throw new Error('Column not found');
    }
    column.cards.push(card);
    await this.save(board);
    return board;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }


  create(boardData: Partial<Board>): Board {
    const exists = this.boards.some(b => b._id === boardData._id);
    if (exists) {
      throw new Error('Board already exists');
    }
    const newBoard = { ...boardData, id: this.generateId() } as Board;
    this.boards.push(newBoard);
    return newBoard;
  }
}