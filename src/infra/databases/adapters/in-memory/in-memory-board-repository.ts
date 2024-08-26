import { Board } from "src/domain/entities/board";
import { BoardRepository } from "src/domain/repositories/board-repository.interface";

export class InMemoryBoardRepository implements BoardRepository {
  private boards: Board[] = [];

  async findById(id: string): Promise<Board | null> {
    return this.boards.find(board => board.id === id) || null;
  }

  async save(board: Board): Promise<void> {
    const index = this.boards.findIndex(b => b.id === board.id);
    if (index !== -1) {
      this.boards[index] = board; 
    } else {
      this.boards.push(board); 
    }
  }

  create(boardData: Partial<Board>): Board {
    const exists = this.boards.some(b => b.id === boardData.id);
    if (exists) {
      throw new Error('Board already exists');
    }
    const newBoard = { ...boardData, id: this.generateId() } as Board;
    this.boards.push(newBoard);
    return newBoard;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  findAll(): Promise<Board[]> {
    return Promise.resolve(this.boards);
  }
}