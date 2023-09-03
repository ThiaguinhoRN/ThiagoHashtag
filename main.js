import { renderizarCatalogo } from "./src/CartaoProduto";
import { inicializarFiltros } from "./src/FiltrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/MenuCarrinho";

renderizarCatalogo ();    
inicializarCarrinho ();
renderizarProdutosCarrinho ();
atualizarPrecoCarrinho ();
inicializarFiltros ();



