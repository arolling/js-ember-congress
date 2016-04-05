import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
  model: function(params){
    var key = config.myApiKey;
    var urlCommittee = 'http://congress.api.sunlightfoundation.com/committees?fields=subcommittees,name,committee_id,url,members&per_page=all&committee_id=' + params.committee_id + '&apikey=' + key;
    var urlBills = 'http://congress.api.sunlightfoundation.com/bills?history.active=true&committee_ids=' + params.committee_id + '&apikey=' + key;
    return Ember.RSVP.hash({
      committee: Ember.$.getJSON(urlCommittee).then(function(responseJSON){
        return responseJSON.results;
      }),
      bills: Ember.$.getJSON(urlBills).then(function(responseJSON){
        console.log(responseJSON.results);
        return responseJSON.results;
      })

    });
  },

  // afterModel: function(params){
  //   console.log(params[0].committee_id);
  //   var url = 'http://congress.api.sunlightfoundation.com/bills?committee_ids=' + params[0].committee_id + '&apikey=882877952f00411b8e6d7b7a89045c5e';
  //   return Ember.$.getJSON(url).then(function(responseJSON){
  //     console.log(responseJSON.results);
  //     return responseJSON.results;
  //   });
  // }


});
