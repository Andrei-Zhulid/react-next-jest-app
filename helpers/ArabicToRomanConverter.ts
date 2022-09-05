const lookup = new Map<string, number>([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
])

export default class ArabicToRomanConverter {
  static convert(value: number): string {
    if (value <= 0)
      return ""

    let arabic = value
    let roman = ""
    for (let [key, value] of lookup) {
      while (arabic >= value) {
        roman += key
        arabic -= value
      }
    }

    return roman
  }
}