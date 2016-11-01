var app = angular.module('stockMarketApp',[]);
app.controller('MainCtrl',[function(){
  var self = this;
  self.stocks=[
    {name:'First Stock', price:500, previous: 600},
    {name:'Second Stock', price:300, previous: 350},
    {name:'Third Stock', price:50, previous: 60},
    {name:'Four Stock', price:100, previous: 120}
  ];

  self.getChange = function(stock){
    return Math.ceil(((stock.price - stock.previous)/stock.previous)*100);
  };
}]);
app.directive('stockWidget',[function(){
  return{
    templateUrl:'stock.html'
  };
}]);
