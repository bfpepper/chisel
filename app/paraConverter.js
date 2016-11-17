class ParaConverter {

  convert(input) {
    if(input.includes("\n\n")) {
      const splitInput = input.split("\n\n")
      return splitInput.reduce((result, message, index) => {
        result += '<p>'
        result += message
        result += '</p>'
        if (index !== splitInput.length - 1) result += '\n\n'
        return result
      }, '')
    } else {
      return `<p>${input}</p>`
    }
  }

}

module.exports = ParaConverter
