import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('committee', {path: '/committee/:committee_id'});
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
});

export default Router;
