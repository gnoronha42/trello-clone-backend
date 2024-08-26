import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardSchema } from '../schemas/board.schema';
import { Board } from 'src/domain/entities/board';
import { BoardRepository } from 'src/domain/repositories/board-repository.interface';

@Injectable()
export class MongooseBoardRepository implements BoardRepository {
  constructor(@InjectModel('Board') private readonly boardModel: Model<Board>) {}

  async findById(id: string): Promise<Board> {
    return this.boardModel.findById(id).exec();
  }

  async save(board: Board): Promise<void> {
    const createdBoard = new this.boardModel(board);
    await createdBoard.save();
  }

  create(boardData: Partial<Board>): Board {
    return new this.boardModel(boardData);
  }

  findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
    
  }
}