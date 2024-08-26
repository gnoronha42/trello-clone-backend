import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateBoard } from '../../application/use-cases/create-board';

import { Board } from '../../domain/entities/board';
import { CreateBoardDto } from '../dtos/create-board';

@ApiTags('boards')
@Controller('boards')
export class BoardController {
  constructor(private readonly createBoard: CreateBoard) {}

  @Post()
  @ApiOperation({ summary: 'Create a new board' })
  @ApiResponse({ status: 201, description: 'The board has been successfully created.', type: Board })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.createBoard.execute(createBoardDto.name);
  }
}