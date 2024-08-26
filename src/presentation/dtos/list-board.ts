import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListBoardsDto {
  @ApiProperty({ description: 'Optional name filter for the boards', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}