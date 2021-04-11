export const CopyCode = (id) => {
  let copyCode = document.getElementById(id)
  copyCode.select()
  document.execCommand("copy")
}