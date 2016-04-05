import Ember from 'ember';

export default Ember.Component.extend({
  senate: "senate",
  joint: "joint",
  house: "house",

  senateCommittees: Ember.computed.filterBy("committees", "chamber", 'senate'),
  houseCommittees: Ember.computed.filterBy("committees", "chamber", "house"),
  jointCommittees: Ember.computed.filterBy("committees", "chamber", "joint")
});
