/**
 * store-data.js
 * SmartMarkt – Produkt- & Marktdatenbank
 * Ersetze dies später durch echte Supabase/API-Calls
 */

// ── MÄRKTE ──────────────────────────────────────────────────
export const STORES = [
  { id: 'rewe1',  name: 'REWE Stadtmitte',       addr: 'Hauptstraße 12, 27232 Sulingen',      icon: '🛒', color: '#CC0000', open: true,  dist: '0,3 km', deals: 12 },
  { id: 'rewe2',  name: 'REWE Bahnhof',           addr: 'Bahnhofstraße 5, 27232 Sulingen',     icon: '🛒', color: '#CC0000', open: true,  dist: '0,8 km', deals: 8  },
  { id: 'lidl1',  name: 'Lidl Sulingen',          addr: 'Bremer Straße 44, 27232 Sulingen',    icon: '🏪', color: '#FFD700', open: true,  dist: '1,1 km', deals: 15 },
  { id: 'aldi1',  name: 'Aldi Nord',              addr: 'Lange Straße 8, 27232 Sulingen',      icon: '🏬', color: '#1E6EBA', open: false, dist: '1,4 km', deals: 9  },
  { id: 'edeka1', name: 'EDEKA Frische-Center',   addr: 'Am Markt 3, 27232 Sulingen',          icon: '🛍️', color: '#E30613', open: true,  dist: '1,7 km', deals: 7  },
];

// ── ABTEILUNGEN ──────────────────────────────────────────────
export const DEPARTMENTS = {
  drinks:    { name: 'Getränke',         icon: '🍺', color: '#16A34A', bg: '#DCFCE7', zone: 'Gang A', shelfRange: 'A1–A5', gridPos: { r: 7, c: 3 } },
  dairy:     { name: 'Molkerei & Käse',  icon: '🥛', color: '#2563EB', bg: '#DBEAFE', zone: 'Gang B', shelfRange: 'B1–B4', gridPos: { r: 7, c: 6 } },
  food:      { name: 'Lebensmittel',     icon: '🍝', color: '#D97706', bg: '#FEF3C7', zone: 'Gang C', shelfRange: 'C1–C7', gridPos: { r: 7, c: 9 } },
  household: { name: 'Haushalt & Pflege',icon: '🧴', color: '#9333EA', bg: '#FAF5FF', zone: 'Gang D', shelfRange: 'D1–D5', gridPos: { r: 7, c: 12} },
  produce:   { name: 'Obst & Gemüse',    icon: '🍎', color: '#15803D', bg: '#F0FDF4', zone: 'Hinterwand links',  shelfRange: 'OG1–OG4', gridPos: { r: 2, c: 4 } },
  meat:      { name: 'Fleisch & Fisch',  icon: '🥩', color: '#DC2626', bg: '#FEF2F2', zone: 'Hinterwand rechts', shelfRange: 'FF1–FF2', gridPos: { r: 2, c: 8 } },
  bakery:    { name: 'Bäckerei',         icon: '🥐', color: '#B45309', bg: '#FEF3C7', zone: 'Hinten rechts',     shelfRange: 'BK1–BK2', gridPos: { r: 2, c: 12} },
  freezer:   { name: 'Tiefkühlkost',     icon: '❄️', color: '#0891B2', bg: '#ECFEFF', zone: 'Gang TK',           shelfRange: 'TK1–TK3', gridPos: { r: 7, c: 15} },
};

