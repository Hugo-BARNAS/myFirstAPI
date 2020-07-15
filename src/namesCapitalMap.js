import express from 'express';
import country from "./country.json";
const router5 = express.Router();


const countryJs = JSON.parse(JSON.stringify(country));

let listCapitalMap = countryJs.map(country => country.capital);

//CONTROLE
//console.log(listname);


router5.get('/', (req, res) => {
    res.status(200).send(listCapitalMap);
});




export default router5;