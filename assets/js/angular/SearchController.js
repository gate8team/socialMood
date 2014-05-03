socialMood.controller('SearchController', function($scope, $http, SearchService){
    $scope.tagName = '';
    $scope.searchResults = [];
    $scope.showPreloader = false;

    $scope.searchByTag = function() {
        $scope.searchResults = [];

        $scope.showPreloader = true;

        SearchService.search($scope.tagName)
            .success(function(data){
                if (!data.error) {
                    $scope.showPreloader = false;

                    $scope.searchResults = data.content;
                }
            })
            .error(function(data){

            });
    };
});