function score(dice) {
  bonus = { 1: 700, 2: 200, 3: 300, 4: 400, 5: 350, 6: 600 }
  const counts = {};
  result = 0
  for (const num of dice) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] == 3) result += bonus[num]
    result += num == 1 ? 100 : num == 5 ? 50 : 0
  }
  return result
}

console.log(score([1, 1, 1, 5, 1]))
console.log(score([4, 4, 4, 3, 3]))
console.log(score([2, 4, 4, 5, 4]))