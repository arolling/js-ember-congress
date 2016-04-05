import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&per_page=50&apikey=882877952f00411b8e6d7b7a89045c5e';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
