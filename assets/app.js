
const generateBtn = document.querySelector('#generate')

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
