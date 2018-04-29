(function() {
    'use strict';
                                         
    

var app = angular.module('application', []);//ชื่อโมดูล, โมดูลที่เกี่ยวข้อง(จะกล่าวถึงในภายหลัง) 

    app.controller('app', function ($scope) {
        
        $scope.toAd = function() {
            $scope.homepage = !$scope.homepage;
            $scope.adminpage = !$scope.adminpage;
        };
        $scope.toPass = function() {
             $scope.homepage = !$scope.homepage;
             $scope.adminpage = !$scope.adminpage;
        };

       
//admin function
        //adminlogin
        $scope.adminLog = function() {
             $scope.adminpage = !$scope.adminpage;
             $scope.adminHome = !$scope.adminHome;
        };
        //admin Overcrowded
         $scope.adminOver = function() {
             $scope.adminHome = !$scope.adminHome;
             $scope.adminOvercrowded = !$scope.adminOvercrowded;
        };
         $scope.overSubmit = function() {
             $scope.adminHome = true;
             $scope.adminOvercrowded = false;
             $scope.adminTrain = false;
        };
        //admin train brokedown
       $scope.adminTrainBroke = function() {
             $scope.adminHome = !$scope.adminHome;
             $scope.adminTrain = !$scope.adminTrain;
        };
        //back to admin homepage
        $scope.adminBack = function() {
             $scope.adminHome = true;
             $scope.adminOvercrowded = false;
             $scope.adminTrain = false;
        };
        //admin logout
        $scope.adminLogout = function() {
             $scope.adminHome = false;
             $scope.adminpage = true;
        };



//Passenger function 
        $scope.faceLog = function() {
             $scope.homepage = !$scope.homepage;
             $scope.passGreeting = !$scope.passGreeting;
        };
         $scope.googleLog = function() {
             $scope.homepage = !$scope.homepage;
             $scope.passGreeting = !$scope.passGreeting;
        };
        $scope.passHome = function() {
             $scope.passGreeting = !$scope.passGreeting;
             $scope.passengerHome = !$scope.passengerHome;

        };
        $scope.passLogout = function() {
             $scope.passengerHome = !$scope.passengerHome;
             $scope.homepage = !$scope.homepage;
        };


    });


})

(); // Best Practice For Javascript