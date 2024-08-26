import { ApiProperty } from '@nestjs/swagger';
import { Column } from './column';

export class Board {
  @ApiProperty({ description: 'The unique identifier of the board' })
  _id: string;

  @ApiProperty({ description: 'The name of the board' })
  name: string;

  @ApiProperty({ description: 'The columns of the board', type: [Column] })
  columns: Column[];

  constructor(id: string, name: string, columns: Column[]) {
    this._id = id;
    this.name = name;
    this.columns = columns;
  }
}