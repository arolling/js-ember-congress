import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
  model: function(params){
    var key = config.myApiKey;
    var urlCommittee = 'http://congress.api.sunlightfoundation.com/committees?fields=subcommittees,name,committee_id,url,members&per_page=all&committee_id=' + params.committee_id + '&apikey=' + key;
    var urlBills = 'http://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at&committee_ids=' + params.committee_id + '&apikey=' + key;
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
});
