//proyecto tarea uno
const prueba = ()=> {
    linda = document.querySelector('.imagen-bella')
    if(linda.style.border === '2px solid red'){
        linda.style.border = 'none'
    }
    else{
        linda.style.border = '2px solid red'
    }
}

//proyecto tarea dos
const mostrar = () => {
    const sumaUno = parseFloat(document.querySelector('.ingreso-uno').value) || 0;
    const sumaDos = parseFloat(document.querySelector('.ingreso-dos').value) || 0;
    const sumaTres = parseFloat(document.querySelector('.ingreso-tres').value) || 0;

    const suma = sumaUno + sumaDos + sumaTres;
    
    if(suma >= 11){
        document.getElementById('resultado').textContent = 'Error! has seleccionado mas de los debidos, has seleccionado:  ' + suma ;
    }
    else if(suma <= 10 && suma >= 1){
        document.getElementById('resultado').textContent = 'Stickers seleccionados: ' + suma;
    }
    else{
        document.getElementById('resultado').textContent = 'Error! el resultado no es valido'
    }
}

//proyecto tarea 3

const mostrarValor = () =>{
    const valorUno = parseFloat(document.getElementById('nadaUno').value);
    const valorDos = parseFloat(document.getElementById('nadaDos').value);
    const valorTres = parseFloat(document.getElementById('nadaTres').value);
    const datos = document.querySelector('.mostrarDatos');

    if(valorUno == 9 && valorDos == 1 && valorTres == 1){
        datos.innerHTML = 'contraseña uno correcta'
    }
    else if(valorUno == 7 && valorDos == 1 && valorTres == 4){
        datos.innerHTML = 'contraseña dos correcta'
    }
    else{
        datos.innerHTML = 'contraseña invalida'
    }

    //datos.innerHTML = valorUno + valorDos + valorTres;


}
