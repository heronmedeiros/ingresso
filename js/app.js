const tipoPista    = (tipo) => tipo == 'pista';
const tipoInferior = (tipo) => tipo == 'inferior';
const tipoSuperior = (tipo) => tipo == 'superior';


const comprarPista = (quantidade) => {
  let qtdPistaElement = document.getElementById('qtd-pista');
  let qtdPista = parseInt(qtdPistaElement.textContent);

  if(quantidade > qtdPista ) {
    alert('Quantidade indisponível para tipo pista');
  } else {
    qtdPista = qtdPista - quantidade;
    qtdPistaElement.textContent = qtdPista;
    alert('Compra realizada com sucesso');
  }
}

const compraInferior = (quantidade) => {
  let qtdInferiorElement = document.getElementById('qtd-inferior');
  let qtdInferior = parseInt(qtdInferiorElement.textContent);

  if(quantidade > qtdInferior ) {
    alert('Quantidade indisponível para tipo Inferior');
  } else {
    qtdInferior = qtdInferior - quantidade;
    qtdInferiorElement.textContent = qtdInferior;
    alert('Compra realizada com sucesso');
  }
}

const compraSuperior = (quantidade) => {
  let qtdSuperiorElement = document.getElementById('qtd-superior');
  let qtdSuperior = parseInt(qtdSuperiorElement.textContent);

  if(quantidade > qtdSuperior ) {
    alert('Quantidade indisponível para tipo Superior');
  } else {
    qtdSuperior = qtdSuperior - quantidade;
    qtdSuperiorElement.textContent = qtdSuperior;
    alert('Compra realizada com sucesso');
  }
}
function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let quantidade = parseInt(document.getElementById('qtd').value);


  if(tipoPista(tipo.value)) {
    comprarPista(quantidade);
  } else if(tipoInferior(tipo.value)) {
    compraInferior(quantidade);
  } else if (tipoSuperior(tipo.value)) {
    compraSuperior(quantidade);
  } else {
    alert('tipo inválido');
  }
}