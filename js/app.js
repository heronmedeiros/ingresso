const tipoPista    = (tipo) => tipo == 'pista';
const tipoInferior = (tipo) => tipo == 'inferior';
const tipoSuperior = (tipo) => tipo == 'superior';

const parseQtd = elementQtd => parseInt(elementQtd);

const compraQntInferior = tipo => alert(`Quantidade indisponível para tipo ${tipo}`);
const compraQntSuperior = (quantidade, elementQtd) => {
  let qtd = parseInt(elementQtd.textContent);

  qtd = qtd - quantidade;
  elementQtd.textContent = qtd;
  alert('Compra realizada com sucesso');
}

const compra = (quantidade, tipo, id) => {
  let elementQtd = document.getElementById(id);

  if(quantidade > parseQtd(elementQtd.textContent) ) {
    compraQntInferior(tipo);
  } else {
    compraQntSuperior(quantidade, elementQtd);
  }
}

const comprarPista = (quantidade) => {
  const id = 'qtd-pista';
  const tipo = 'pista';
  compra(quantidade, tipo, id);
}

const compraInferior = (quantidade) => {
  const id = 'qtd-inferior';
  const tipo = 'inferior';
  compra(quantidade, tipo, id);
}

const compraSuperior = (quantidade) => {
  const id = 'qtd-superior';
  const tipo = 'superior';
  compra(quantidade, tipo, id);
}

function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let quantidade = parseInt(document.getElementById('qtd').value);

  if (tipoPista(tipo.value)) {
    comprarPista(quantidade);
  } else if(tipoInferior(tipo.value)) {
    compraInferior(quantidade);
  } else if (tipoSuperior(tipo.value)) {
    compraSuperior(quantidade);
  } else {
    alert('tipo inválido');
  }
}