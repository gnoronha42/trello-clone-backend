
import { ListBoards } from "../../src/application/use-cases/list-boards";
import { Board } from "../../src/domain/entities/board";
import { BoardRepository } from "../../src/domain/repositories/board-repository.interface";


describe('ListBoards', () => {
  let listBoards: ListBoards;
  let boardRepository: BoardRepository;

  beforeEach(() => {
    boardRepository = {
      findAll: jest.fn().mockResolvedValue([
        new Board('1', 'Board 1', []),
        new Board('2', 'Board 2', []),
        new Board('3', 'Another Board', []),
      ]),
    } as unknown as BoardRepository;
    listBoards = new ListBoards(boardRepository);
  });

  it('should return all boards when no filter is applied', async () => {
    const boards = await listBoards.execute();
    expect(boards).toHaveLength(3);
  });

  it('should return filtered boards by name', async () => {
    const boards = await listBoards.execute('Board');
    expect(boards).toHaveLength(2);
    expect(boards).toEqual([
      new Board('1', 'Board 1', []),
      new Board('2', 'Board 2', []),
    ]);
  });
});