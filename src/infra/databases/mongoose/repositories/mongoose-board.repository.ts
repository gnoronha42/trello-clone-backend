import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from '../../../../domain/entities/board';
import { Card } from '../../../../domain/entities/Cards';

import { Column } from '../../../../domain/entities/column';
import { BoardRepository } from '../../../../domain/repositories/board-repository.interface';

@Injectable()
export class MongooseBoardRepository implements BoardRepository {
  constructor(@InjectModel('Board') private readonly boardModel: Model<Board>) {}

  async findById(id: string): Promise<Board> {
    return this.boardModel.findById(id).exec();
  }

  async save(board: Board): Promise<void> {
    const createdBoard = new this.boardModel(board);
    await createdBoard.save();
  }

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
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

  create(boardData: Partial<Board>): Board {
    return new this.boardModel(boardData);
  }

  async addCard(boardId: string, columnId: string, card: Card): Promise<Board> {
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
}