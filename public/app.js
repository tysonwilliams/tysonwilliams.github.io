var app = angular.module("PortfolioApp", ["ngRoute", "Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "public/components/home/home.html"
        });
});