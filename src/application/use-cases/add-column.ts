import { BoardRepository } from '../../domain/repositories/board-repository.interface';
import { Board } from '../../domain/entities/board';
import { Column } from '../../domain/entities/column';
import { Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateColumnDto } from '../../presentation/dtos/create-column';
import { Card } from '../../domain/entities/Cards';

export class AddColumn {
  constructor(
    @Inject('BoardRepository') private readonly boardRepository: BoardRepository,
  ) {}

  async execute(boardId: string, columnDto: CreateColumnDto): Promise<Board> {
    const column = new Column(
      uuidv4(),
      columnDto.name,
      columnDto.cards.map(card => new Card(uuidv4(), card.title, card.description)),
    );

    return this.boardRepository.addColumn(boardId, column);
  }
}