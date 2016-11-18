const expect = require("chai").expect
const StrongConverter = require("./../app/strongConverter")

describe("strongConverter", () => {
  const converter = new StrongConverter()

  it("It makes an instance of StrongConverter", () => {

    expect(converter).to.be.an.instanceof(StrongConverter)
  });

  it("converts one word", () => {
    const input = converter.convert("**THIS**")

    expect(input).to.equal("<strong>THIS</strong>")
  });

  it("can handle the '**' inside of a sentence", () => {
    const sentence = ("This is the **test** sentence.")
    const input = converter.convert(sentence)

    expect(input).to.equal("This is the <strong>test</strong> sentence.")
  });
});
