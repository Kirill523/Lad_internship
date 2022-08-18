const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}
const mag = {
    maxHealth: 10,
    name: "Евстафий",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
}
document.getElementById("lvlGame").style.display="none";
document.getElementById("playGames").style.display="none";
document.getElementById("flex").style.display="flex";
let hitMonster=0;
let cooldownHit2Monster=0;
let cooldownHit3Monster=0;

function randomHit (){
    if(cooldownHit3Monster!==0){
        if(cooldownHit2Monster===0){
             hitMonster=Math.floor(Math.random()*2)
             return

        }else{
             hitMonster=0   
             return
        }
    } 
    if(cooldownHit2Monster!==0){
        if(cooldownHit3Monster===0){
            let randomNum=1;
            while(randomNum===1){
                randomNum=Math.floor(Math.random()*3);
            }
            if(randomNum!==1){
            hitMonster=randomNum;
            return
               
            }
        }
        
    }
    hitMonster=Math.floor(Math.random()*3);
}


function checkHitMonster(){
    if(cooldownHit2Monster!==0){
        cooldownHit2Monster--
    }
    if(cooldownHit3Monster!==0){
        cooldownHit3Monster--
    }
    if(hitMonster===1){
        cooldownHit2Monster=3;
    }
    if(hitMonster===2){
        cooldownHit3Monster=2;
    }
  
}

function newGame(){
document.getElementById("newGames").style.display="none";
document.getElementById("lvlGame").style.display="block";
}


function playGame(){
document.getElementById("playGames").style.display="block";
document.getElementById("monsterHit").innerHTML=`Лютый  атакует приёмом: ${monster.moves[hitMonster].name}!`;
document.getElementById("infoHitMonster").innerHTML=infoDamage(monster,hitMonster);
btnHit()
}


function btnHit(){
    document.getElementById("info1Hit").innerHTML=infoDamage(mag,0);
    document.getElementById("info2Hit").innerHTML=infoDamage(mag,1);
    document.getElementById("info3Hit").innerHTML=infoDamage(mag,2);
    document.getElementById("info4Hit").innerHTML=infoDamage(mag,3);
    document.getElementById("1hit").innerHTML=`${mag.moves[0].name}`
    document.getElementById("2hit").innerHTML=`${mag.moves[1].name}`
    document.getElementById("3hit").innerHTML=`${mag.moves[2].name}`
    document.getElementById("4hit").innerHTML=`${mag.moves[3].name}`
}




function easyGame(){
mag.maxHealth=20
document.getElementById("lvlGame").style.display="none";
randomHit ()
playGame();
}
function mediumGame(){
    mag.maxHealth=15
    document.getElementById("lvlGame").style.display="none";
    randomHit ()
    playGame();
}
function hardGame(){
    mag.maxHealth=10
    document.getElementById("lvlGame").style.display="none";
    randomHit ()
    playGame();
}

function infoDamage(name,num){
   return `Физический урон:${name.moves[num].physicalDmg} <br>
    Магический урон:${name.moves[num].magicDmg}<br>
    Физическая броня:${name.moves[num].physicArmorPercents}<br>
    Магическая броня:${name.moves[num].magicArmorPercents}<br>
    Ходов для востановления:${name.moves[num].cooldown}
    `
}


let cooldownHit2=0
let cooldownHit3=0
let cooldownHit4=0
let numberHit=null;
let step=0;
function hitMag1(){
    numberHit=0
    checkCooldown()
    checkHitMonster()
    randomHit ()
    playGame()
    figth(hitMonster,numberHit)
}
function hitMag2(){
    if(cooldownHit2===0){
        document.getElementById("2hit").innerHTML=`${mag.moves[1].name}`
        numberHit=1
        cooldownHit2=4
        randomHit ()
        playGame()
        figth(hitMonster,numberHit)
    }else{
        return document.getElementById("2hit").innerHTML=`Удар ещё не восстановился`
    }
    checkHitMonster()
    checkCooldown()
}
function hitMag3(){
    if(cooldownHit3===0){
        document.getElementById("3hit").innerHTML=`${mag.moves[2].name}`
        numberHit=2
        cooldownHit3=3
        randomHit ()
        playGame()
        figth(hitMonster,numberHit)
    }else{
        return document.getElementById("3hit").innerHTML=`Удар ещё не восстановился`
    }
   
    checkHitMonster()
    checkCooldown()
}
function hitMag4(){
    if(cooldownHit4===0){
        document.getElementById("4hit").innerHTML=`${mag.moves[3].name}`
        numberHit=3
        cooldownHit4=4
        randomHit ()
        playGame()
        figth(hitMonster,numberHit)
    }else{
        return document.getElementById("4hit").innerHTML=`Удар ещё не восстановился`
    }
    checkHitMonster()
    checkCooldown()
}
function checkCooldown(){
if(cooldownHit2!==0){
    cooldownHit2--
}else{
    document.getElementById("2hit").innerHTML=`${mag.moves[1].name}`
}
if(cooldownHit3!==0){
    cooldownHit3--
}else{
    document.getElementById("3hit").innerHTML=`${mag.moves[2].name}`
}
if(cooldownHit4!==0){
    cooldownHit4--
}else{
    document.getElementById("4hit").innerHTML=`${mag.moves[3].name}`
}
}
function checkNumHit(){
    return numberHit;
}
function figth(monsterr,magg){
    let dmgMonster=monster.moves[monsterr].physicalDmg
    let dmgMagicMonster=monster.moves[monsterr].magicDmg
    let armorMonster=monster.moves[monsterr].physicArmorPercents
    let armorMagicMonster=monster.moves[monsterr].magicArmorPercents
    let dmgMag=mag.moves[magg].physicalDmg
    let dmgMagicMag=mag.moves[magg].magicDmg
    let armorMag=mag.moves[magg].physicArmorPercents
    let armorMagicMag=mag.moves[magg].magicArmorPercents
    
    if((dmgMonster-armorMag)>0){
        mag.maxHealth-=(dmgMonster-armorMag)
    }
    if((dmgMagicMonster-armorMagicMag)>0){
        mag.maxHealth-=(dmgMagicMonster-armorMagicMag)
    }
    if((dmgMag-armorMonster)>0){
        monster.maxHealth-=(dmgMag-armorMonster)
    }
    if((dmgMagicMag-armorMagicMonster)>0){
        monster.maxHealth-=(dmgMagicMag-armorMagicMonster)
    }
cheackHealth();
}
function cheackHealth(){
    step++;
    console.log(step)
    document.getElementById("steps").innerHTML=`${step} ход`
    document.getElementById("health").innerHTML=`${monster.name}: здоровье =${monster.maxHealth} <br>${mag.name}: здоровье=${mag.maxHealth}`
    if(monster.maxHealth===0 ||monster.maxHealth<0){
        alert(`${mag.name} победил!!`)

    }
    if(mag.maxHealth===0 ||mag.maxHealth<0){
        alert(`${monster.name} победил`)
    }
}
