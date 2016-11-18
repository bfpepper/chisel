class StrongConverter {

  convert(input) {
    const converted = input.replace("**", "<strong>").replace("**", "</strong>")
    return converted
  }
}

module.exports = StrongConverter
