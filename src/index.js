

//ETAPE 1 : INSTALLATION D'EXPRESS
import express from 'express';

//IMPORTATIONS DES ROUTES
import router from './routes';
import country from './country.json';
import router2 from './namesCountry';


//CREATION DU SERVEUR
const { SERVER_PORT } = process.env;
console.log(SERVER_PORT);
const app = express();
app.listen(SERVER_PORT, () =>
    console.log(`[Express] is running  on ${SERVER_PORT}`))


//ETAPE 2 : CREATION D'UNE ROUTE POUR AFFICHER LE NOM DES PROFESSEURS
app.use('/teachersName', router);

//ETAPE 3 : CREATION D'UN FICHIER JSON DANS LEQUEL SE TROUVE TOUTES LES DONNÉES DES PAYS ==> COUNTRY.JSON



//ETAPE 4 : CREATION D'UNE ROUTE POUR AFFICHER LES DONNÉES DES PAYS
function getJson(req, res, next){
    res.send(country);
}
//LIEN POUR OBTENIR TOUTES LES DONNÉES ==> LOCALHOST:1179:/ALL
app.use('/all', getJson);


//ETAPE 5 : CREATION D'UNE ROUTE POUR AFFICHER LES DONNÉES DES PAYS


//ETAPE 6 : LIEN POUR OBTENIR LA LISTE DES CAPITALES ==> LOCALHOST:1179/NAMECOUNTRIES
app.use('/nameCountries', router2);








//----------------------------------------------------------------------------------------------A PLACER À LA FIN--------------------
//CREATION D'UN STATUS 200 ==> MIDDLEWARE
app.use(function(req, res, next) {
    res.status(200).send("OK");
});


//CREATION D'UN MESSAGE D'ERREUR EN CAS DE MAUVAIS CHEMIN ==> MIDDLEWARE
app.use(function(req, res, next) {
    res.status(404).send("Cette page n'existe pas");
});