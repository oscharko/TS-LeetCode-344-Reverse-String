let s = ["h", "e", "l", "l", "o"]

const reverseStringFirstSolution = function(s: string[]): string[] {
  return s.reverse();
};

const reverseString = function(s: string[]): string[] {
  /*
  # Description for array v:
  #   - v[0] = temporary memory
  #   - v[1] = numbers-array left-end
  #   - v[2] = numbers-array right-end
  #   - v[3] = numbers-array input and also output
  */
  let v: [string, number, number, string[]] = ['', 0, s.length - 1, s]
  while (v[1] < v[2]) {
    v[0] = v[3][v[1]]
    v[3][v[1]] = v[3][v[2]]
    v[3][v[2]] = v[0]
    v[1]++
    v[2]--
  }
  return v[3]
}

console.log(reverseString(s))