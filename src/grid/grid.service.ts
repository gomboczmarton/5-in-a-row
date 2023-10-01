import { Injectable } from '@nestjs/common';
import { Grid } from './grid';
import { Winner } from './Winner';

export class CalcWinnerProperties {
  xCounter: number = 0;
  oCounter: number = 0;
  previousCell: string = undefined;
}

export class StartAndShiftProperties {
  startRow = 1;
  startCol = 0;
  rowShift: number = 0;
  colShift: number = 0;
}

@Injectable()
export class GridService {
  /**
   * Calculates x and o values horizontally (in a row)
   * ------
   *   5  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * R 4  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * O 3  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * W 2  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *   1  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *   0  (x) (x) (x) (x) (x) (x) (x) (x) (x)
   *       0   1   2   3   4   5   6   7   8
   *                COLUMN
   */
  horizontalMask(grid: Grid, winner: Winner): Winner {
    for (let row: number = 0; row < 6; row++) {
      const context = {
        xCounter: 0,
        oCounter: 0,
        previousCell: undefined,
      } as CalcWinnerProperties;
      for (let col: number = 0; col < 9; col++) {
        this.calcWinner(grid, row, col, context, winner);
      }
    }
    return winner;
  }

  /**
   * Calculates x and o values vertically (in a column)
   * ------
   *   5  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * R 4  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * O 3  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * W 2  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *   1  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *   0  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *       0   1   2   3   4   5   6   7   8
   *                COLUMN
   */
  verticalMask(grid: Grid, winner: Winner): Winner {
    for (let col: number = 0; col < 9; col++) {
      const context = {
        xCounter: 0,
        oCounter: 0,
        previousCell: undefined,
      } as CalcWinnerProperties;
      for (let row: number = 0; row < 6; row++) {
        this.calcWinner(grid, row, col, context, winner);
      }
    }
    return winner;
  }

  /**
   * Calculates x and o values in case of first type of diagonals
   * ------
   *   5  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * R 4  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * O 3  ( ) (x) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * W 2  ( ) ( ) (x) ( ) ( ) ( ) ( ) ( ) ( )
   *   1  ( ) ( ) ( ) (x) ( ) ( ) ( ) ( ) ( )
   *   0  ( ) ( ) ( ) ( ) (x) ( ) ( ) ( ) ( )
   *       0   1   2   3   4   5   6   7   8
   *                COLUMN
   */
  diagonalMask1(grid: Grid, winner: Winner) {
    const startRow: number = 0;
    for (let startCol: number = 0; startCol < 9; startCol++) {
      const indicesContext = {
        startRow: startRow,
        startCol: startCol,
        rowShift: 0,
        colShift: 0,
      } as StartAndShiftProperties;

      this.diagonalMask1Iteration(
        indicesContext,
        grid,
        winner,
        'Number of diagonal',
      );
    }
    // LAST DIAGONAL - last col, the row before last row
    const indicesContext = {
      startRow: 1,
      startCol: 8,
      rowShift: 0,
      colShift: 0,
    } as StartAndShiftProperties;

    this.diagonalMask1Iteration(indicesContext, grid, winner, 'Last diagonal');
    return winner;
  }

  private diagonalMask1Iteration(
    indicesContext: StartAndShiftProperties,
    grid: Grid,
    winner: Winner,
    text: string,
  ) {
    const context = {
      xCounter: 0,
      oCounter: 0,
      previousCell: undefined,
    } as CalcWinnerProperties;
    console.log(
      '------------------------------- ' +
        text +
        ': ' +
        (indicesContext.startCol + 1) +
        '---------------------------------------------',
    );
    while (
      indicesContext.startRow + indicesContext.rowShift < 6 &&
      indicesContext.startRow + indicesContext.rowShift >= 0 &&
      indicesContext.startCol + indicesContext.colShift < 9 &&
      indicesContext.startCol + indicesContext.colShift >= 0
    ) {
      console.log(
        'startRow + rowShift: ' +
          (indicesContext.startRow + indicesContext.rowShift) +
          ' startCol + colShift: ' +
          (indicesContext.startCol + indicesContext.colShift),
      );
      this.calcWinner(
        grid,
        indicesContext.startRow + indicesContext.rowShift,
        indicesContext.startCol + indicesContext.colShift,
        context,
        winner,
      );
      indicesContext.rowShift++;
      indicesContext.colShift--;
    }
  }

  /**
   * Calculates x and o values in case of second type of diagonals
   * ------
   *   5  ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   * R 4  ( ) ( ) ( ) ( ) (x) ( ) ( ) ( ) ( )
   * O 3  ( ) ( ) ( ) (x) ( ) ( ) ( ) ( ) ( )
   * W 2  ( ) ( ) (x) ( ) ( ) ( ) ( ) ( ) ( )
   *   1  ( ) (x) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *   0  (x) ( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )
   *       0   1   2   3   4   5   6   7   8
   *                COLUMN
   */
  diagonalMask2(grid: Grid, winner: Winner) {
    const startRow: number = 0;
    for (let startCol: number = 0; startCol < 9; startCol++) {
      const indicesContext = {
        startRow: startRow,
        startCol: startCol,
        rowShift: 0,
        colShift: 0,
      } as StartAndShiftProperties;

      this.diagonalMask2Iteration(
        indicesContext,
        grid,
        winner,
        'Number of diagonal',
      );
    }
    // LAST DIAGONAL - last col, the row before last row
    const indicesContext = {
      startRow: 1,
      startCol: 0,
      rowShift: 0,
      colShift: 0,
    } as StartAndShiftProperties;

    this.diagonalMask2Iteration(indicesContext, grid, winner, 'Last diagonal');
    return winner;
  }

  private diagonalMask2Iteration(
    indicesContext: StartAndShiftProperties,
    grid: Grid,
    winner: Winner,
    text: string,
  ) {
    console.log(
      '------------------------------- ' +
        text +
        ': ' +
        (indicesContext.startCol + 1) +
        '---------------------------------------------',
    );
    const context = {
      xCounter: 0,
      oCounter: 0,
      previousCell: undefined,
    } as CalcWinnerProperties;
    while (
      indicesContext.startRow + indicesContext.rowShift < 6 &&
      indicesContext.startRow + indicesContext.rowShift >= 0 &&
      indicesContext.startCol + indicesContext.colShift < 9 &&
      indicesContext.startCol + indicesContext.colShift >= 0
    ) {
      console.log(
        'startRow + rowShift: ' +
          (indicesContext.startRow + indicesContext.rowShift) +
          ' startCol + colShift: ' +
          (indicesContext.startCol + indicesContext.colShift),
      );
      this.calcWinner(
        grid,
        indicesContext.startRow + indicesContext.rowShift,
        indicesContext.startCol + indicesContext.colShift,
        context,
        winner,
      );
      indicesContext.rowShift++;
      indicesContext.colShift++;
    }
  }

  private calcWinner(
    grid: Grid,
    row: number,
    col: number,
    context: CalcWinnerProperties,
    winner: Winner,
  ) {
    const cell: string = grid.data[row][col];
    if (cell === 'x') {
      context.xCounter++;
      if (context.xCounter === 5) {
        winner.winnerColor = 'x';
      }
      if (context.previousCell !== 'x') {
        context.oCounter = 0;
      }
    }

    if (cell === 'o') {
      context.oCounter++;
      if (context.oCounter === 5) {
        winner.winnerColor = 'o';
      }
      if (context.previousCell !== 'o') {
        context.xCounter = 0;
      }
    }
    context.previousCell = cell;
  }
}
