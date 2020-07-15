
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

router7.get('/:subregionName', (req, res) => {
    for (let i = 0; i < countryJs.length; i++) {
        if (req.params.subregionName === countryJs[i].subregion) {
            listCountriesByRegion.push(countryJs[i].name)
        };
    };
    res.status(200).send(listCountriesByRegion)
});





export default router7;