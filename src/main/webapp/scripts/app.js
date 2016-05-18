var angular = require('angular');
require('angular-material');
require('angular-route');

var app = angular.module('app', ['ngMaterial', 'ngRoute', 'home']);
app.config(require('./routes'));
require('./components');

module.exports = app;