// ── PRODUKTE ─────────────────────────────────────────────────
// Format: { n: Name, dk: DeptKey, s: Regal, i: Icon, gridR: row, gridC: col }
export const PRODUCTS = [
  // MOLKEREI
  { n: 'Vollmilch 3,8%',     dk: 'dairy',     s: 'B1', i: '🥛', gridR: 5,  gridC: 5  },
  { n: 'Hafermilch',         dk: 'dairy',     s: 'B1', i: '🥛', gridR: 6,  gridC: 5  },
  { n: 'Butter 250g',        dk: 'dairy',     s: 'B3', i: '🧈', gridR: 8,  gridC: 5  },
  { n: 'Joghurt natur',      dk: 'dairy',     s: 'B2', i: '🥛', gridR: 9,  gridC: 5  },
  { n: 'Gouda jung 400g',    dk: 'dairy',     s: 'B4', i: '🧀', gridR: 10, gridC: 5  },
  { n: 'Mozzarella',         dk: 'dairy',     s: 'B4', i: '🧀', gridR: 10, gridC: 6  },
  { n: 'Sahne 30%',          dk: 'dairy',     s: 'B2', i: '🥛', gridR: 5,  gridC: 6  },
  { n: 'Quark mager',        dk: 'dairy',     s: 'B2', i: '🥛', gridR: 6,  gridC: 6  },
  { n: 'Frischkäse',         dk: 'dairy',     s: 'B3', i: '🧀', gridR: 8,  gridC: 6  },
  { n: 'Kefir',              dk: 'dairy',     s: 'B1', i: '🥛', gridR: 4,  gridC: 5  },
  // GETRÄNKE
  { n: 'Wasser still 1,5L',  dk: 'drinks',    s: 'A1', i: '💧', gridR: 4,  gridC: 2  },
  { n: 'Wasser sprudelnd',   dk: 'drinks',    s: 'A1', i: '💧', gridR: 5,  gridC: 2  },
  { n: 'Cola Zero 1,5L',     dk: 'drinks',    s: 'A3', i: '🥤', gridR: 8,  gridC: 2  },
  { n: 'Orangensaft 1L',     dk: 'drinks',    s: 'A2', i: '🍊', gridR: 6,  gridC: 2  },
  { n: 'Pils Bier 6er',      dk: 'drinks',    s: 'A4', i: '🍺', gridR: 9,  gridC: 2  },
  { n: 'Rotwein Cabernet',   dk: 'drinks',    s: 'A5', i: '🍷', gridR: 10, gridC: 2  },
  { n: 'Energydrink',        dk: 'drinks',    s: 'A3', i: '⚡', gridR: 8,  gridC: 3  },
  { n: 'Apfelsaft 1L',       dk: 'drinks',    s: 'A2', i: '🍏', gridR: 6,  gridC: 3  },
  // LEBENSMITTEL
  { n: 'Spaghetti 500g',     dk: 'food',      s: 'C1', i: '🍝', gridR: 4,  gridC: 8  },
  { n: 'Penne rigate',       dk: 'food',      s: 'C2', i: '🍝', gridR: 5,  gridC: 8  },
  { n: 'Basmati Reis 1kg',   dk: 'food',      s: 'C3', i: '🍚', gridR: 6,  gridC: 8  },
  { n: 'Zucker weiß 1kg',    dk: 'food',      s: 'C4', i: '🍬', gridR: 9,  gridC: 8  },
  { n: 'Schokolade Vollmilch',dk:'food',      s: 'C5', i: '🍫', gridR: 10, gridC: 8  },
  { n: 'Cornflakes',         dk: 'food',      s: 'C6', i: '🥣', gridR: 10, gridC: 9  },
  { n: 'Ketchup Heinz',      dk: 'food',      s: 'C7', i: '🥫', gridR: 5,  gridC: 9  },
  { n: 'Olivenöl',           dk: 'food',      s: 'C4', i: '🫙', gridR: 9,  gridC: 9  },
  { n: 'Weizenmehl 405',     dk: 'food',      s: 'C1', i: '🌾', gridR: 4,  gridC: 9  },
  { n: 'Tomatenmark',        dk: 'food',      s: 'C7', i: '🥫', gridR: 6,  gridC: 9  },
  { n: 'Haferflocken',       dk: 'food',      s: 'C6', i: '🌾', gridR: 10, gridC: 8  },
  // HAUSHALT
  { n: 'Fairy Spülmittel',   dk: 'household', s: 'D1', i: '🧴', gridR: 4,  gridC: 11 },
  { n: 'Ariel Pods',         dk: 'household', s: 'D2', i: '🫧', gridR: 5,  gridC: 11 },
  { n: 'Head & Shoulders',   dk: 'household', s: 'D3', i: '🧴', gridR: 6,  gridC: 11 },
  { n: 'Zahnpasta',          dk: 'household', s: 'D4', i: '🪥', gridR: 9,  gridC: 11 },
  { n: 'Küchenpapier',       dk: 'household', s: 'D5', i: '🧻', gridR: 10, gridC: 11 },
  { n: 'Müllbeutel 10L',     dk: 'household', s: 'D5', i: '🗑️', gridR: 10, gridC: 12 },
  // OBST & GEMÜSE
  { n: 'Äpfel Pink Lady',    dk: 'produce',   s: 'OG1',i: '🍎', gridR: 1,  gridC: 2  },
  { n: 'Bananen Bio',        dk: 'produce',   s: 'OG1',i: '🍌', gridR: 1,  gridC: 3  },
  { n: 'Tomaten Roma',       dk: 'produce',   s: 'OG2',i: '🍅', gridR: 1,  gridC: 4  },
  { n: 'Gurke',              dk: 'produce',   s: 'OG2',i: '🥒', gridR: 2,  gridC: 2  },
  { n: 'Karotten 1kg',       dk: 'produce',   s: 'OG3',i: '🥕', gridR: 2,  gridC: 3  },
  { n: 'Paprika rot',        dk: 'produce',   s: 'OG2',i: '🫑', gridR: 2,  gridC: 4  },
  { n: 'Zwiebeln 1kg',       dk: 'produce',   s: 'OG4',i: '🧅', gridR: 1,  gridC: 5  },
  { n: 'Babyspinat',         dk: 'produce',   s: 'OG3',i: '🥬', gridR: 2,  gridC: 5  },
  // FLEISCH & FISCH
  { n: 'Hähnchenbrustfilet', dk: 'meat',      s: 'FF1',i: '🍗', gridR: 1,  gridC: 7  },
  { n: 'Rinderhackfleisch',  dk: 'meat',      s: 'FF1',i: '🥩', gridR: 1,  gridC: 8  },
  { n: 'Lachsfilet',         dk: 'meat',      s: 'FF2',i: '🐟', gridR: 1,  gridC: 9  },
  { n: 'Garnelen TK',        dk: 'meat',      s: 'FF2',i: '🦐', gridR: 2,  gridC: 7  },
  // BÄCKEREI
  { n: 'Sauerteigbrot',      dk: 'bakery',    s: 'BK1',i: '🍞', gridR: 1,  gridC: 11 },
  { n: 'Baguette frisch',    dk: 'bakery',    s: 'BK1',i: '🥖', gridR: 1,  gridC: 12 },
  { n: 'Croissant 4er',      dk: 'bakery',    s: 'BK2',i: '🥐', gridR: 2,  gridC: 11 },
  { n: 'Laugenbrezel',       dk: 'bakery',    s: 'BK2',i: '🥨', gridR: 2,  gridC: 12 },
  // TIEFKÜHL
  { n: 'TK-Pizza Margherita',dk: 'freezer',   s: 'TK1',i: '🍕', gridR: 4,  gridC: 14 },
  { n: 'TK-Erbsen 450g',     dk: 'freezer',   s: 'TK2',i: '🫛', gridR: 6,  gridC: 14 },
  { n: 'Pommes frites',      dk: 'freezer',   s: 'TK2',i: '🍟', gridR: 9,  gridC: 14 },
  { n: 'Vanille-Eis 1L',     dk: 'freezer',   s: 'TK3',i: '🍦', gridR: 10, gridC: 14 },
  { n: 'TK-Spinat',          dk: 'freezer',   s: 'TK2',i: '🥬', gridR: 5,  gridC: 15 },
];

