const expect = require("chai").expect
const ParaConverter = require("./../app/paraConverter")

describe("paraConverter", () => {
  const converter = new ParaConverter()
  it("makes and instance of paraConverter", () => {

    expect(converter).to.be.an.instanceof(ParaConverter)
  });

  it("converts md paragraphs to html", () => {
    const input = converter.convert("This is a test")

    expect(input).to.equal("<p>This is a test</p>")
  })

  it("can handle not convertig a sinlge new line charecter", () => {
    const input = converter.convert("This is a two line test \nIsnt that cool.")

    expect(input).to.equal("<p>This is a two line test \nIsnt that cool.</p>")
  });

  it("can handle convertig two new line charecters", () => {
    const input = converter.convert("This is a two line test \n\nIsnt that cool.")

    expect(input).to.equal("<p>This is a two line test </p>\n\n<p>Isnt that cool.</p>")
  });
})
