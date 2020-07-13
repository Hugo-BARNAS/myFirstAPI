import express from 'express';
import country from "./country.json";
const router2 = express.Router();


const countryJs = JSON.parse(JSON.stringify(country));

let listname = [];
for (let i = 0; i < countryJs.length; i++) {
    let x = countryJs[i].name;
    listname.push(x);
    //console.log(listname)
}

router2.get('/', (req, res) => {
    res.status(200).send(listname);
});




export default router2;









