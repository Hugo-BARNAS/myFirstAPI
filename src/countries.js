import express from 'express';
import country from "./country.json";
const router10 = express.Router();


let countryJs = JSON.parse(JSON.stringify(country));



router10.post('/:countryName', (req, res) => {
    res.status(200).send("ça marche bien");
    console.log(req.body);
});




export default router10;