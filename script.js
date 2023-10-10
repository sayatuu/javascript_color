// JavaScript
//console.log(document.getElementById('myColer').value)

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');


function changeColor(){
  //背景色を表示
  document.body.style.backgroundColor = color.value;
  //カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = 'コード：' + color.value + '(white)';
  } else if (color.value === '#ff0000') {
    text.textContent = 'コード：' + color.value + '(red)';
  } else {
    text.textContent = 'コード：' + color.value;
  }
}

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', changeColor);