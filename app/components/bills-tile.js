import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setSponsors(bill){
      console.log(bill);
      var params = {
        cosponsors: bill.cosponsor_ids,
        sponsor: bill.sponsor_id
      };
      console.log(params);
      this.sendAction("viewSponsors", params);
    }
  }
});
