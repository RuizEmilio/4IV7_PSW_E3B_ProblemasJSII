function comparar (){
    var n = parseFloat(document.getElementById('p1numero1').value);
    var m = parseFloat(document.getElementById('p1numero2').value);
    if(isNaN(n) || isNaN(m)){
        alert('Solo numeros reales')
    }
    else{
        if(n > m){
            document.querySelector('#tdSalida1').textContent = 'El primero es mayor que el segundo, por tanto se restan : ' + (n - m);
        }
        else if(m > n){
            document.querySelector('#tdSalida1').textContent = 'El segundo es mayor que el primero, por tanto se suman : ' + (n + m);
        }
        else{
            document.querySelector('#tdSalida1').textContent = 'Los dos numeros son iguales, por tanto se multiplican : ' + (n * m);
        }
    }
}

function borrarF1 (){
    document.getElementById('p1numero1').value = '';
    document.getElementById('p1numero2').value = '';
    document.querySelector('#tdSalida1').textContent = '';
}