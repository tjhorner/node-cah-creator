function CahCreator(){
  var Client = require('node-rest-client').Client,
      client = new Client(),
      CAH_CREATOR_API_BASE = "http://cahcreator.com/api/";

  function apiRoute(route){
    return CAH_CREATOR_API_BASE + route;
  }

  function tryParse(data){
    try{
      return (typeof(data) === "string" ? JSON.parse(data) : data);
    }catch(e){
      return { error: "Generic error!" };
    }
  }

  this.getDecks = function(callback){
    client.get(apiRoute("decks"), function(data, response){
      callback(tryParse(data));
    });
  };

  this.getDeck = function(deckId, callback){
    client.get(apiRoute("deck/" + deckId), function(data, response){
      callback(tryParse(data));
    });
  };

  return this;
};

module.exports = CahCreator;
