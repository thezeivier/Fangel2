export const CopyCode = () => {
  let copyCode = document.getElementById("copyCode")
  copyCode.select()
  document.execCommand("copy")
}