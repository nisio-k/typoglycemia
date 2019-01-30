;(function(){

  'use strict';

  let i, j, randomAry;
  let val = {};
  let shuffled = '';
  const before = document.getElementById('before');
  const after = document.getElementById('after');
  const submit = document.getElementById('submit');

  // 重複しない乱数を生成
  const setRandomNumber = function(n){
    let num, index;
    randomAry = [];
    for( j=0; j < n; j++ ){
      randomAry.push(j);
    }
    for( j=0; j < n; j++ ){
      num = Math.floor( Math.random() * randomAry.length ) ;
      index = randomAry[num];
      randomAry.splice(num, 1);
      randomAry.push(index);
    }
  };
  // 文字列をシャッフルする
  const shuffleString = function(str){
    let char;
    const len = randomAry.length;
    shuffled = str[0];
    for( j=0; j < len; j++ ){
      char = str.charAt(randomAry[j] + 1);
      shuffled = shuffled + char;
    }
    shuffled = shuffled + str[len + 1];
  };

  submit.addEventListener('click', ()=>{
    val.before = '';
    val.after = '';
    after.value = '';
    val.before = before.value;
    if( val.before === '' ){
      return false;
    } else {
      val.before = val.before.replace(/　|\n/g, ' ').split(' ');
      for( i=0; i < val.before.length; i++ ){
        if( val.before[i].length >= 4 ){
          setRandomNumber(val.before[i].length - 2);
          shuffleString(val.before[i]);
          val.after = val.after + ' ' + shuffled;
        } else {
          val.after = val.after + ' ' + val.before[i];
        }
      }
      after.value = val.after;
    }
  });

})();
