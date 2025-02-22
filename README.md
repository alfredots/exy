# Chrome Extension Template

![engine: Node](https://badgen.net/static/engine/Nodejs>=14.18.0/orange)
![React](https://badgen.net/static/React/^18.2.0/orange)
![typescript](https://badgen.net/badge/icon/typescript^5.2.2/orange?icon=typescript&label)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/code%20style-ESLint-purple?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/code%20style-Prettier-ff69b4?style=flat-square&logo=prettier)

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](http://prettier.io/)

## Instalação

Primeiramente in

## Estrutura das pastas

Esta é a estrutura do projeto, consulte essa seção caso tenha dúvidas ou dificuldade para encontrar determinados arquivos.

```
📦 chrome-ext-vite-template
├──📁 src
│   ├──📁 application         # Aplicação do caso de uso
│   |   ├──📁 contracts       # Constantes do domínio
│   |   ├──📁 gateways        # Constantes do domínio
│   |   ├──📁 protocols       # Constantes do domínio
│   |   └──📁 use-cases       # Utilitários reutilizáveis
│   ├──📁 assets              # Conteúdo estático como imagens, ícones, etc.
│   ├──📁 background          # Scripts relacionados ao service worker da extensão
│   ├──📁 content-script      # Scripts que interagem com páginas web
│   ├──📁 domain              # As regras de negócio core da aplicação abstraídas da implementação tecnológica
│   |   ├──📁 entities        # Entidades do domínio do negócio
│   |   ├──📁 errors          # Classes de tratamento de erros de negócio
│   |   └──📁 use-cases       # Contratos dos casos de usos do projeto
|   ├──📁 infra               # Implementação de conexão com ferramentas externas e apis
│   |   ├──📁 cache           # Classes que conectam a implementação tecnológica com as abstrações de negócios do domínio
│   |   ├──📁 dto             # Implementações tecnológicas dos gateways do domínio
│   |   ├──📁 gateways        # Contém definições de tipos para conexão com sistemas externos
│   |   ├──📁 http            # Protocolos de interação utilizados para implementação
│   |   ├──📁 mappers         # Protocolos de interação utilizados para implementação
│   |   └── endpoints.ts      # Definição dos endpoints usados na aplicação
│   ├──📁 main                # Ponto de entrada da aplicação, implementa as regras do domínio e de infraestrutura
│   |   ├──📁 factories       # Constantes utilizadas pela aplicação
│   |   ├──📁 use-cases       # Contém classes que instanciam dependências de infra e domain
│   |   └──📁 validators      # Utilitários reutilizáveis
│   ├──📁 presentation        # Contém a lógica relacionada a _UI_ da extensão
│   |   ├──📁 components      # Constantes utilizadas pela aplicação
│   |   ├──📁 hooks           # Contém classes que instanciam dependências de infra e domain
│   |   └──📁 modules         # Utilitários reutilizáveis
│   └──📁 views               # Define a estrutura de navegação da extensão
│       └──📁 popup           # Utilitários reutilizáveis
├── .gitignore                # Arquivos que não deve ser versionados
├── package.json              # Configuração de dependências e scripts
├── tsconfig.json             # Configuração do TypeScript
├── vite.config.ts            # Configuração do bundler
└── README.md                 # Documentação do projeto
```

## Arquitetura limpa

A estrutura do projeto foi feita considerando os princípios propostos pela arquitetura limpa.

**Independência :** O domain garante que as regras sejam implementadas independente de ferramentas ou bibliotecas.

**Divisão de responsabilidades:** Cada pasta contém código relacionado apenas a sua área, separando as regras de negócio da implementação tecnológica. Assim garantimos que uma alteração na UI ou no service worker não afete as regras de negócio, por exemplo.

Para desenvolvimentos futuros é importante ter esses princípios em mente, alguns exemplos:

- Evitar colocar código que dependa de frameworks ou soluções externas na pasta do domínio (domain);
- Desacoplar a lógica de negócio da apresentação da UI, regras de negócio devem ficar em domain, para implementar na UI deve-se usar um dos Use Cases;
- Componentes e utilitários reutilizáveis devem ficar na pasta shared para evitar repetição;

## Estrutura do projeto

A estrutura base do projeto foi retirada do chrome-ext-vite-template. Repo de origem https://github.com/guocaoyi/create-chrome-ext

```

```
