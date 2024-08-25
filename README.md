METAR Viewer
O METAR Viewer é uma aplicação web que permite visualizar e traduzir informações METAR para aeroportos em tempo real. Utiliza a API AVWX para obter dados METAR e inclui uma funcionalidade para traduzir essas informações para uma forma mais compreensível.

Funcionalidades
Busca de METAR: Permite inserir o código ICAO de um aeroporto e buscar o METAR atual.
Tradução do METAR: Converte o METAR bruto em uma descrição legível com detalhes sobre vento, visibilidade, condições meteorológicas e muito mais.
Interface de Usuário Simples: Interface limpa e fácil de usar, com botões para buscar e traduzir o METAR.
Tecnologias
Frontend: HTML, CSS, JavaScript
API: AVWX para dados METAR
Deploy: Vercel
Instalação
Clone o Repositório

bash
Copiar código
git clone https://github.com/seu-usuario/metar-viewer.git
Navegue até o Diretório

bash
Copiar código
cd metar-viewer
Instale Dependências

Se houver dependências, instale-as com:

bash
Copiar código
npm install
Configure a Chave da API

Substitua Wb6bHGDnFYz2amm0hyHv7kl-MTiEChkrSyYOk1_xyWk pela sua chave de API AVWX no arquivo JavaScript.

Uso
Abrir o Site

Após o deploy, acesse a URL do site para visualizar a aplicação.

Buscar METAR

Insira o código ICAO do aeroporto desejado no campo de entrada.
Clique no botão "Mostrar METAR" para buscar as informações.
Traduzir METAR

Após buscar o METAR, clique no botão "Traduzir METAR" para ver uma descrição detalhada das informações.
Funcionalidades Futuras
Suporte para Mais Idiomas: Adicionar tradução para mais idiomas.
Histórico de Consultas: Armazenar e exibir histórico de consultas METAR.
Melhorias na UI/UX: Melhorar a interface e a experiência do usuário com novas funcionalidades e designs.
Contribuições
Se desejar contribuir para o projeto, siga os passos abaixo:

Fork o Repositório

Crie uma Nova Branch

bash
Copiar código
git checkout -b minha-nova-funcionalidade
Faça suas Alterações e Commit

bash
Copiar código
git commit -am 'Adiciona nova funcionalidade'
Push para o Repositório Remoto

bash
Copiar código
git push origin minha-nova-funcionalidade
Crie um Pull Request

Licença
Distribuído sob a licença MIT.

Contato
Matheus Emmanuel Maciel Pontes
LinkedIn
Email
