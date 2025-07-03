let formEl = document.getElementById('meuForm');

// FUNÇÃO DE CAPTURAR EVENTOS   
capturar_eventos(formEl, 'submit', formValid);  // Passar referência da função, sem ()


// FUNÇÃO PARA CAPTURAR EVENTOS
function capturar_eventos(elemento, evento, funcao) {
    if (elemento.addEventListener) {
        elemento.addEventListener(evento, funcao, true);
    } else if (elemento.attachEvent) {
        elemento.attachEvent('on' + evento, funcao);
    }
}

// FUNÇÃO PARA CANCELAR EVENTOS
function cancelar_eventos(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        evento.returnValue = false;  // corrigido
    }
}

// FUNÇÃO QUE VERIFICA OS RADIO INPUTS E CHECKBOX
function verificar_campos(campo) {
    var checados = false;

    for(var i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            checados = true;
            break;
        }
    }

    if (!checados) {
        alert('Por favor, selecione uma opção.');
        return false;
    }
    return true; // Importante retornar true se válido
}


function formValid(evento) {
    var campoNome = formEl.elements['textName'];
    var campoCidade = formEl.elements['selectCid'];
    var campoSexo = formEl.elements['sexo'];
    var campoRedeSocial = formEl.elements['redeSocial'];

    if (campoNome.value.trim() == '') {
        alert('Por favor, preencha o campo nome.');
        campoNome.focus();
        cancelar_eventos(evento);
        return false;
    }

    // Validação do select Cidade
    if (campoCidade.value == '') {
        alert('Por favor, selecione uma cidade.');
        campoCidade.focus();
        cancelar_eventos(evento);
        return false;
    }

    // Verifica Radio Buttons sexo
    if (!verificar_campos(campoSexo)) {
        cancelar_eventos(evento);
        return false;
    }

    // Verifica Radio Buttons redeSocial
    if (!verificar_campos(campoRedeSocial)) {
        cancelar_eventos(evento);
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}
