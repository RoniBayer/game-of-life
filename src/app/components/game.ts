import { rows, cols } from './Grid'

const positions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

export const nextMove = (g: number[][], i: number, j: number) => {
  let sum = 0 
  positions.forEach((position) => {
    const x = i + position[0]
    const y = j + position[1]
    if (x >= 0 && x < rows && y >= 0 && y < cols) {
      sum += g[x][y]
    }
  })
  if (sum < 2 || sum > 3) {
    return 0
  }
  if (sum === 3) {
    return 1
  }
  return g[i][j]
}

export function changeGridState(g: number[][]){
  const next = g.map((row, i) => {
    return row.map((cell, j) => nextMove(g, j ,i))
  })
  return next
}