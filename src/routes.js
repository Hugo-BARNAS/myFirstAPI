import express from 'express';


const Router = express.Router();

Router.get('/', (req, res) => {
    res.send ('thomas: "Thomas Jamais", alban: "Alban Meurice"')
});



export default Router;