import { Board } from '../entities/board';
import { Card } from '../entities/cards';
import { Column } from '../entities/column';

export interface BoardRepository {
  addColumn(boardId: string, column: Column): Board | PromiseLike<Board>;
  findById(id: string): Promise<Board | null>;
  save(board: Board): Promise<void>;
  create(boardData: Partial<Board>): Board;
  findAll(): Promise<Board[]>; 
  addCard(boardId: string, columnId: string, card: Card): Board | PromiseLike<Board>;
}