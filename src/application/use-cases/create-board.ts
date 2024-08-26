import { BoardRepository } from '../../domain/repositories/board-repository.interface';
import { Board } from '../../domain/entities/board';
import { v4 as uuidv4 } from 'uuid'; 
import { Inject } from '@nestjs/common';

export class CreateBoard {
  constructor(
    @Inject('BoardRepository') private readonly boardRepository: BoardRepository,
  ) {}
  async execute(name: string): Promise<Board> {
    const board = new Board(uuidv4(), name, []); 
    await this.boardRepository.save(board);
    return board;
  }
}