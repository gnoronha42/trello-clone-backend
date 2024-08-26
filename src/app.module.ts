import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CreateBoard } from './application/use-cases/create-board';

import { BoardSchema } from './infra/databases/mongoose/schemas/board.schema';
import { MongooseBoardRepository } from './infra/databases/mongoose/repositories/mongoose-board.repository';
import { InMemoryBoardRepository } from './infra/databases/adapters/in-memory/in-memory-board-repository'; 
import { BoardController } from './presentation/controllers/board/board.controller';
import { databaseConfig } from './infra/config/database.config';
import { ListBoards } from './application/use-cases/list-boards';
import { AddCard } from './application/use-cases/add-card';
import { CardController } from './presentation/controllers/card/card-controller';
import { ColumnController } from './presentation/controllers/column/column-controller';
import { AddColumn } from './application/use-cases/add-column';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.uri),
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  controllers: [BoardController,CardController,ColumnController],
  providers: [
    CreateBoard,
    { provide: 'BoardRepository', useClass: InMemoryBoardRepository }, 
    ListBoards,
    { provide: 'BoardRepository', useClass: MongooseBoardRepository },
    AddCard,
    AddColumn,
  ],
})
export class AppModule {}