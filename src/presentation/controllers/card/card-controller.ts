import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddCard } from '@src/application/use-cases/add-card';
import { Board } from '@src/domain/entities/board';
import { CreateCardDto } from '@src/presentation/dtos/create-card';




@ApiTags('cards')
@Controller('boards/:boardId/columns/:columnId/cards')
export class CardController {
  constructor(private readonly addCards: AddCard) {}

  @Post()
  @ApiOperation({ summary: 'Add a card to a column' })
  @ApiResponse({ status: 201, description: 'The card has been successfully added.', type: Board })
  @ApiResponse({ status: 404, description: 'Board or Column not found.' })
  async addCard(@Param('boardId') boardId: string, @Param('columnId') columnId: string, @Body() createCardDto: CreateCardDto): Promise<Board> {
    return this.addCards.execute(boardId, columnId, createCardDto);
  }
}