// ── ANGEBOTE (wird später aus DB geladen) ───────────────────
export const WEEKLY_OFFERS = [
  { id: 1,  name: 'Butter 250g',        dept: 'dairy',     icon: '🧈', oldPrice: 1.89, newPrice: 1.29, shelf: 'B3', valid: 'Sa 05.04.' },
  { id: 2,  name: 'Vollmilch 3,8%',     dept: 'dairy',     icon: '🥛', oldPrice: 1.29, newPrice: 0.89, shelf: 'B1', valid: 'Sa 05.04.' },
  { id: 3,  name: 'Lachsfilet 300g',    dept: 'meat',      icon: '🐟', oldPrice: 6.99, newPrice: 4.99, shelf: 'FF2',valid: 'Do 03.04.' },
  { id: 4,  name: 'Äpfel Pink Lady 1kg',dept: 'produce',   icon: '🍎', oldPrice: 2.49, newPrice: 1.79, shelf: 'OG1',valid: 'Sa 05.04.' },
  { id: 5,  name: 'Cola Zero 6×1,5L',  dept: 'drinks',    icon: '🥤', oldPrice: 4.99, newPrice: 3.49, shelf: 'A3', valid: 'Sa 05.04.' },
  { id: 6,  name: 'Pils Bier 6er',      dept: 'drinks',    icon: '🍺', oldPrice: 5.49, newPrice: 3.99, shelf: 'A4', valid: 'Sa 05.04.' },
  { id: 7,  name: 'Spaghetti 500g',     dept: 'food',      icon: '🍝', oldPrice: 1.49, newPrice: 0.79, shelf: 'C1', valid: 'Di 01.04.' },
  { id: 8,  name: 'Fairy Spülmittel',   dept: 'household', icon: '🧴', oldPrice: 2.29, newPrice: 1.49, shelf: 'D1', valid: 'Sa 05.04.' },
  { id: 9,  name: 'Gouda jung 400g',    dept: 'dairy',     icon: '🧀', oldPrice: 2.99, newPrice: 2.19, shelf: 'B4', valid: 'Sa 05.04.' },
  { id: 10, name: 'TK-Pizza Margherita',dept: 'freezer',   icon: '🍕', oldPrice: 2.99, newPrice: 1.99, shelf: 'TK1',valid: 'Sa 05.04.' },
  { id: 11, name: 'Bananen Bio 1kg',    dept: 'produce',   icon: '🍌', oldPrice: 1.99, newPrice: 1.29, shelf: 'OG1',valid: 'Sa 05.04.' },
  { id: 12, name: 'Croissant 4er',      dept: 'bakery',    icon: '🥐', oldPrice: 2.49, newPrice: 1.79, shelf: 'BK2',valid: 'Do 03.04.' },
];

