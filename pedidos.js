import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/Utilidades";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido =`<p class="text-xl font-bold my-4">${new Date(pedidoComData.dataPedido)
        .toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    })}</p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-slate-300 p-3 rounded-md"></section>
    `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto, 
            `container-pedidos-${pedidoComData.dataPedido}`, 
            pedidoComData.pedido[idProduto]);
    }
}

function renderizarHistoricoDePedidos() {
    const historico = lerLocalStorage("historico");
    for(const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData);
    }
}

renderizarHistoricoDePedidos();