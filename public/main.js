console.log('it works');
let mode = 'light';
const changeMode = () => {
  if (mode === 'light') {
    document.body.style.background = "#111"
    document.body.style.color = "#fff"
    mode = 'dark';
  } else {
    document.body.style.background = "#fff"
    document.body.style.color = "#000"
    mode = 'light';
  }

}
