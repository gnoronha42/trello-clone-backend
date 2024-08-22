import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CreateBoard } from './application/use-cases/create-board';

import { BoardSchema } from './infra/databases/mongoose/schemas/board.schema';
import { MongooseBoardRepository } from './infra/databases/mongoose/repositories/mongoose-board.repository';
import { BoardController } from './presentation/controllers/board.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/trello-clone'),
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  controllers: [BoardController],
  providers: [
    CreateBoard,
    { provide: 'BoardRepository', useClass: MongooseBoardRepository }
  ],
})
export class AppModule {}