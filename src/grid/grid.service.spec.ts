import { Test, TestingModule } from '@nestjs/testing';
import { GridService } from './grid.service';
import { Grid } from './grid';
import { Winner } from './Winner';

describe('GridService', () => {
  let service: GridService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GridService],
    }).compile();

    service = module.get<GridService>(GridService);
  });

  /************************************************************
   * HORIZONTAL MASK WINNER CALCULATOR TESTS ******************
   *************************************************************/
  it('GridService.horizontalMask finds x win in the 1st row', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['x', 'x', 'x', 'x', 'x', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds o win in the 1st row', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['o', 'o', 'o', 'o', 'o', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'o';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds x win in the 1st row - with o-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['o', 'x', 'o', 'o', 'x', 'x', 'x', 'x', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds o win in the 1st row - with x-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['x', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'o';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds x win in the 1st row - with empty-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'x', 'x', 'x', 'x', 'x', 'o', 'o'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds o win in the 1st row - with empty-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'o', 'o', 'o', 'o', 'o', 'x', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'o';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds x win in the 1st row - with empty-s and o-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'o', 'x', 'x', 'x', 'x', 'x', 'empty', 'o'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds x win in the 9th row - with empty-s and o-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'o', 'x', 'x', 'x', 'x', 'x', 'empty', 'o'],
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask finds o win in the 9th row - with empty-s and x-s inside', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'x', 'o', 'o', 'o', 'o', 'o', 'empty', 'x'],
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'o';
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.horizontalMask no win in the 9th row - unexpected string uff appears', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'x', 'o', 'o', 'o', 'uff', 'o', 'empty', 'x'],
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = undefined;
    expect(service.horizontalMask(grid, winner)).toEqual(expectedWinner);
  });


  /************************************************************
   * VERTICAL MASK WINNER CALCULATOR TESTS ******************
   *************************************************************/
  it('GridService.verticalMask finds x win in the 1st column', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask finds o win in the 1st column', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'o';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask no winner', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['uff', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = undefined;
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask finds x win in the 1st column - shifted with empty', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask finds x win in the 1st column - shifted with o', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['o', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['x', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask finds x win in the last column - shifted with o', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'o'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'x'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'x']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });

  it('GridService.verticalMask finds x win in the 5th column - shifted with o', () => {
    const grid: Grid = new Grid();
    grid.data = [
      ['empty', 'empty', 'empty', 'empty', 'o', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'x', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'x', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'x', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'x', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'x', 'empty', 'empty', 'empty', 'empty']
    ];
    const winner: Winner = new Winner();
    const expectedWinner: Winner = new Winner();
    expectedWinner.winnerColor = 'x';
    expect(service.verticalMask(grid, winner)).toEqual(expectedWinner);
  });
});
