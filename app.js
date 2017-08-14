(function() {

angular
.module("stoplight", [
  'ui.router'
])
.config([
  '$stateProvider',
  RouterFunction
])
.controller("stoplightController", [
  '$state',
  '$stateParams',
  stoplightControllerFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
    .state('color', {
      url: '/:color',
      controller: 'stoplightController',
      controllerAs: 'vm',
      templateUrl: 'stoplight.html'
    })
}

function stoplightControllerFunction($state, $stateParams){
  this.bg = $stateParams.color
  this.colors = ['red', 'yellow','green']
  this.turn = function(newColor){
    $state.go('color', { color: newColor })
  }
}


})()
