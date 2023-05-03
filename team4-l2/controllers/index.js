const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('users').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };

/*
const professional = (req, res, next) => {
  // res.json("Doctor");
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.json([{
    professionalName: "Alberto",
    base64Image: "",
    primaryDescription: "Descripción",
    workDescription1: "Primera Descripción",
    workDescription2: "Segunda descripción",
    linkTitleText: "Titulo",
    githubLink: {
        text: "GitHUb",
        link: "https://github.com/"
    },
    linkedInLink: {
        text: "LInkedin",
        link: "https://linkedin.com/"
    },
    nameLink: {
        firstName: "Jacob",
        url: "https://es.dreamstime.com/stock-de-ilustraci%C3%B3n-profesiones-conjunto-de-personajes-de-dibujos-animados-image95523011"
    },
  }]);
};

module.exports = {  professional };
*/