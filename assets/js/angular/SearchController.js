socialMood.controller('SearchController', function($scope, $http, SearchService){
    $scope.tagName = '';
    $scope.searchResults = [];
    $scope.showPreloader = false;
    $scope.showStatus = false;
    $scope.statusCount = 0;

    $scope.searchByTag = function() {
        $scope.searchResults = [];

        $scope.showPreloader = true;

        SearchService.twitterSearch($scope.tagName)
            .success(function(data){
                if (!data.error) {
                    $scope.showStatus = true;
                    $scope.showPreloader = false;

                    $scope.searchResults = data.content;
                    $scope.statusCount = data.content.length;
                }
            })
            .error(function(data){

            });
    };
});