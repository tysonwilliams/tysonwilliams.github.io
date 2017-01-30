var app = angular.module("PortfolioApp", ["ngRoute", "Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        });
});