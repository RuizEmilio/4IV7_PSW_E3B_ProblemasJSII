function numeroMayor (){
    var lista =[];
    var a = parseFloat(document.getElementById('p2numero1').value);
    var b = parseFloat(document.getElementById('p2numero2').value);
    var c = parseFloat(document.getElementById('p2numero3').value);
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert('Ingrese solo numeros reales');
    }
    else{
        lista.push(a);
        lista.push(b);
        lista.push(c);
        lista.sort(function(a , b) {return b-a});
        document.querySelector('#tdSalida2').textContent = 'El numero mayor es : ' + lista[0];
    }
}

function borrarF2 (){
    document.getElementById('p2numero2').value = '';
    document.getElementById('p2numero1').value = '';
    document.getElementById('p2numero3').value = '';
    document.querySelector('#tdSalida2').textContent = '';
}