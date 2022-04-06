function calcularUtilidad (){
    var salario = parseFloat(document.getElementById('salarioMensual').value);
    var antiguedad = parseFloat(document.getElementById('antiguedad').value);
    if(salario <= 0 || antiguedad < 0){
        alert('Ingrese solo numeros positivos');
    }
    else{
        if(isNaN(salario) || isNaN(antiguedad)){
            alert('Ingrese solo numeros');
        }
        else{
            if(antiguedad > 100 || salario > 1000000){
                alert('Antiguedad maxima 100 Salario maximo 1000000$');
            }
            else{
                if(antiguedad < 1){
                    document.querySelector('#tdSalida4').textContent = 'La utilidad es de : $' + salario * .05;
                }
                else if(antiguedad >= 1 && antiguedad < 2){
                    document.querySelector('#tdSalida4').textContent = 'La utilidad es de : $' + salario * .07;
                }
                else if(antiguedad >= 2 && antiguedad < 5){
                    document.querySelector('#tdSalida4').textContent = 'La utilidad es de : $' + salario * .1;
                }
                else if(antiguedad >= 5 && antiguedad < 10){
                    document.querySelector('#tdSalida4').textContent = 'La utilidad es de : $' + salario * .15;
                }
                else{
                    document.querySelector('#tdSalida4').textContent = 'La utilidad es de : $' + salario * .2;
                }
            }
        }
    }
}

function borrarF4 (){
    document.getElementById('salarioMensual').value = '';
    document.getElementById('antiguedad').value = '';
    document.querySelector('#tdSalida4').textContent = '';
}