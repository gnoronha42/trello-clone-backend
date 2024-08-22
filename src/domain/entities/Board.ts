import { ApiProperty } from '@nestjs/swagger';

export class Board {
  @ApiProperty({ description: 'The unique identifier of the board' })
  id: string;

  @ApiProperty({ description: 'The name of the board' })
  name: string;

  @ApiProperty({ description: 'The columns of the board', type: [] })
  columns: [];

  constructor(id: string, name: string, columns: []) {
    this.id = id;
    this.name = name;
    this.columns = columns;
  }
}