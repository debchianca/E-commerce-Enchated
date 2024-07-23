// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
    alert(`Produto: ${nomeProduto}\nPreço: R$ ${preco.toFixed(2)} adicionado ao carrinho!`);
}

// Adiciona um evento de submit ao formulário de pesquisa
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário
            const query = this.querySelector('.search-input').value;
            if (query) {
                // Redireciona para a página de resultados com a query
                window.location.href = `search_results.html?query=${encodeURIComponent(query)}`;
            }
        });
    }
});

// Definindo o componente customizado
class Componente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.className = 'card-deck'; // Use card-deck para alinhar cards horizontalmente
        div.innerHTML = `
            <div class="card mb-3 mt-3" style="width: 17rem;">
                <img src="images/Palette Sombra Green Niina Secrets - 5,6G.jpg" class="card-img-top" alt="Produto 1">
                <div class="card-body">
                    <h5 class="card-title">Palette Sombra Green Niina Secrets - 5,6G</h5>
                    <p class="card-text">Descubra novas possibilidades usando a paleta Gree, de Niina Secrets by Eudora</p>
                    <a href="#" class="btn btn-primary" onclick="adicionarAoCarrinho('Produto 1', 109.90)">Adicionar ao Carrinho</a>
                </div>
            </div>
            <div class="card mb-3 mt-3" style="width: 17rem;">
                <img src="images/Palette Sombra Orange Niina Secrets - 5,6G.jpg" class="card-img-top" alt="Produto 2">
                <div class="card-body">
                    <h5 class="card-title">Palette Sombra Orange Niina Secrets - 5,6G</h5>
                    <p class="card-text">Descubra novas possibilidades usando a paleta Top Secrets, de Niina Secrets by Eudora.</p>
                    <a href="#" class="btn btn-primary" onclick="adicionarAoCarrinho('Produto 2', 109.90)">Adicionar ao Carrinho</a>
                </div>
            </div>
            <div class="card mb-3 mt-3" style="width: 17rem;">
                <img src="images/Palette Sombra Top Niina Secrets - 5,6G.jpg" class="card-img-top" alt="Produto 3">
                <div class="card-body">
                    <h5 class="card-title">Palette Sombra Top Niina Secrets - 5,6G</h5>
                    <p class="card-text">Descubra novas possibilidades usando a paleta Top Secrets, de Niina Secrets by Eudora</p>
                    <a href="#" class="btn btn-primary" onclick="adicionarAoCarrinho('Produto 3', 109.90)">Adicionar ao Carrinho</a>
                </div>
            </div>
            <div class="card mb-3 mt-3" style="width: 17rem;">
                <img src="images/Palette Sombra Purple Niina Secrets - 5,6G.jpg" class="card-img-top" alt="Produto 4">
                <div class="card-body">
                    <h5 class="card-title">Palette Sombra Purple Niina Secrets - 5,6G</h5>
                    <p class="card-text">Descubra novas possibilidades usando a paleta Purple, de Niina Secrets by Eudora</p>
                    <a href="#" class="btn btn-primary" onclick="adicionarAoCarrinho('Produto 4', 109.90)">Adicionar ao Carrinho</a>
                </div>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("componente-novo", Componente);
