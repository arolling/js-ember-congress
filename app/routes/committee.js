import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    console.log(params.committee_id);
    var url = 'http://congress.api.sunlightfoundation.com/committees?fields=subcommittees,name,url&per_page=all&committee_id=' + params.committee_id + '&apikey=882877952f00411b8e6d7b7a89045c5e';
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
