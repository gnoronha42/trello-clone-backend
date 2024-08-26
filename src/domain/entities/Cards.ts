import { ApiProperty } from '@nestjs/swagger';

export class Card {
  @ApiProperty({ description: 'The unique identifier of the card' })
  _id: string;

  @ApiProperty({ description: 'The title of the card' })
  title: string;

  @ApiProperty({ description: 'The description of the card' })
  description: string;

  constructor(id: string, title: string, description: string) {
    this._id = id;
    this.title = title;
    this.description = description;
  }
}