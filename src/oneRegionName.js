
//IMPORTATION DU MODULE EXPRESS
import express from 'express';
//IMPORTATION DU FICHIER COUNTRY.JSON
import country from "./country.json";

const router7 = express.Router();
let countryJs = JSON.parse(JSON.stringify(country));



// for (let i = 0; i < country.length; i++) {
//     if ("Asia" === countryJs[i].region) {
//         listCountriesByRegion.push(countryJs[i].name)
//     };
// };
// console.log(listCountriesByRegion);
let listCountriesByRegion = [];

router7.get('/:regionName', (req, res) => {
    for (let i = 0; i < countryJs.length; i++) {
        if (req.params.regionName === countryJs[i].region) {
            listCountriesByRegion.push(countryJs[i].name)
        };
    };
    res.status(200).send(listCountriesByRegion)
});





export default router7;