import express from 'express';
import country from "./country.json";
const router3 = express.Router();


const countryJs = JSON.parse(JSON.stringify(country));

let listnameMap = countryJs.map(country => country.name);

//CONTROLE
//console.log(listnameMap);


router3.get('/', (req, res) => {
    res.status(200).send(listnameMap);
});




export default router3;