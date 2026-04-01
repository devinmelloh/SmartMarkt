/**
 * map-engine.js
 * SmartMarkt – Karten-Engine & A*-Pathfinding
 * Ausgelagert für einfache Weiterentwicklung in Claude Code
 */

// ── STORE GRID ──────────────────────────────────────────────
// 20×16 Zellen, jede Zelle ~1m
// 0=Boden  1=Wand  2=Getränke  3=Molkerei  4=Lebensmittel
// 5=Haushalt  6=Obst&Gemüse  7=Fleisch  8=Kasse
// 9=Bäckerei  10=Eingang  12=Tiefkühl
export const STORE_GRID = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,6,6,6,0,7,7,7,7,0,9,9,0,0,0,0,0,0,1],
  [1,0,6,6,6,0,7,7,7,7,0,9,9,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,2,2,0,3,3,0,4,4,0,5,5,0,12,12,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,8,8,0,8,8,0,8,8,0,8,8,0,0,0,0,0,0,1],
  [1,0,8,8,0,8,8,0,8,8,0,8,8,0,0,0,0,0,0,1],
  [1,0,0,0,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

export const GRID_W = 20;
export const GRID_H = 16;

// ── WALKABILITY ──────────────────────────────────────────────
export function isWalkable(r, c, grid = STORE_GRID) {
  if (r < 0 || c < 0 || r >= GRID_H || c >= GRID_W) return false;
  const v = grid[r][c];
  return v === 0 || v === 10;
}

// ── A* PATHFINDING ───────────────────────────────────────────
/**
 * Berechnet den kürzesten Weg von (sr,sc) nach (er,ec)
 * Gibt Array von [row, col] zurück oder null wenn kein Weg
 */
export function astar(sr, sc, er, ec, grid = STORE_GRID) {
  const key = (r, c) => r * 100 + c;
  const h   = (r, c) => Math.abs(r - er) + Math.abs(c - ec);
  const open = new Map(), gScore = {}, parent = {};
  const startKey = key(sr, sc);
  gScore[startKey] = 0;
  open.set(startKey, h(sr, sc));
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let iterations = 0;

  while (open.size && iterations++ < 3000) {
    let bestKey = null, bestF = Infinity;
    for (const [k, f] of open) if (f < bestF) { bestF = f; bestKey = k; }
    open.delete(bestKey);

    const r = Math.floor(bestKey / 100), c = bestKey % 100;
    if (r === er && c === ec) {
      const path = [];
      let cur = bestKey;
      while (cur !== undefined) {
        path.unshift([Math.floor(cur / 100), cur % 100]);
        cur = parent[cur];
      }
      return path;
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (!isWalkable(nr, nc, grid)) continue;
      const nk = key(nr, nc);
      const ng = gScore[bestKey] + 1;
      if (gScore[nk] === undefined || ng < gScore[nk]) {
        gScore[nk] = ng;
        parent[nk] = bestKey;
        open.set(nk, ng + h(nr, nc));
      }
    }
  }
  return null; // kein Weg gefunden
}

/**
 * Entfernt redundante Zwischenpunkte (collineare Punkte)
 * Macht die Route visuell sauberer
 */
export function smoothPath(path) {
  if (!path || path.length < 3) return path || [];
  const out = [path[0]];
  for (let i = 1; i < path.length - 1; i++) {
    const [pr, pc] = path[i - 1], [r, c] = path[i], [nr, nc] = path[i + 1];
    if (r - pr !== nr - r || c - pc !== nc - c) out.push(path[i]);
  }
  out.push(path[path.length - 1]);
  return out;
}

/**
 * Findet die nächste begehbare Zelle in der Nähe von (r,c)
 */
export function nearestWalkable(r, c, grid = STORE_GRID) {
  const dirs = [[0,0],[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];
  for (const [dr, dc] of dirs)
    if (isWalkable(r + dr, c + dc, grid)) return [r + dr, c + dc];
  for (let d = 1; d <= 4; d++)
    for (let dr = -d; dr <= d; dr++)
      for (let dc = -d; dc <= d; dc++)
        if ((Math.abs(dr) === d || Math.abs(dc) === d) && isWalkable(r + dr, c + dc, grid))
          return [r + dr, c + dc];
  return null;
}

// ── TSP NEAREST NEIGHBOR ─────────────────────────────────────
/**
 * Berechnet optimale Reihenfolge der Stopps (Patent §3.3)
 * Nearest-Neighbor Heuristik – O(n²)
 */
export function tspNearestNeighbor(items, startR, startC, grid = STORE_GRID) {
  const visited = new Set();
  const ordered = [];
  let curR = startR, curC = startC;

  while (ordered.length < items.length) {
    let best = null, bestCost = Infinity;
    items.forEach((item, idx) => {
      if (visited.has(idx)) return;
      const dest = nearestWalkable(item.r, item.c, grid);
      if (!dest) return;
      const path = astar(curR, curC, dest[0], dest[1], grid);
      if (!path) return;
      const cost = path.length;
      if (cost < bestCost) { bestCost = cost; best = { idx, dest, cost }; }
    });
    if (!best) break;
    visited.add(best.idx);
    ordered.push({ ...items[best.idx], _dest: best.dest });
    curR = best.dest[0]; curC = best.dest[1];
  }
  return ordered;
}

// ── DISTANCE ESTIMATE ────────────────────────────────────────
/** Schätzt Distanz in Metern (1 Zelle ≈ 0.9m) */
export function pathToMeters(path) {
  return Math.round((path?.length || 0) * 0.9);
}

// ── CELL TYPE HELPERS ────────────────────────────────────────
export const CELL_TYPES = {
  0:  { name: 'Boden',         walkable: true  },
  1:  { name: 'Wand',          walkable: false },
  2:  { name: 'Getränke',      walkable: false, dept: 'drinks'    },
  3:  { name: 'Molkerei',      walkable: false, dept: 'dairy'     },
  4:  { name: 'Lebensmittel',  walkable: false, dept: 'food'      },
  5:  { name: 'Haushalt',      walkable: false, dept: 'household' },
  6:  { name: 'Obst & Gemüse', walkable: false, dept: 'produce'   },
  7:  { name: 'Fleisch & Fisch',walkable: false, dept: 'meat'     },
  8:  { name: 'Kasse',         walkable: false, dept: 'checkout'  },
  9:  { name: 'Bäckerei',      walkable: false, dept: 'bakery'    },
  10: { name: 'Eingang',       walkable: true                     },
  12: { name: 'Tiefkühl',      walkable: false, dept: 'freezer'   },
};

export function getCellInfo(r, c, grid = STORE_GRID) {
  const v = grid[r]?.[c];
  return CELL_TYPES[v] || CELL_TYPES[0];
}
