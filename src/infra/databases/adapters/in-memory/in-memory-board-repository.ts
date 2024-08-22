import { Board } from "src/domain/entities/board";
import { BoardRepository } from "src/domain/repositories/board-repository.interface";


export class InMemoryBoardRepository implements BoardRepository {
  private boards: Board[] = [];

  async findById(id: string): Promise<Board | null> {
    return this.boards.find(board => board.id === id) || null;
  }

  async save(board: Board): Promise<void> {
    this.boards.push(board);
  }
}