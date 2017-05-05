(function(){
  'use strict'

  angular
  .module("stoplight", [
    'ui.router'
  ])
  .config(['$stateProvider', RouterFunction])
  .controller("stoplightController", ["$stateParams", "$state", stoplightControllerFunction])

  function RouterFunction($stateProvider){
    $stateProvider.state('color', {
      url: '/:color',
      controller: "stoplightController",
      controllerAs: "vm",
      templateUrl: "stoplight.html"
    })
  }
  function stoplightControllerFunction($stateParams, $state){
    console.log($state)
    this.colors = ['red', 'yellow','green']
    this.turn = function(color){
      $state.go('color', {color: color})
      this.bg = color
    }
    this.turn($stateParams.color)
  }
})()
