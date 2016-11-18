class EmphasisConverter{

  convert(input) {
    const converted = input.replace("*", "<em>").replace("*", "</em>")
    return converted
  }
}

module.exports = EmphasisConverter
