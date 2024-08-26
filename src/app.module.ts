import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CreateBoard } from './application/use-cases/create-board';

import { BoardSchema } from './infra/databases/mongoose/schemas/board.schema';
import { MongooseBoardRepository } from './infra/databases/mongoose/repositories/mongoose-board.repository';
import { InMemoryBoardRepository } from './infra/databases/adapters/in-memory/in-memory-board-repository'; 
import { BoardController } from './presentation/controllers/board.controller';
import { databaseConfig } from './infra/config/database.config';
import { ListBoards } from './application/use-cases/list-boards';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.uri),
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  controllers: [BoardController],
  providers: [
    CreateBoard,
    { provide: 'BoardRepository', useClass: InMemoryBoardRepository }, 
    ListBoards,
    { provide: 'BoardRepository', useClass: MongooseBoardRepository },
  ],
})
export class AppModule {}