
//IMPORTATION DU MODULE EXPRESS
import express from 'express';
//IMPORTATION DU FICHIER COUNTRY.JSON
import country from "./country.json";

const router9 = express.Router();
let countryJs = JSON.parse(JSON.stringify(country));


let listCountriesByCurrency = [];


router9.get('/:currency', (req, res) => {
    for (let i = 0; i < countryJs.length; i++) {
        let currency = countryJs[i].currencies;
        if (req.params.currency === currency[0].name) {
            listCountriesByCurrency.push(countryJs[i].name)
        };
    };
    res.status(200).send(listCountriesByCurrency)
});

// let currency = countryJs[0].currencies;
// console.log(currency[0].name);


export default router9;