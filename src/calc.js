const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => (b === 0 ? 'não pode ser divido por zero' : a / b);

export { sum, sub, mult, div };

export default {};
