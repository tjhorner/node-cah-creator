var CahCreator = require('..'),
    api = new CahCreator(),
    assert = require('assert');

describe('CahCreator', function(){
  this.slow(1000);

  describe('#getDecks()', function(){
    it('should return an array of current decks', function(done){
      api.getDecks(function(decks){
        assert.equal(Array.isArray(decks), true);
        deck = decks[0];
        done();
      });
    });
  });

  describe('#getDeck()', function(){
    it('should return the specified deck object (in this case, the first deck returned above)', function(done){
      if(deck){
        api.getDeck(deck, function(deckObj){
          assert(deckObj.name);
          assert(deckObj.description);
          assert(deckObj.expansion);
          assert(deckObj.blackCards);
          assert(deckObj.whiteCards);
          done();
        });
      }else{
        console.log("no decks available right now, assuming pass.");
        done();
      }
    });
  });
});
