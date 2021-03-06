import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('films', { path: '/' });
  this.route('film', { path: '/film/:film_id' });
  this.route('person', { path: '/person/:id' });
  this.route('location', { path: '/location/:id' });
  this.route('vehicle', { path: '/vehicle/:id' });
});

export default Router;
