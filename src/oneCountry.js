import express from 'express';
import country from "./country.json";
const router6 = express.Router();
let countryJs = JSON.parse(JSON.stringify(country));

//controles
// console.log(countryJs[0].name); ==> Afghanistan ==> OK
//console.log(countryJs[0]); ==> toutes les données d'Afghanistan ==> Ok
//console.log(country[1]);
//console.log(country.length);

router6.get('/:name', (req, res) => {
    for (let i = 0; i < country.length; i++)
        if (req.params.name === countryJs[i].name){
             res.status(200).send(country[i]);
        }      
});









export default router6;