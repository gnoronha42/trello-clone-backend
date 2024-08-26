import { Board } from '../entities/board';

export interface BoardRepository {
  findById(id: string): Promise<Board | null>;
  save(board: Board): Promise<void>;
  create(boardData: Partial<Board>): Board;
  findAll(): Promise<Board[]>; 
}