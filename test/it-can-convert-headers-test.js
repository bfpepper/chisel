const expect = require("chai").expect
const HeaderConverter = require("./../app/headerConverter")

describe("headerConverter", () => {
  const converter = new HeaderConverter()
  it('makes an instance of HeaderConverter', () => {

    expect(converter).to.be.an.instanceof(HeaderConverter)
  });

  it("can convert to an h1 header", () => {
    const input = converter.convert("# This is a header")

    expect(input).to.equal("<h1>This is a header</h1>")
  });

  it("can convert to an h3 header", () => {
    const input = converter.convert("### This is a header")

    expect(input).to.equal("<h3>This is a header</h3>")
  });

})
