# Projeto demo de Estoque #Teste DTI	
	
Esse projeto foi criado visando a aplicação para uma vaga de fullstack na DTI.

Foi feito num modelo monorepo para facilitar a execução do mesmo.

Para executar o projeto, abra a solution no VS19 e clique no ícone verde de play para rodar o build.

Ao finalizar o processo de build, uma nova janela do navegador irá se abrir.

Teste a demo:

- A primeira página serve para ver os produtos listados, alterar ou remover determinado produto.
- menu superior de navegação, se encontra a aba referente ao cadastro de um novo produto.
- Ao cadastrar um produto, o site irá direcioná-lo para a pagina inicial, atualizando somente a lista de produtos.
- Caso informe dados incorretos no momento do cadastro, um número de mensagens equivalente à quantidade de erros aparecerá sobre o formulário de cadastro.

## Bibliotecas utilizadas: Front

- **axios**: Configurar e realizar requisições HTTP;
- **formik**: Abstração e criação de formulários;
- **yup**: Validação de formulários (utilizado com Formik);
- **prettier**: Padronizador de indentação do código fonte;
- **redux**: Gerenciador de estado global da aplicação;
- **redux-devtools-extension**: Ferramenta para monitoramento do Redux (usado através de uma extenção adicionada no navegador)
- **redux-saga**: Middleware do Redux, utilizado para interceptar, cancelar e encadear requisições de forma simples de entender.
- **typesafe-actions**: Biblioteca para auxiliar a configuração tipada do Redux;


## Arquitetura de pastas: Frontend

 ```bash
estoqueACPO/frontend
┌── src/ # Código fonte
│   ├── components/ # Todos os componentes reutilizáveis.
│   ├── genericInterfaces/ # Todas as interfaces reutilizáveis.
│   ├── pages/ # Páginas da aplicação.
│   │   └── Home/ # Página inicial de listagem, exclusão e edição de produto.
│   │   └── CadastroProduto/ # Página de cadastro de novo produto.
│   ├── services/ # Pasta onde todos as chamadas à API estão definidas.
│   │   └── produto/ # Definição dos endpoints relacionados à produtos.
│   ├── store/ # Pasta de configuração do Redux.
│   │   └── modules/ # Módulos da store.
│   │   │   └── produto/ # Módulo Produto da store.
│   │   │   │   └── actions.ts # Definição das actions do módulo Produto.
│   │   │   │   └── actionsTypes.ts # Definição do tipo das actions do módulo Produto.
│   │   │   │   └── reducer.ts # Configuração do Reducer do módulo Produto.
│   │   │   │   └── sagas.ts # Configuração de todos os sagas relacionados ao módulo Produto.
│   │   │   │   └── types.ts # Definição dos tipos das actions e do state do módulo Produo.
│   │   │   └── ui/ # Módulo UI da store.
│   │   │   │   └── actions.ts # Definição das actions do módulo UI.
│   │   │   │   └── actionsTypes.ts # Definição do tipo das actions do módulo UI.
│   │   │   │   └── reducer.ts # Configuração do Reducer do módulo UI.
│   │   │   │   └── sagas.ts # Configuração de todos os sagas relacionados ao módulo UI.
│   │   │   │   └── types.ts # Definição dos tipos das actions e do state do módulo UI.
│   │   │   └── rootReducer.ts # Configuração da combinação de todos os Reducers da aplicação.
│   │   │   └── rootSaga.ts # Configuração da combinação de todos os Sagas da aplicação.
├────────── createStore.ts # Configuração da store.
└────────── index.ts # Configuração dos Middlewares do Redux, criação e exportação da store configurada.
```

## Arquitetura de pastas: Backend

 ```bash
estoqueACPO/backend
┌── Properties/ # Pasta de configuração de algumas propriedades de execução da solution;
│   ├── launchSettings/ # Configuração de portas e certificados de segurança para executar a solution.
├── ClientApp/ # Diretório de configuração da camada de apresentação (Frontend em React)
├── Controllers/ # Classe de mapeamento de rotas em métodos de acesso à base de dados.
│   ├── ProdutoControle.cs # Classe de mapeamento das rotas de CRUD da entidade Produtos.
├── Data/ # Configuração do contexto de dados, mapeamento das entidades relacionais do banco de dados em classes, implementação de métodos CRUD genéricos e específicos.
├── Migrations/ # Pasta gerada após rodar migrations de criação das tabelas e povoamento de dados caso tenha sido definido.
├── Models/ # Definição do modelo das entidades em formato de classe
│────── Produto.cs # Classe de definição da instância de registro da entidade Produtos.
└── EstoqueACPO.db # Arquivo do banco de dados SQLite
```

