import Ember from 'ember';

export default Ember.Component.extend({
  args: {
    cosponsors: null,
    sponsor: null
  },

  highlighted: Ember.computed.filter('subcommittee.members', function(member, index, array) {
    console.log(this.args.sponsor);
    if(this.args.sponsor === null){
      return true;
    } else if(this.args.sponsor === member.legislator.bioguide_id){

      return true;
    } else {
      return false;
    }
  }),

  actions: {
    viewSponsors(params){
      this.set('args.cosponsors', params.cosponsors);
      this.set('args.sponsor', params.sponsor);
    }
  }
});
