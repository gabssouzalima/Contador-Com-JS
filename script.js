const buttonMais = document.getElementById("btn-mais");
const buttonMenos = document.getElementById("btn-menos");
const somarMaisDez = document.getElementById("somar-10");
const limparCampos = document.getElementById("limpar-campos");
const mostrarTexto = document.getElementById("mostrar-texto");

let valor = 0;

function atualizarTela() {
    mostrarTexto.textContent = valor;
    buttonMenos.disabled = valor === 0;
}

buttonMais.addEventListener("click", () => {
    valor++;
    atualizarTela();
});

somarMaisDez.addEventListener("click", () => {
    valor += 10;
    atualizarTela();
});

buttonMenos.addEventListener("click", () => {
    if (valor > 0) {
        valor--;
        atualizarTela();
    }
});

limparCampos.addEventListener("click", () => {
    valor = 0;
    atualizarTela();
});

atualizarTela();