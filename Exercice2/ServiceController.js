var myApp = angular.module('Service',[]);

myApp.controller('ServiceController', ["$http", function($http) {

    var self=this;

    this.message="ok";

    this.promo;

    console.log($http.get('promo.json'));

    $http.get("promo.json")
        .then(function(response) {
            this.promo = response.data;
        });


    this.services =

    [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":true
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    this.total = function()
    {
        var i = 0;

        var total = 0;

        for(i = 0; i < self.services.length; i++)
        {
            if(self.services[i].active == true)
            {
                total = total + 1;
            }
        }

        return total;
    };

    this.toggleActive = function(service)
    {
        for(i = 0; i < self.services.length; i++)
        {
            if(self.services[i] == service)
            {
                if(self.services[i].active == true)
                {
                    self.services[i].active = false;
                }
                else
                    self.services[i].active = true;
            }
        }
    };

    this.prix = function()
    {
        var prix = 0;

        for(i = 0; i < self.services.length; i++)
        {
            if(self.services[i].active == true)
            {
                prix = prix + self.services[i].price;
            }
        }

        return prix + ' $';
    }

    this.checkPromo = function(value)
    {
        for(pro in self.promo)
        {
            if(pro == value)
            {
                return pro[value];
            }
        } return 0;
    }



}]);