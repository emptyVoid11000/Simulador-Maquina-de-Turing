var registroDeEstado;
var cinta;
var terminado=false;
var currentStep=0;
var pausa=false;

function capturar() {
    let valor = document.getElementById("cadena").value;
    cinta=valor+" ";
    console.log(cinta);
}

function crearCinta(){
    var left = 40;
    const cuadro = document.getElementById("cuadro-lista");
    cuadro.children[0].textContent=cinta[0];
    for (let index = 1; index < cinta.length; index++) {
        left+=120;
        const copia = cuadro.cloneNode(true);
        cinta[index]!=" "? copia.children[0].textContent=cinta[index]: copia.children[0].textContent="/0";
        copia.style.left = left.toString() + "px";
        cuadro.parentNode.appendChild(copia);
    }
}
function pasoInicial(){
    if(!cinta || terminado){
        capturar();
        crearCinta();
        terminado=false;
    }
}

function validar(){
    var caracter = cinta[currentStep];
    if(/^[A-Za-z0-9]$/.test(caracter) || (currentStep>7 && caracter==" ")){
        registroDeEstado="Valido";
        document.getElementById("output-text").style.backgroundColor="lightgreen";
        var text = document.getElementById("validez");
        text.textContent = registroDeEstado;
        text.className = "text-success";
        if((currentStep>7 && caracter==" ")){
            terminado=true;
        }
        return true;
    }
    else {
        registroDeEstado="Invalido";
        document.getElementById("output-text").style.backgroundColor="lightcoral";
        var text = document.getElementById("validez");
        text.textContent =registroDeEstado;
        text.className = "text-danger";
        if(!(/^[A-Za-z0-9]$/.test(caracter))){
            terminado=true;
            return false;
        } return false;
        
        
    }
}

function escribir(){
   var output = document.getElementById("output-text");
   output.textContent = output.textContent + cinta[currentStep];
}

function currentState(){
    var state =document.getElementById("state");
    if(currentStep>7){state.textContent = "q8"; return;}
    else {state.textContent = "q"+(currentStep)};
}

function moverCabezal(){
    var cabezal = document.getElementById("cabezal");
    var flechaArriba = document.getElementById("flecha-arriba");
    let leftStr1 = window.getComputedStyle(cabezal).left;
    let leftStr2 = window.getComputedStyle(flechaArriba).left;

    let left1 = parseInt(leftStr1);
    let left2= parseInt(leftStr2);
    cabezal.style.left=left1+120 + "px";
    flechaArriba.style.left=left2+120 + "px";
}

function validarCaracterEnLaMaquina(){
        validar();
        currentState();
        document.getElementById("step").textContent="Step "+(currentStep+1);
        if(!terminado){
            
            moverCabezal();
            escribir();
        }     
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(){
    pausa=false;
    currentStep==0 && pasoInicial();
    for (let index = currentStep; index < cinta.length; index++) {
        if(!pausa && !terminado){
            await esperar(2000);    
            validarCaracterEnLaMaquina();
            currentStep++;
        } else {return;}
    }
}

function step(){
    pausa=false;
    currentStep==0 && pasoInicial();
    if(!terminado){
        validarCaracterEnLaMaquina();
        currentStep++;
    }
}

function stop(){
    pausa=true;
}

function reiniciar(){
    cinta="";
    currentStep=0;

    document.getElementById("cadena").value = "";

    document.getElementById("step").textContent="Step 0";

    var output = document.getElementById("output-text");

   output.textContent = "";

   document.getElementById("state").textContent="";

    document.getElementById("output").style.backgroundColor="white";
    document.getElementById("validez").textContent = "";

    const cuadros = document.querySelectorAll("#cuadro-lista");
     cuadros.forEach((c, i)=>{
        if(i>0) c.remove();
        else c.children[0].textContent=" ";
     })
    const cuadro = document.getElementById("cuadro-lista");
    cuadro.children[0].textContent="/0";
    const cabezal = document.getElementById("cabezal");
    cabezal.style.left="40px";
    const flecha = document.getElementById("flecha-arriba");
    flecha.style.left="80px";
}






