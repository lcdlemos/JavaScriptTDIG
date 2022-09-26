const usuario = {
    "autor": "Demetrio Mestre",
    "endereco": {
        "rua": "Rua Qualquer",
        "suite": "JS",
        "cidade": "Campina Grande",
        "CEP": "581485-148",
        "geo": {
            "lat": "13.51",
            "lng": "52.54"
        }
    }
}

const {autor, endereco:{cidade, suite, CEP, geo:{lat, lng}}} = usuario

console.log(`${autor} ${suite}: ${CEP} - ${cidade} (${lat}, ${lng})`);