const marvel = {
    render: () => {
        /*Generamos la URL con la combinación del timestamp "1" y  la combinación de las APIs privada y pública que nos ha proporcionado Marvel pasándola
        por un programa de conevrsión a MD5 (Importante que ese hash que genera el conversor MD5 tiene que estar en minúscula)*/
        const urlapi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=024930010e8eb590da3508c83cfb34a2&hash=738cefaa4f05a66bf47ec505bb932d62';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlapi)
        .then(res => res.json())
        .then((json) => {
            /** Iteramos (recorremos) el JSON  y declaramos dos variables para que nos muestre el nombre del superheroe y la descripción asociada*/
            for(const hero of json.data.results) {
                let descriptionHero = hero.description;
                let urlHero = hero.urls[0].url;
                console.log(name.hero + ": " + descriptionHero);

                contentHTML+= `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
            }
            console.log('bien');
            container.innerHTML = contentHTML;
            /**Mostramos todos los resultados del JSON */
            console.log(json, 'RES.JSON');
        })
    }
};

window.onload = function() {
    marvel.render();
}

