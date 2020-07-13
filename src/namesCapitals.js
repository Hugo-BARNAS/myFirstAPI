import express from 'express';
import country from "./country.json";
const router4 = express.Router();


const countryJs = JSON.parse(JSON.stringify(country));

let listname = [];
for (let i = 0; i < countryJs.length; i++) {
    let x = countryJs[i].capital;
    listname.push(x);
    //console.log(listname)
}

router4.get('/', (req, res) => {
    res.status(200).send(listname);
});




export default router4;









