export function analyzeVolume(trades) {
  let total = 0;
  trades.forEach(t => {
    total += t.salePrice;
  });
  return total;
}
