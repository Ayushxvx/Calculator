function setdate(){
    let date = new Date();
    document.getElementById("datetime").innerHTML = date;
}
setInterval(setdate,1000);

function setvalue(value){
    document.getElementById("inputvalue").value += value;
}

function getanswer(){
    let value = document.getElementById("inputvalue").value;
    value = eval(value);
    document.getElementById("inputvalue").value = value;
}

function randomint(){
    let randint = Math.floor(Math.random() * 100);
    document.getElementById("inputvalue").value += randint;
}

function allclear(){
    document.getElementById("inputvalue").value = ""; 
}

function clearonevalue(){
    let value = document.getElementById("inputvalue").value;
    let newvalue = value.substr(0,value.length-1);
    document.getElementById("inputvalue").value = "";
    document.getElementById("inputvalue").value = newvalue;
}