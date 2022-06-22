let ou=[];
let i=0;
let j;
function lowerfun() {
    let a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    length=10;
    for(i,j=0;j<10;++j,++i)
    {
        ou[i]=a[Math.floor(Math.random() * a.length)];
    }
}

function upperfun() {
    let a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(j=0;j<10;++j,++i)
    {
        ou[i]=a[Math.floor(Math.random() * a.length)];
    }
}

function digitfun() {
    let a=[1,2,3,4,5,6,7,8,9,0];
    for(j=0;j<10;++j,++i)
    {
        ou[i]=a[Math.floor(Math.random() * a.length)];
    }
}

function specialfun() {
    let a=["@","%","#","&","$","+","/","_","-","*","!"];
    for(j=0;j<10;++j,++i)
    {
        ou[i]=a[Math.floor(Math.random() * a.length)];
    }
}

function disp()
{
    for(i=0;i<10;++i)
    {

        document.getElementById("output").value+=ou[Math.floor(Math.random() * ou.length)];
        //document.getElementById("output").value="";
    }
}
function resetfun()
{

document. location. reload(); 
}