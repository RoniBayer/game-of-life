'use client'
import { useEffect, useState } from "react"
import { setOriginalNode } from "typescript"
import { changeGridState } from "./game"
import './Grid.css'

export const rows = 5
export const cols = 5

const randomGrid = () => {
  const grid = []
  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * 2))
    }
    grid.push(row)
  }
  return grid
}

export const Grid = () => {
  const [grid, setGrid] = useState(randomGrid())
  const [isRunning, setIsRunning] = useState(false)

  const runSimulation = () => {
    setGrid(changeGridState(grid))
  }

  useEffect(() => {
    if (isRunning) {
          const timer = setTimeout(() => {
      // runSimulation()
      const g = changeGridState(grid)
      setGrid(g)
    }, 1000)
    return () => clearTimeout(timer)
    } 

  }, [grid, isRunning])

  return (
    <>
      <div>
        <button
          style={{ marginBottom: 20 ,padding: 20, fontSize: 20 }}
          onClick={() => {
            setIsRunning(!isRunning)
          }}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div>
      </div>
      <div className="grid" style={{ gridTemplateRows: `repeat(${rows}, 1fr)`, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {grid.map((row, i) => (
          row.map((cell, k) => (
            <div className="cell" key={k}
             style={{
              backgroundColor: grid[i][k] ? "pink" : "",
             }} />
          ))
      ))}
    </div>
    </>
  )
}