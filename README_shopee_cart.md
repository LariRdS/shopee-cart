# 🛒 Shopee Cart

Simulador de **carrinho de compras e wishlist** em **Node.js**, para praticar lógica de programação, manipulação de arrays, uso de módulos ES, promises e estruturação de um projeto CLI de forma organizada.



##  Sobre o projeto

O **Shopee Cart** permite simular a adição de produtos ao carrinho, calcular subtotais, aplicar quantidade, gerar wishlists e calcular o total da compra, reforçando conceitos de programação assíncrona e modularização em JavaScript.



##  Funcionalidades

✅ Adicionar produtos ao carrinho com as propriedades `name`, `price`, `quantity`, `subtotal`.  
✅ Calcular total de forma dinâmica.  
✅ Utilização de `uuid` para gerar IDs únicos para os produtos.  
✅ Organização modular (`products.js`, `cart.js`, etc.).  
✅ Execução no terminal via Node.js.


##  Estrutura do projeto

```
shopee-cart/
│
├── src/
│   ├── services/
│   │    ├── products.js
│   │    ├── cart.js
│   └── index.js
│
├── package.json
└── README.md
```


##  Tecnologias utilizadas

- **Node.js (ES Modules)**
- JavaScript moderno (ES6+)
- [uuid](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions)


##  Como rodar o projeto localmente

1️⃣ **Clone o repositório:**

```bash
git clone https://github.com/LariRdS/shopee-cart.git
```

2️⃣ **Acesse a pasta do projeto:**

```bash
cd shopee-cart
```

3️⃣ **Instale as dependências:**

```bash
npm install
```

4️⃣ **Execute o projeto:**

```bash
npm start
```

A simulação será executada no terminal exibindo os produtos adicionados ao carrinho e o total final.


##  Objetivos de aprendizado

✅ Prática de modularização em Node.js.  
✅ Uso de `uuid` para IDs únicos em objetos.  
✅ Organização de projetos CLI de forma limpa.  
✅ Lógica de controle de carrinho e cálculos de subtotal/total.


##  Melhorias possíveis

- Implementação de interface CLI interativa usando `inquirer`.
- Criação de uma API REST utilizando o mesmo core.
- Testes automatizados com Jest.
- Integração com banco de dados (JSON ou MongoDB) para persistência de dados.
- Interface web em React/Next.js para consumir os dados.


## ✉️ Contato

**Larissa Rocha de Sant’Anna**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LarissaSantAnna-blue)](https://www.linkedin.com/in/larirsantanna/)  
[![GitHub](https://img.shields.io/badge/GitHub-LariRdS-black)](https://github.com/LariRdS)
