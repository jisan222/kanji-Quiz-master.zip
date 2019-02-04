//THE AREA WHERE THE KANJI GOES
const kanji = document.querySelector('.kanji');
console.log(kanji)

//THE AREA WHERE THE KANJI USER TYPES THE ROMAJI

const input = document.getElementById('input');

//THE AREA WHERE THE USER CLICKS TO CHECK THEIR ANSWER

const check = document.getElementById('check');

const kanjiObj ={
    jin: "人",
    shin: "新",
    eki:"駅",
    den:"電"
    uchi:"家",
    
}

const kanjiValue = Object.values(kanjiObj);

const kanjikey = Object.keys(kanjiObj);

let counter = 0;

let nowKanji = kanjiValue[counter];

let nowRomaji = kanjikey[counter]
check.addEventListener('click',function(){
    if(input.value === nowRomaji){
        displayCorrect();
    } else {
        console.log(nowRomaji)
        console.log('WRONG!')
    }
   });
   function sayCorrect(){
       if(counter < 3){
           kanji.innerHTML = "Correct!"
           setTimeout(function(){
               kanji.innerHTML = nowKanji;
        
           },1000);
        } else {
         kanji.innerHTML = "Good Luck with JLPT N1!"   
    }
   }

   function　displayCorrect(){
    counter++
    nowKanji = kanjiValue[counter]
    console.log(nowKanji)
    kanji.innerHTML = nowKanji;
    input.value = '';
   } else {
       kanji.innerHTML = "Game Over!"

    
   }
   function displayInCorrect(){
       kanji.innerHTML = "Wrong!"
       kanji.style.color = "red";
       input.value = '';
       setTimeout(function(){
           kanji.style.color = "black"
           kanji.innerHTML = nowKanji;
       },1000)_
   }