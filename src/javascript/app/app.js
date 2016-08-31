
window.$ = window.jQuery = require('jquery');

require("bootstrap");
require("angular");
require("angular-route");
require("angular-sanitize");
require("angular-animate");
require("angular-ui-bootstrap");
require("angular-loader");
require("angular-sanitize");

let app = angular.module('app', [
  'ngRoute',
]);