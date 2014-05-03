socialMood.factory('SearchService', function($http){
    return {
        search: function(tagName){
            return $http.get('/search/' + tagName);
        }
    };
});