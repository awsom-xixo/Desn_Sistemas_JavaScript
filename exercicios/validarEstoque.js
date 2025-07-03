function validarCampos(){
    const nomeProduto = document.getElementById("nome-produto").value;
    const categoria = document.getElementById("categoria").value;
    const medida = document.getElementById("medida").value;
    const valorUnitario = parseFloat(document.getElementById("valor-unitario-produto").value);
    const quantidadeProduto = parseInt(document.getElementById("quantidade-produto").value);
    const quantidadeMinima = parseInt(document.getElementById("quantidade-minima").value);
    const validade = document.getElementById("validade").value;

    if (!nomeProduto) {
        alert("O campo 'Nome do Produto' é obrigatório.");
        return;
    }

    if (!categoria) {
        alert("O campo 'Categoria' é obrigatório.");
        return;
    }

    if (!medida) {
        alert("O campo 'Unidade de Medida' é obrigatório.");
        return;
    }

    if (!valorUnitario) {
        alert("O campo 'Valor Unitário' é obrigatório.");
        return;
    }

    if (!quantidadeProduto) {
        alert("O campo 'Quantidade do Produto' é obrigatório.");
        return;
    }

    if (!quantidadeMinima) {
        alert("O campo 'Quantidade Mínima' é obrigatório.");
        return;
    }

    if (!validade) {
        alert("O campo 'Validade' é obrigatório.");
        return;
    }

    alert("Todos os campos foram preenchidos corretamente!");
    
}