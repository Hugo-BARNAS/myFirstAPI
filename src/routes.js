import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).res.send ('thomas: "Thomas Jamais", alban: "Alban Meurice"')
});



export default router;