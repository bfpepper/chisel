class ChunkMaker {
  constructor() {
    this.paragraphs = new ParaConverter()
    this.headers = new HeaderConverter()
    this.convertedParagraphs = []
  }

  doThing(input) {
    if(input === 'paragraph') {
      const pTags = this.paragraphs.convert(input)
      this.convertedParagraphs.push(pTags)
    }
  }

  doNextThing(pTag) {
    this.italicize.convert(pTag)
  }
}

const cm = new ChunkMaker()
cm.paragraphs = 'blah'

cm.doThing // <= now this will break
