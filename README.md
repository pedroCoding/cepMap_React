- Consumindo uma API de busca CEP, exibindo na tela o Logradouro, Bairro, Cidade e Estado. 
Logo abaixo, exibi no mini-mapa o logradouro em questão demarcando toda a sua extensão!

- Projeto desenvolvido com boas práticas de JS, com REACT.

- Link para teste em tempo real: https://cep-map-react.vercel.app/


1. Utilizei a plataforma OPEN CAGE DATA, para pegar o CEP da requisição e retornar a geolocalização
(latitude e longitude) para em seguida, demarcar no mapa.

2. Para utilizar a aplicação no seu projeto com maestria, precisa criar uma conta na OPEN CAGE, que é grátis
e te permite até 2.500 requisições gratuitas mensalmente, em seguida, alterar a API KEY do projeto, dentro da
pasta SRC/SERVICES/apiGeoMaps.js