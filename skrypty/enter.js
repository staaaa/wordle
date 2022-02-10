let row = 1;
let win = false;
let przegrana = false;
let tabWin = [2,2,2,2,2];
//RZAD PIERWSZY
let _1l1 = document.querySelector("[name = '1L1']");
let _1l2 = document.querySelector("[name = '1L2']");
let _1l3 = document.querySelector("[name = '1L3']");
let _1l4 = document.querySelector("[name = '1L4']");
let _1l5 = document.querySelector("[name = '1L5']");
let rowOne = [_1l1,_1l2,_1l3,_1l4,_1l5];
//RZAD DRUGI
let _2l1 = document.querySelector("[name = '2L1']");
let _2l2 = document.querySelector("[name = '2L2']");
let _2l3 = document.querySelector("[name = '2L3']");
let _2l4 = document.querySelector("[name = '2L4']");
let _2l5 = document.querySelector("[name = '2L5']");
let rowTwo = [_2l1,_2l2,_2l3,_2l4,_2l5];
//RZAD TRZECI
let _3l1 = document.querySelector("[name = '3L1']");
let _3l2 = document.querySelector("[name = '3L2']");
let _3l3 = document.querySelector("[name = '3L3']");
let _3l4 = document.querySelector("[name = '3L4']");
let _3l5 = document.querySelector("[name = '3L5']");
let rowThree = [_3l1,_3l2,_3l3,_3l4,_3l5];
//RZAD CZWARTY
let _4l1 = document.querySelector("[name = '4L1']");
let _4l2 = document.querySelector("[name = '4L2']");
let _4l3 = document.querySelector("[name = '4L3']");
let _4l4 = document.querySelector("[name = '4L4']");
let _4l5 = document.querySelector("[name = '4L5']");
let rowFour = [_4l1,_4l2,_4l3,_4l4,_4l5];
//RZAD PIATY
let _5l1 = document.querySelector("[name = '5L1']");
let _5l2 = document.querySelector("[name = '5L2']");
let _5l3 = document.querySelector("[name = '5L3']");
let _5l4 = document.querySelector("[name = '5L4']");
let _5l5 = document.querySelector("[name = '5L5']");
let rowFive = [_5l1,_5l2,_5l3,_5l4,_5l5];
//RZAD SZOSTY
let _6l1 = document.querySelector("[name = '6L1']");
let _6l2 = document.querySelector("[name = '6L2']");
let _6l3 = document.querySelector("[name = '6L3']");
let _6l4 = document.querySelector("[name = '6L4']");
let _6l5 = document.querySelector("[name = '6L5']");
let rowSix = [_6l1,_6l2,_6l3,_6l4,_6l5];

function rzad(numerator)
{
    let r;
    switch(numerator)
    {
        case 1:
            r = _1l1.value + _1l2.value + _1l3.value + _1l4.value + _1l5.value;
            break;
        case 2:
            r = _2l1.value + _2l2.value + _2l3.value + _2l4.value + _2l5.value;
            break;
        case 3:
            r = _3l1.value + _3l2.value + _3l3.value + _3l4.value + _3l5.value;
            break;
        case 4:
            r = _4l1.value + _4l2.value + _4l3.value + _4l4.value + _4l5.value;
            break;
        case 5:
            r = _5l1.value + _5l2.value + _5l3.value + _5l4.value + _5l5.value;
            break;
        case 6:
            r = _6l1.value + _6l2.value + _6l3.value + _6l4.value + _6l5.value;
            break;
    }
    return r;
}

function sprawdz(wyraz)
{
    let litery = [wyraz[0], wyraz[1], wyraz[2], wyraz[3],wyraz[4]];

    let tablica = [];
    let byly = [];

    //dziala
    for(let i = 0; i < 5; i++)
    {
        if(litery[i] == wylosowany[i])
        {
            tablica[i] = 2;
            byly.push(litery[i]);
        }
    }
    //dziala
    for(let i = 0; i < 5; i++)
    {
        if(wylosowany.includes(litery[i]) && tablica[i] != 2)
        {
            if(byly.includes(litery[i]))
            {
                tablica[i] = 0;
            }
            else
            {
                tablica[i] = 1;
                byly.push(litery[i]);
            }
        }
    }
    //dziala
    for(let i = 0; i < 5; i++)
    {
        if(tablica[i] != 2 && tablica[i] != 1)
        {
            tablica[i] = 0;
        }
    }
    return tablica;
}
function maluj(numerator,tablica)
{
    let j = false;
    for(let i = 0; i < 5; i ++)
    {
        if(tablica[i] == 2)
        {
            playOneCorrect();
            j = true;
            break;
        }
    }
    if(j == false)
    {
        playNoCorrect();
    }
    switch(numerator)
    {
        case 1: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowOne[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowOne[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowOne[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowOne[i].disabled = true;
            }
            break;
        case 2: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowTwo[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowTwo[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowTwo[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowTwo[i].disabled = true;
            }
            break;
        case 3: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowThree[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowThree[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowThree[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowThree[i].disabled = true;
            }
            break;
        case 4: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowFour[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowFour[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowFour[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowFour[i].disabled = true;
            }
            break;
        case 5: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowFive[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowFive[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowFive[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowFive[i].disabled = true;
            }
            break;
        case 6: 
            for(let i = 0; i < 5; i++)
            {
                if(tablica[i] == 1)
                {
                    $(rowSix[i]).animate({
                        backgroundColor : "#bab822",
                    },500);
                }
                else if(tablica[i] == 2)
                {
                    $(rowSix[i]).animate({
                        backgroundColor : "#21a31f",
                    },500);
                }
                else{
                    $(rowSix[i]).animate({
                        backgroundColor : "#a13030",
                    },500);
                }
                rowSix[i].disabled = true;
            }
            break;
    }
}
function wygrana()
{
    for(let i = 0; i < 5; i++)
    {
        rowOne[i].disabled = true;
        rowTwo[i].disabled = true;
        rowThree[i].disabled = true;
        rowFour[i].disabled = true;
        rowFive[i].disabled = true;
        rowSix[i].disabled = true;
    }
    maluj(row,tabWin);
    playWin();
    alert("ODGADŁEŚ WYRAZ!");
    win = true;
}
document.body.addEventListener("keypress",function(e){
    if(e.keyCode == 13 && przegrana == false && win == false)
    {
        let wyraz = rzad(row).toUpperCase();
        let pierwsza = wyraz[0];

        if(szukaj(pierwsza,wyraz) == true && row != 6)
        {
            if(wyraz == wylosowany)
            {
                wygrana();
            }
            else
            {
                // alert(sprawdz(wyraz));
                maluj(row,sprawdz(wyraz));
            }
            row++;
        }
        else if(win == false && row != 6) alert("Taki wyraz nie istnieje w bazie.");
        else if(win == false && row == 6)
        {
            maluj(row,sprawdz(wyraz));
            playLose();
            alert("PRZEGRAŁEŚ!");

            przegrana = true;
        }
    }   
})