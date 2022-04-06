function calcularSalario (){
    var salarioTotal = 0;
    var horas = parseInt(document.getElementById('horasTrabajadas').value);
    var salarioHora = parseFloat(document.getElementById('salarioHora').value);
    if(horas <= 0 || salarioHora <= 0){
        alert('Ingrese solo numeros positivos');
    }
    else{
        if(isNaN(horas) || isNaN(salarioHora)){
            alert('Ingrese solo numeros')
        }
        else{
            if(horas <= 40){
                salarioTotal = horas * salarioHora;
                document.querySelector('#tdSalida3').textContent = 'El pago sera de : $' + salarioTotal;
            }
            else{
                if((horas - 40) <=8){
                    salarioTotal = (salarioHora * 2) * (horas - 40) + (40 * salarioHora);
                    document.querySelector('#tdSalida3').textContent = 'El pago sera de : $' + salarioTotal;
                }
                else{
                    salarioTotal = (salarioHora * 3) * (horas - 48) + (salarioHora * 16) + (40 * salarioHora);
                    document.querySelector('#tdSalida3').textContent = 'El pago sera de : $' + salarioTotal;
                }
            }
        }
    }
}

function borrarF3 (){
    document.getElementById('horasTrabajadas').value = '';
    document.getElementById('salarioHora').value = '';
    document.querySelector('#tdSalida3').textContent = '';
}