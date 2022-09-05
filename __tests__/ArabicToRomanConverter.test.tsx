import ArabicToRomanConverter from '../helpers/ArabicToRomanConverter';

describe('Arabic to Roman Converter', () => {
  it('non-positive arabic numbers shouldn\'t be converter to roman', () => {
    let roman = ArabicToRomanConverter.convert(0)
    expect(roman).toBe("")
    roman = ArabicToRomanConverter.convert(-10)
    expect(roman).toBe("")
  })

  it('test arabic to roman converter', () => {
    let roman = ArabicToRomanConverter.convert(19)
    expect(roman).toBe("XIX")
    roman = ArabicToRomanConverter.convert(999)
    expect(roman).toBe("CMXCIX")
  })
})