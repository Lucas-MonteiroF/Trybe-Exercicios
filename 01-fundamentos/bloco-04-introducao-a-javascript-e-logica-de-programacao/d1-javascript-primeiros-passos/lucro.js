const valorCusto = 124;
const imposto = 0.20;
const valorVenda = 150;
const quantidadeProdutos = 1000;


let custoComImposto = valorCusto + valorCusto * imposto;
let valorVendaTotal = valorVenda * quantidadeProdutos;
let valorCustoTotal = custoComImposto * quantidadeProdutos;

if (valorVendaTotal - valorCustoTotal > 0) {

    console.log('O lucro total foi de: R$' + (valorVendaTotal - valorCustoTotal));
} else {

    console.log('Oprejuízo foi de: R$' + (valorVenda - valorCustoTotal));
}