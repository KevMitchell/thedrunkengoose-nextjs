export function joinString (arr = [], length = 1000, delimeter = '') {
  if (!arr.length) return ''

  let result = ''
  let currentLineLength = 0
  arr.forEach((item, index) => {
    if (index >= arr.length - 1) {
      result = result.concat(item)
    } else {
      currentLineLength += String(item).length
      const nextItemLength = String(arr[index + 1]).length + delimeter.length
      if (currentLineLength + nextItemLength > length) {
        result = result.concat(item).concat('\n')
        currentLineLength = 0
      } else {
        result = result.concat(item).concat(delimeter)
      }
    }
  })
  return result
}

export function joinJsx (arr = [], length = 1000, delimeter = '') {
  const createDiv = (elements, key) =>
    <div key={key}>{elements.reduce((a, c) => a.concat(delimeter).concat(c), '').replace(delimeter, '')}</div>

  const splitIntoLines = () => {
    let lineStart = 0
    let currentLineLength = 0
    const result = []
    for (let i = 0; i < arr.length; ++i) {
      if (i === arr.length - 1) {
        result.push(arr.slice(lineStart))
      } else {
        currentLineLength += String(arr[i]).length
        const nextItemLength = String(arr[i + 1]).length + delimeter.length
        if (currentLineLength + nextItemLength > length) {
          result.push(arr.slice(lineStart, i + 1))
          currentLineLength = 0
          lineStart = i + 1
        }
      }
    }

    return result
  }

  return (
    <>
      {splitIntoLines().map(createDiv)}
    </>
  )
}
