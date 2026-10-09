// Please do not change the name of this function
function dnaPairs(dna) {
  if (!dna) return []

const pairs = {"C": "G","G": "C","T": "A", "A": "T"}
return dna.split("").map(base => [base, pairs[base]])
}

module.exports = dnaPairs;