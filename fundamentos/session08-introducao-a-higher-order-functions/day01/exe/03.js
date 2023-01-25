const fVerifyAut = (rightAns, studentAns, func) => {
  return func(rightAns, studentAns)
};

const fCorretor = (rightAns, studentAns) => {
  let total = 0;
  studentAns.forEach((v) => {
    rightAns.forEach((v2) => {
      if (v !== 'N.A') {
        if (v === v2) {
          total += 1;
        } else {
          total -= 0.5;
        }
      }
    });
  });
  return total;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(fVerifyAut(RIGHT_ANSWERS, STUDENT_ANSWERS, fCorretor));