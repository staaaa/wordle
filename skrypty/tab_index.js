let allInputs = [];
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowOne[i]);
}
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowTwo[i]);
}
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowThree[i]);
}
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowFour[i]);
}
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowFive[i]);
}
for(let i = 0; i < 5; i++)
{
    allInputs.push(rowSix[i]);
}


function changeTabIndex(e)
{
    if(e.keyCode >= 65 && e.keyCode <= 90)
    {
        let a = allInputs.indexOf(this);
        if(a < 29)
        {
            allInputs[a+1].focus();
        }
    }
}
for(let i = 0; i < 5; i++)
{
    rowOne[i].addEventListener("keyup",changeTabIndex);
    rowTwo[i].addEventListener("keyup",changeTabIndex);
    rowThree[i].addEventListener("keyup",changeTabIndex);
    rowFour[i].addEventListener("keyup",changeTabIndex);
    rowFive[i].addEventListener("keyup",changeTabIndex);
    rowSix[i].addEventListener("keyup",changeTabIndex);
}