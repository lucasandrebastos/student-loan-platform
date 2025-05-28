export function calculatePMT(PV: number, n: number, iPercentual: number) {
  const i = iPercentual / 100;
  const PMT = PV * (i / (1 - Math.pow(1 + i, -n)));
  return PMT;
}
