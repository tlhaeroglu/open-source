const express = require("express");
const axios = require("axios");

const app = express();

const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: 'elon musk',
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null'
    },
    headers: {
      'X-RapidAPI-Key': 'ccea9077c6msh17df179eab102a9p10281bjsnae4e3051eb5f',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};

app.get("/", (req,res) =>{
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.send(error);
    });
});

app.listen(4500, () =>{
    console.log("http://127.0.0.1:4500");
});