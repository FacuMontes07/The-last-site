window-addEventListener('load, iniciar, false');

function iniciar(){
    usuario = document.getElementById('usuario')
    email = document.getElementById('email')
    texto = document.getElementById('text')
    enviar.addEventListener('click', validacion)
}

function validacion(){
    if (usuario.value == '') {
        usuario.setCustomValidity('Esta casilla es obligatoria');
        usuario.style.background = "#FFDDDD";
        return false;
    }else{
        usuario.setCustomValidity('')
        usuario.style.background = "#fff";
    }

    if (email.value == '') {
        email.setCustomValidity('Esta casilla es obligatoria');
        email.style.background = "#FFDDDD";
        return false;
    }else{
        email.setCustomValidity('')
        email.style.background = "#fff";
    }

    if (text.value == '') {
        text.setCustomValidity('Esta casilla es obligatoria');
        text.style.background = "#FFDDDD";
        return false;
    }else{
        text.setCustomValidity('')
        text.style.background = "#fff";
    }
}


