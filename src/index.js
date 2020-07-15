//ETAPE 14 : INSTALLATION DE LA DEPENDANCE BODY-PARSER POUR FAIRE DES POSTES DANS LE SERVEUR
import bodyParser from 'body-parser';

//ETAPE 1 : INSTALLATION D'EXPRESS
import express from 'express';

//IMPORTATION DU FICHIER JSON
import country from './country.json';

//IMPORTATIONS DES ROUTES
import router from './routes';
import router2 from './namesCountry';
import router3 from './namesCountryMap';
import router4 from './namesCapitals';
import router5 from './namesCapitalMap';
import router6 from './oneCountry';
import router7 from './oneRegionName';
import router8 from './oneSubRegionName';
import router9 from './currency';
import router10 from './countries';


//ETAPE 1 : CREATION DU SERVEUR
const { SERVER_PORT } = process.env;
//console.log(SERVER_PORT);
const app = express();
app.listen(SERVER_PORT, () =>
    console.log(`[Express] is running on ${SERVER_PORT}`))


//ETAPE 2 : CREATION D'UNE ROUTE POUR AFFICHER LE NOM DES PROFESSEURS
app.use('/teachersName', router);

//ETAPE 3 : CREATION D'UN FICHIER JSON DANS LEQUEL SE TROUVE TOUTES LES DONNÉES DES PAYS ==> COUNTRY.JSON


//ETAPE 4 : CREATION D'UNE ROUTE POUR AFFICHER LES DONNÉES DES PAYS ==> LOCALHOST:1179:/ALL
//CREATION DE LA FONCTION
function getJson(req, res, next) {
    res.send(country);
}
//LIEN  
app.use('/all', getJson);


//ETAPE 5 : LIEN POUR OBTENIR LA LISTE DES PAYS AVEC LE LOOP ==> LOCALHOST:1179/NAMECOUNTRIES
app.use('/nameCountries', router2);

//ETAPE 6 : LIEN POUR OBTENIR LA LISTE DES PAYS AVEC LE MAP ==> LOCALHOST:1179/NAMECOUNTRIESMAP

app.use('/nameCountriesMap', router3);

//ETAPE 7 : LIEN POUR OBTENIR LA LISTE DES CAPITALES AVEC LE LOOP 

app.use('/nameCapitals', router4);

//ETAPE 8 : LIEN POUR OBTENIR LA LISTE DES CAPITALES AVEC LE MAP 

app.use('/nameCapitalMap', router5);

//ETAPE 9 : LIEN POUR OBTENIR UN PAYS EN PARTICULIER

app.use('/', router6);

//ETAPE 10 : LIEN POUR OBTENIR LA LISTE DES PAYS D'UNE REGION
app.use('/regions/', router7);

//ETAPE 11 : LIEN POUR OBTENIR LA LISTE DES PAYS QUI APPARATIENNENT À LA MÊME SOUS RÉGIONS 
app.use('/subregions/', router8);

//ETAPE 12 : LE LIEN POUR OBTENIR LA LISTE DES PAYS QUI ONT LA MÊME DEVISE
app.use('/currencies/', router9);

//ETAPE 13 : INSTALLATION DE POSTMAN

//ETAPE 14 : 
app.use(bodyParser.json()) //--> pour parser un json
app.use(bodyParser.urlencoded({extended:true})) //--> pour parser correctement
app.use('/countries', router10);

//----------------------------------------------------------------------------------------------A PLACER À LA FIN DU FICHIER--------------------

//CREATION D'UN MESSAGE D'ERREUR EN CAS DE MAUVAIS CHEMIN ==> MIDDLEWARE
app.use(function (req, res, next) {
    res.status(404).send("Cette page n'existe pas");
});