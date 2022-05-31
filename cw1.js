function titleCase(title, minorWords = "") {
  let t_arr = title.split(" ")
  let mSet = new Set(minorWords.toLowerCase().split(" "))

  t_arr[0] = t_arr[0].charAt(0).toUpperCase() + t_arr[0].slice(1).toLowerCase()

  for (let i = 1; i < t_arr.length; i++) {
    t_arr[i] = !mSet.has(t_arr[i].toLowerCase())
      ? t_arr[i] = t_arr[i].charAt(0).toUpperCase() + t_arr[i].slice(1).toLowerCase()
      : t_arr[i] = t_arr[i].toLowerCase()
  }
  return t_arr.join(" ")
}

s1 = 'a clash of KINGS'
ex1 = 'a an the of'
s2 = 'THE WIND IN THE WILLOWS'
ex2 = 'The In'
s3 = 'the quick brown fox'
ex3 = 'a an the of'

console.log(titleCase(s1, ex1))
console.log(titleCase(s2, ex2))
console.log(titleCase(s3))