// ── HELFER-FUNKTIONEN ────────────────────────────────────────
export function getProductByName(name) {
  return PRODUCTS.find(p => p.n.toLowerCase().includes(name.toLowerCase()));
}

export function getProductsByDept(deptKey) {
  return PRODUCTS.filter(p => p.dk === deptKey);
}

export function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.n.toLowerCase().includes(q) ||
    DEPARTMENTS[p.dk]?.name.toLowerCase().includes(q)
  );
}

export function guessDept(itemName) {
  const v = itemName.toLowerCase();
  if (['wasser','saft','bier','wein','cola','limo','energy'].some(k => v.includes(k))) return 'drinks';
  if (['milch','butter','käse','joghurt','sahne','quark','mozzarella','kefir'].some(k => v.includes(k))) return 'dairy';
  if (['nudel','pasta','spaghetti','reis','mehl','zucker','schoko','hafer','ketchup','öl'].some(k => v.includes(k))) return 'food';
  if (['spülmittel','waschmittel','shampoo','zahnpasta','seife','duschmittel'].some(k => v.includes(k))) return 'household';
  if (['apfel','banane','tomate','gurke','karotte','spinat','paprika','zwiebel'].some(k => v.includes(k))) return 'produce';
  if (['fleisch','hähnchen','lachs','fisch','garnelen','hackfleisch'].some(k => v.includes(k))) return 'meat';
  if (['brot','brötchen','baguette','croissant','brezel'].some(k => v.includes(k))) return 'bakery';
  if (['pizza','tiefkühl','pommes','erbsen','eis'].some(k => v.includes(k))) return 'freezer';
  return 'food';
}
