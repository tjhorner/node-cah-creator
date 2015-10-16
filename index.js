function CahCreator(){
  var Client = require('node-rest-client').Client,
      client = new Client(),
      CAH_CREATOR_API_BASE = "http://cahcreator.com/api/";

  function apiRoute(route){
    return CAH_CREATOR_API_BASE + route;
  }

  this.getDecks = function(callback){
    client.get(apiRoute("decks"), function(data, response){
      callback(JSON.parse(data));
    });
  };

  this.getDeck = function(deckId, callback){
    client.get(apiRoute("deck/" + deckId), function(data, response){
      callback(JSON.parse(data));
    });
  };

  return this;
};

module.exports = CahCreator;
