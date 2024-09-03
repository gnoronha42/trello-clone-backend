import { BoardRepository } from '../../domain/repositories/board-repository.interface';
import { Board } from '../../domain/entities/board';

import { Inject } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { CreateCardDto } from '../../presentation/dtos/create-card';
import { Card } from '../../domain/entities/cards';

export class AddCard {
  constructor(
    @Inject('BoardRepository') private readonly boardRepository: BoardRepository,
  ) {}

  async execute(boardId: string, columnId: string, cardDto: CreateCardDto): Promise<Board> {
    const card = new Card(uuidv4(), cardDto.title, cardDto.description);
    return this.boardRepository.addCard(boardId, columnId, card);
  }
}