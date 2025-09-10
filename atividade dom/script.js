let contador = 0;


const exibicaoContador = document.getElementById('exibicaoContador');
const botaoIncrementar = document.getElementById('botaoIncrementar');
const botaoDecrementar = document.getElementById('botaoDecrementar');
const campoTexto = document.getElementById('campoTexto');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const botaoAdicionarLista = document.getElementById('botaoAdicionarLista');
const tipoLista = document.getElementById('tipoLista');
const areaSaida = document.getElementById('areaSaida');
const botaoResetar = document.getElementById('botaoResetar');


function atualizarContador() {
    exibicaoContador.textContent = contador;
}


botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});


botaoDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    } else {
        alert('O contador já está em zero!');
    }
    atualizarContador();
});


campoTexto.addEventListener('input', () => {
    const textoSemEspacos = campoTexto.value.replace(/\s/g, '');
    contadorCaracteres.textContent = textoSemEspacos.length;
});


campoTexto.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' && campoTexto.value.trim() !== '') {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = campoTexto.value.trim();
        areaSaida.appendChild(paragrafo);
        campoTexto.value = '';
        contadorCaracteres.textContent = '0';
    }
});


botaoAdicionarLista.addEventListener('click', () => {
    const tipo = tipoLista.value;
    const lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement('li');
        item.textContent = `Item ${i}`;
        lista.appendChild(item);
    }

    areaSaida.appendChild(lista);
});


botaoResetar.addEventListener('click', () => {
    contador = 0;
    atualizarContador();
    campoTexto.value = '';
    contadorCaracteres.textContent = '0';
    areaSaida.innerHTML = '';
});
