document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})
/* Estilo para o modo de alto contraste */
.alto-contraste {
    background-color: #000 !important;
    color: #FFF !important;
}

.alto-contraste a,
.alto-contraste h1,
.alto-contraste h2,
.alto-contraste h3,
.alto-contraste p,
.alto-contraste label {
    color: #FFF !important;
}

/* Mantém os botões visíveis */
.alto-contraste .btn {
    background-color: #FFF !important;
    color: #000 !important;
}
