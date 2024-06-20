const cep1 = "latlongMap";
const apiKey = '054ea8a1a06f41e484ada8039190be62'; //Insira aqui a sua chave de API

fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cep1}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const { lat, lng } = data.results[0].geometry;
        console.log(`Teste de ApiMaps -> Latitude: ${lat}, Longitude: ${lng}`);
    })
    .catch(error => {
        console.error('Erro ao obter dados de geolocalização:', error);
    });

    export default apiMaps;