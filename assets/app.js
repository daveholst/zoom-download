
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');

generateBtn.addEventListener('click', (event => {
  event.preventDefault();
  const fileName = document.querySelector('#file-name').value;
  const fileURL = document.querySelector('#file-url').value;
  const cookieHeader = document.querySelector('#cookie-header').value;
  const terminalCmd = document.querySelector('#terminal-cmd')
  console.dir(fileName);
  console.log('click');
  terminalCmd.value = `youtube-dl -o ${fileName} --referer "https://zoom.us/" --add-header "Cookie:${cookieHeader}" ${fileURL}`
}))

copyBtn.addEventListener('click', event => {
  event.preventDefault();
  const terminalCmd = document.querySelector('#terminal-cmd')
  terminalCmd.select();
  terminalCmd.setSelectionRange(0, 99999);
  document.execCommand("copy")
})

