# Série Journal


## Descrição do Projeto

Olá, como vai? 

Este projeto foi desenvolvido para a FASE 1 da matéria de Desenvolvimento de Sistemas frontend, na PUCRS do curso de ADS.

O **Série Journal** é uma aplicação web desenvolvida em **React** com o objetivo de permitir que usuários registrem e gerenciem séries que assistiram ou desejam acompanhar. A aplicação possibilita cadastrar, visualizar, editar e excluir séries, funcionando como um pequeno diário de acompanhamento de séries, conforme o solicitado previamente.

O projeto tem como foco principal a prática de conceitos fundamentais do **React**, como componentização, gerenciamento de estado, manipulação de formulários e navegação entre páginas.

---

# Técnologias Utilizadas

* **React** 
* **Vite** (ferramenta de build e execução do projeto)
* **React Router DOM** (para navegação entre páginas)
* **CSS** (para estilização)

---

# Como Executar o Projeto

Para executar o projeto, siga os passos abaixo: 

### 1. Baixar o repositório


Baixe o projeto no link [Série Journal]https://github.com/yBrunoFurtado/serie-journal/
ou
Baixe o projeto compactado.

---

### 2. Acessar a pasta do projeto

No terminal, navegue até a pasta do projeto:

```
cd serie-journal
```

---

### 3. Instalar as dependências

Execute o comando:

```
npm install
```

Esse comando serve para  instalar todas as bibliotecas necessárias listadas no arquivo **package.json**.

---

### 4. Executar o projeto

Para iniciar o servidor de desenvolvimento:

```
npm run dev
```

Após executar o comando, o terminal exibirá um endereço semelhante a:

```
http://localhost:5173
```

Abra esse endereço em um navegador para acessar o projeto.

---

# Estrutura do Projeto

O projeto está organizado seguindo uma estrutura de pastas que separa os **componentes reutilizáveis** e **páginas da aplicação**.

```
src
 ├─ components
 │   ├─ NavBar
 │   ├─ SerieForm
 │   └─ SerieList
 │
 ├─ pages
 │   ├─ Home
 │   ├─ Sobre
 │   ├─ Cadastro
 │   └─ Listagem
 │
 ├─ App.jsx
 ├─ main.jsx
 └─ App.css
```

---

# Sobre os Componentes

## NavBar

O componente **NavBar** é responsável pela barra de navegação da aplicação. 

Ele contém os links para as principais páginas do sistema, como:

* Página inicial
* Página sobre
* Cadastro de séries
* Lista de séries

---

## SerieForm

O **SerieForm** é responsável pelo formulário de cadastro e edição de séries.

Ele é composto pelos seguintes campos:

* Título
* Número de temporadas
* Data de lançamento
* Diretor
* Produtora
* Categoria
* Data em que o usuário assistiu

Esse componente também possui:

* Controle de estado do formulário
* Validação básica (ex: título obrigatório)
* Limpeza do formulário após o envio
* Reutilização do formulário para **cadastro e edição de séries**

---

## SerieList

O componente **SerieList** é responsável por exibir todas as séries cadastradas.

Ele recebe uma lista de séries via **props** e apresenta cada série com suas informações.

Além disso, permite:

* Editar uma série existente
* Excluir uma série da lista

Cada série é apresentada de forma organizada em linha horizontal, com botões de ação.

---

# Descrição das Páginas

## Home

A home/página inicial serve para recepcionar o usuário e apresentar brevemente o objetivo do projeto.

---

## Sobre

A página sobre contém uma descrição do sistema e seu propósito.

---

## Cadastro

A página de cadastro utiliza o componente **SerieForm** para permitir a inserção de novas séries ou edição de séries já cadastradas.

---

## Listagem

A página de listagem utiliza o componente **SerieList** para exibir todas as séries registradas e permitir ações de edição e exclusão.

---

# Funcionalidades Implementadas 

O projeto é contemplado com operações básicas de manipulação de dados, simulando um CRUD:

* **Create** → Cadastro de novas séries
* **Read** → Listagem das séries cadastradas
* **Update** → Edição de séries existentes
* **Delete** → Exclusão de séries

---


### Uso de Componentização

A aplicação foi dividida em componentes menores (NavBar, SerieForm e SerieList) para tornar o código mais modular, reutilizável e de fácil manutenção.

---

### Uso de React Router

Foi utilizada a biblioteca **React Router DOM** para implementar a navegação entre páginas sem recarregar a aplicação, melhorando a experiência do usuário e no desenvolvimento.

---

### Gerenciamento de Estado

O estado principal da aplicação (lista de séries e série em edição) foi centralizado no componente **App.jsx**.

Essa decisão permite que diferentes componentes compartilhem os mesmos dados por meio de **props**, mantendo a consistência das informações.

---

### Estrutura de Pastas

A separação entre **components** e **pages** foi adotada para organizar melhor o projeto e facilitar a compreensão da estrutura da aplicação.

---

### Estilização com CSS

Foi utilizada estilização simples com **CSS** para centralizar os elementos da página, organizar a listagem de séries e melhorar a aparência geral da interface.

---

# Considerações Finais

Por fim, esse projeto permitiu aplicar conceitos importantes vistos em aula do sobre React, como:

* Componentização
* Manipulação de estado
* Comunicação entre componentes
* Manipulação de formulários
* Navegação entre páginas

Agradeço pela atenção e aguardo feedback.

**Bruno Furtado.**

---
