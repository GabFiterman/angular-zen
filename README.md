# AngularZen

Este é um aplicativo Angular simples que utiliza o Angular Material para criar uma interface de usuário amigável.
O aplicativo permite aos usuários autenticar-se, visualizar uma galeria de álbuns e, em seguida, visualizar detalhes e fotos específicos de cada álbum.

## Recursos

- **Autenticação Simples**: Os usuários podem fazer login com um nome de usuário e senha predefinidos.
- **Galeria de Álbuns**: Os usuários autenticados podem visualizar uma lista de álbuns. Cada álbum é exibido como um cartão com um título e um botão para ver detalhes.
- **Detalhes do Álbum**: Ao clicar no botão "Detalhes" em um álbum, os usuários podem ver mais informações sobre o álbum.
- **Visualização de Fotos**: Os usuários podem clicar no botão para visualizar as 10 primeiras fotos do álbum em uma página de detalhes separada.

# Como Executar o Projeto

**Clone o Repositório**: Clone este repositório em sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/GabFiterman/angular-zen.git
```

**Instale as Dependências**: Navegue até o diretório do projeto e instale as dependências utilizando o npm:

```bash
cd nome-do-repositorio
npm install
```

**Execute o Aplicativo**: Inicie o servidor de desenvolvimento Angular com o seguinte comando:

```bash
ng serve
```

O aplicativo estará disponível em `http://localhost:4200`. Abra este link em seu navegador para visualizar o aplicativo.

## Login

- **usuário**: Jhon_Doe
- **Senha**: password

# Estrutura do Projeto

- `src/app/components/login`: Contém o componente e serviços relacionados à autenticação.

- `src/app/components/gallery`: Contém componentes relacionados à exibição da galeria de álbuns.

- `src/app/components/gallery-detail`: Contém componentes relacionados à exibição detalhada de álbuns e fotos.

- `src/app/services`: Contém serviços utilizados para buscar dados da API.

- `src/app/shared`: Contém componentes, serviços ou módulos compartilhados por toda a aplicação.

- `src/app/app-routing.module.ts`: Define as rotas da aplicação.

## Contribuindo

Sinta-se à vontade para contribuir para o desenvolvimento deste aplicativo. Se você encontrar problemas ou tiver sugestões, abra uma issue.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
