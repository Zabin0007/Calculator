function displayNum(num){
    document.getElementById("result").value+=num;
}

function operation(){
    result.value=eval(result.value);
}

function clearResult(){
    result.value="";
}

function backSpace(){
    result.value=result.value.slice(0,-1);
}