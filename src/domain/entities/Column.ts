import { ApiProperty } from '@nestjs/swagger';
import { Card } from './Cards';


export class Column {
  @ApiProperty({ description: 'The unique identifier of the column' })
  _id: string;

  @ApiProperty({ description: 'The name of the column' })
  name: string;

  @ApiProperty({ description: 'The cards in the column', type: [Card] })
  cards: Card[];

  constructor(id: string, name: string, cards: Card[]) {
    this._id = id;
    this.name = name;
    this.cards = cards;
  }
}