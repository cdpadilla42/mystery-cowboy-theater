export function priceConverter(price) {
  return `$${price / 100}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getStreetName() {
  const streets = [
    'Congress-Avenue',
    'Sixth-Street',
    'Rainey-Street',
    'West-End-Market-District',
    'Seaholm-District',
    'Barton-Springs-Road',
    'West-Anderson-Ln',
    'Red-River-Cultural-District',
    'The-Domain',
    'Mueller',
    'West-Campus',
    'Airport-Blvd',
  ];

  return rando(streets);
}
