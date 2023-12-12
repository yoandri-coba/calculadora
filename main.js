function numero(valor){
    document.getElementById('resultado').value +=valor;
}

function operacion(valor){
    var opera = document.getElementById('resultado').value;
    if(opera ==0){
        document.getElementById('resultado').value = "Sin operacion";
    }else{
     document.getElementById('resultado').value = eval(opera);   
    }
}

function resetear(){
    document.getElementById('resultado').value = " ";
}