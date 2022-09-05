export default class ArabicToRomanConverter {
  static convert(value: number): string {
    if (value <= 0)
      return ""

    return value.toString()
  }
}