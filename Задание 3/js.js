
let pcNum=[];// массив в который будут добавляться случайные значения от ПК
let userNumbr=[];// массив в который будут добавляться случайные значения от пользователя
let move=6;// кол-во ходов
let arrayFit=[];// кол-во совпадений на нужном месте
let arrayExists=[];// кол-во совпадений не на своём месте
let volumeNum=Math.floor(Math.random()*7);//  ограничение до 6 знаков
if(volumeNum<3){// условие кол-во символов не меньше 3
    volumeNum=3;
}


function randomNumPc(){// создание случайных чисел от ПК
    for(i=0;i<volumeNum;i++){
        let uniqNum=Math.floor(Math.random()*10)
        if(pcNum.indexOf(uniqNum)<0){// добавление в основной массив чисел, которые не совпадают с уже имеющимися
            pcNum.push(uniqNum);
        }
    }   
    while(pcNum.length<3){
        let numbr=Math.floor(Math.random()*10)
        if(pcNum.indexOf(numbr)<0){
            pcNum.push(numbr);
        }
    }
}
randomNumPc();
document.getElementById("newGame").innerHTML=` Игра Быки и коровы <br> Введите ${pcNum.length} значное число ` ;

document.getElementById("number").placeholder= `Введите ${pcNum.length} значное число` ;

function userNum(){// получение числа от пользователя
let userInput=document.querySelector("input").value; // значение введенное пользователем
let str=Array.from(userInput).join(',')// преобразование строчки в массив ,затем обратно в строчку с разделением каждого числа
userNumbr=JSON.parse("["+str+"]")// получение массива с типом данных значений number

if(userNumbr.length!==pcNum.length){// уведомление для пользователя при написании числа < или > 
alert(`Введите число длинной ${pcNum.length} символа`)
return;
}
move--;// уменьшение числа ходов
checkNums()
} 

function checkNums(){
    for(let i=0;i<pcNum.length;i++){
        if(userNumbr[i]===pcNum[i]){// сравнение чисел на своем месте
        arrayFit.push(userNumbr[i])
        }else if(pcNum.indexOf(userNumbr[i])>=0){// поиск числа на наличие в массиве
            arrayExists.push(userNumbr[i])
        }
    }
    document.getElementById("move").innerHTML=`Осталось ${move} ходов ` ;
    victory();
    gameOver();
    document.getElementById("game").innerHTML=`Совпавших цифр не на своих местах - ${arrayExists.length} (${arrayExists.join(',')}), цифр на своих местах - ${arrayFit.length} (${arrayFit.join(',')}) ` ;
    removeArray(userNumbr);
    removeArray(arrayFit);
    removeArray(arrayExists);
}

function victory(){
    if(arrayFit.length===pcNum.length){
        alert("Вы выйграли");
    }
}

function gameOver(){
    if(move===0){
        alert("Игра окончена")
    }
}
function removeArray(arrayy){
    while(arrayy.length!==0){
        arrayy.pop()
    }

}




