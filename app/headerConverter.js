class HeaderConverter {

  convert(input) {
    const splitInput = input.split(' ')
    const header = splitInput.shift()

    const HashCount = header.length
    return `<h${HashCount}>${splitInput.join(" ")}</h${HashCount}>`
  }
}

module.exports = HeaderConverter
