var Stripe = require('stripe');
Stripe.initialize('sk_test_Eu2ScEpiurzSeLxekNwCVl5Q');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
