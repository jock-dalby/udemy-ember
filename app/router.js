import Ember from 'ember';
import config from './config/environment';

// Routing is the mapping of URLs to views in an application
// to define the applications flow.

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mahalo'); // renders mahalo.hbs

  // Nested routes are defined by passing a callback to this.route()
  // and then use {{outlet}} in the template to render nested content
  this.route('beaches', function() {
    this.route('black_sand')
  });

  this.route('surfboards', {path: '/boards'}); // navigate from /surfboards to /boards
});

export default Router;
