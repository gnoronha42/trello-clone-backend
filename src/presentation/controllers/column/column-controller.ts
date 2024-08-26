import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddColumn } from 'src/application/use-cases/add-column';
import { Board } from 'src/domain/entities/board';
import { CreateColumnDto } from 'src/presentation/dtos/create-column';


@ApiTags('columns')
@Controller('boards/:boardId/columns')
export class ColumnController {
  constructor(private readonly addColumns: AddColumn) {}

  @Post()
  @ApiOperation({ summary: 'Add a column to a board' })
  @ApiResponse({ status: 201, description: 'The column has been successfully added.', type: Board })
  @ApiResponse({ status: 404, description: 'Board not found.' })
  async addColumn(@Param('boardId') boardId: string, @Body() createColumnDto: CreateColumnDto): Promise<Board> {
    return this.addColumns.execute(boardId, createColumnDto);
  }
}