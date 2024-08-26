import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateBoard } from '../../application/use-cases/create-board';
import { ListBoards } from '../../application/use-cases/list-boards';

import { Board } from '../../domain/entities/board';
import { CreateBoardDto } from '../dtos/create-board';
import { ListBoardsDto } from '../dtos/list-board';


@ApiTags('boards')
@Controller('boards')
export class BoardController {
  constructor(
    private readonly createBoard: CreateBoard,
    private readonly listBoards: ListBoards,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new board' })
  @ApiResponse({ status: 201, description: 'The board has been successfully created.', type: Board })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.createBoard.execute(createBoardDto.name);
  }

  @Get()
  @ApiOperation({ summary: 'List all boards with optional name filter' })
  @ApiResponse({ status: 200, description: 'List of boards', type: [Board] })
  async list(@Query() query: ListBoardsDto): Promise<Board[]> {
    return this.listBoards.execute(query.name);
  }
}