var app = angular.module('app', []);
app.controller('PasswordController', function PasswordController($scope) {
    $scope.password = '';
    $scope.checkStrength = function () {
        if ($scope.password.length > 8)
            $scope.strength = 'strong';
    };
});

describe('PasswordController', function () {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.checkStrength', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function () {
            var $scope = {};
            var controller = $controller('PasswordController', { $scope: $scope });
            $scope.password = '123456789';
            $scope.checkStrength();
            expect($scope.strength).toEqual('strong');
        });
    });
});