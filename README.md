# 🧩 Maze Generator

<img width="2560" height="1440" alt="Screenshot 2026-06-11 at 3 51 34 PM (2)" src="https://github.com/user-attachments/assets/731c9dd7-a37d-4b41-91a1-5d9378c04955" />


A procedural maze generator built with **p5.js** using a randomized **Depth-First Search (DFS)** algorithm with backtracking.

🔗 **Demo:** [Run the Project](PASTE_YOUR_P5_LINK_HERE)

---

## 🚀 How It Works

* Create an `M × N` grid of cells.
* Start from the center cell.
* Randomly choose a valid neighboring cell.
* Break the wall between the current cell and the chosen neighbor.
* Mark the new cell as visited.
* Continue exploring until a dead end is reached.
* Backtrack to the most recent cell with available moves.
* Repeat until every cell has been visited.

---

## ✨ Features

* 🎲 Random maze generation
* 🔄 DFS + Backtracking
* 🎨 Real-time visualization
* 🛣️ Fully connected maze
* ♾️ Unique maze every run

---

## 🛠️ Tech Stack

* JavaScript
* p5.js

---

## 🔮 Future Improvements

* ⚙️ Adjustable grid size (`M × N`)
* 🎨 Custom color selection
* 📍 Custom starting positions
* 🧭 Maze solving visualization
* 🏰 Roguelike dungeon generation

---

## 🧠 Concepts Used

* Depth-First Search (DFS)
* Backtracking
* Grid Traversal
* Procedural Generation
