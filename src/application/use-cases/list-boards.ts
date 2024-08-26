import { BoardRepository } from '../../domain/repositories/board-repository.interface';
import { Board } from '../../domain/entities/board';
import { Inject } from '@nestjs/common';

export class ListBoards {
  constructor(
    @Inject('BoardRepository') private readonly boardRepository: BoardRepository,
  ) {}

  async execute(filterName?: string): Promise<Board[]> {
    const boards = await this.boardRepository.findAll();
    if (filterName) {
      return boards.filter(board => board.name.includes(filterName));
    }
    return boards;
  }
}