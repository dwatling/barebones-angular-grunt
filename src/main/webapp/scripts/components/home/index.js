var angular = require('angular');

var home = angular.module('home', []);
require('./home');
home.factory('HomeModel', require('./home.model'));
home.service('HomeService', require('./home.service'));

module.exports = home;
