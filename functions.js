var valorA = "";
var valorB = "";
var valorOperacao = "";
var valorResultado = "";
var display = "";
var boolA = true;

function btnLimpar(){
    valorA = "";
    valorB = "";
    valorOperacao = "";
    valorResultado = "";
    document.getElementById("campo").value = ""; 
}


function btn1(){

    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "1" 
            document.getElementById("campo").value = valorA;
        }else{ 
            
            valorA = valorA + "1"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            boolA = false;
            valorB = "1"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB;  
    
        }else{
            valorB = valorB + "1";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "1"; 

        } 
    }  
}

function btn2(){
    
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "2"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "2"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "2"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "2";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "2"; 
        } 
    }  
}

function btn3(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "3"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "3"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "3"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "3";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "3"; 
        } 
    }  
}

function btn4(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "4"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "41"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "4"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "4";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "4"; 
        } 
    }  
}

function btn5(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "5"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "5"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "5"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "5";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "5"; 
        } 
    }  
}
function btn6(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "6"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "6"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "6"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "6";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "6"; 
        } 
    }  
}
function btn7(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "7"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "7"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "7"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "7";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "7"; 
        } 
    }  
}
function btn8(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "8"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "8"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "8"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "8";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "8"; 
        } 
    }  
}
function btn9(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "9"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "9"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "9"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "9";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "9"; 
        } 
    }  
}
function btn0(){
    if(valorOperacao == ""){

        if(valorA == ""){
            valorA = "0"
            document.getElementById("campo").value = valorA;
        }else{
            valorA = valorA + "0"; 
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = valorA;
        }
    }
    else{
        if(valorB == ""){
            valorB = "0"
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + valorB; 
        }else{
            valorB = valorB + "0";
            var el = document.getElementById("campo").value;
            document.getElementById("campo").value = el + "0"; 
        } 
    }  
}

function btnPonto(){
    if(boolA){
        valorA = valorA + ".";
        var el = document.getElementById("campo").value;
        document.getElementById("campo").value = el + "."; 
    }
    else{
        valorB = valorB + ".";
        var el = document.getElementById("campo").value;
        document.getElementById("campo").value = el + "."; 
    }
    
   
}

function btnMais(){
   valorOperacao= "+"
   var el = document.getElementById("campo").value;
   document.getElementById("campo").value = el + valorOperacao;
}

function btnMenos(){
    valorOperacao= "-"
    var el = document.getElementById("campo").value;
    document.getElementById("campo").value = el + valorOperacao;
}

function btnVezes(){
    valorOperacao= "x"
    var el = document.getElementById("campo").value;
    document.getElementById("campo").value = el + valorOperacao;
}

function btnDividir(){
    valorOperacao= "/"
    var el = document.getElementById("campo").value;
    document.getElementById("campo").value = el + valorOperacao;
}

function btnIgual(){
    if(valorOperacao == "+"){
        valorResultado = parseFloat(valorA) + parseFloat(valorB);
        
    }
    
    if(valorOperacao == "-"){
        valorResultado = parseInt(valorA) - parseInt(valorB);
    }

    if(valorOperacao == "x"){
        valorResultado = parseInt(valorA) * parseInt(valorB);
    }

    if(valorOperacao == "/"){
        valorResultado = parseInt(valorA) / parseInt(valorB);
    }
   
    document.getElementById("campo").value = valorResultado; 
   
}