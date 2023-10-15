export const prepareGroupNumber = (groupNumber: string) => {
  let array = groupNumber.replaceAll('-', '').split('')
  let rightGroupNumber = array
    .map((char: string, index: number) => {
      index === 2 ? (char += '-') : char
      return char
    })
    .join('')
  return rightGroupNumber
}
