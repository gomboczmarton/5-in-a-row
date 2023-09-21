import { Injectable } from '@nestjs/common';
import { Grid } from './grid';
import { Winner } from './Winner';

@Injectable()
export class GridService {
  horizontalMask(grid: Grid, winner: Winner): Winner {
    for (let row: number = 0; row < 6; row++) {
      let xCounter: number = 0;
      let oCounter: number = 0;
      let previousCell: string = undefined;
      for (let col: number = 0; col < 9; col++) {
        const cell: string = grid.data[row][col];
        if (cell === 'x') {
          xCounter++;
          if (xCounter === 5) {
            winner.winnerColor = 'x';
          }
          if (previousCell !== 'x') {
            oCounter = 0;
          }
        }

        if (cell === 'o') {
          oCounter++;
          if (oCounter === 5) {
            winner.winnerColor = 'o';
          }
          if (previousCell !== 'o') {
            xCounter = 0;
          }
        }
        previousCell = cell;
      }
    }
    return winner;
  }

  verticalMask(grid: Grid, winner: Winner): Winner {
    for (let row: number = 0; row < 6; row++) {
      let xCounter: number = 0;
      let oCounter: number = 0;
      let previousCell: string = undefined;
      for (let col: number = 0; col < 9; col++) {
        const cell: string = grid.data[row][col];
        if (cell === 'x') {
          xCounter++;
          if (xCounter === 5) {
            winner.winnerColor = 'x';
          }
          if (previousCell !== 'x') {
            oCounter = 0;
          }
        }

        if (cell === 'o') {
          oCounter++;
          if (oCounter === 5) {
            winner.winnerColor = 'o';
          }
          if (previousCell !== 'o') {
            xCounter = 0;
          }
        }
        previousCell = cell;
      }
    }
    return winner;
  }
  //TODO: GM - diagonalMask(grid: Grid) {}
}
