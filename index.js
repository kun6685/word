function numberMaxLength(e){

  if(e.value.length > e.maxLength){
  
  e.value = e.value.slice(0, e.maxLength);
  
  }
  
}

let word = () => {

  if (window.event.keyCode == 13) {
  let suggestWord = document.getElementById('suggestWord');
  let answer = document.getElementById('answer');
  let result = document.getElementById('result');

  let firstWord = answer.value[0];
  let lastWord = suggestWord.innerText[suggestWord.innerText.length-1];

  if(firstWord === lastWord) {
    suggestWord.innerText = answer.value;
    answer.value = '';
    result.innerText = '정답!';
  } else {
    answer.value = '';
    result.innerText = '땡!';
  }
}

}


