function nowaGra()
{
    window.location.reload();
}
let bool = false;
function wyswietlHaslo()
{   
    if(bool == false)
    {
        document.querySelector(".lewo").innerHTML += wylosowany;
        bool = true;
    }
}