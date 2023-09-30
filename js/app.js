const tipoPista = (tipo) => tipo == 'pista';


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


function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let quantidade = parseInt(document.getElementById('qtd').value);


  if(tipoPista(tipo.value)) {
    comprarPista(quantidade);
  }gs

}