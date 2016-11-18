const expect = require("chai").expect
const EmphasisConverter = require('./../app/emphasisConverter')

describe("emphasisConverter", () => {
  const converter = new EmphasisConverter()

  it("makes an instance of EmphasisConverter", () => {

    expect(converter).to.be.an.instanceof(EmphasisConverter)
  });

  it("converts '*' to '<em>' tags", () => {
    const input = converter.convert("*THIS*")

    expect(input).to.equal("<em>THIS</em>")
  });

  it("can handle the '*' inside of a sentence", () => {
    const sentence = ("This is the *test* sentence.")
    const input = converter.convert(sentence)

    expect(input).to.equal("This is the <em>test</em> sentence.")
  });
});
