socialMood.factory('SearchService', function($http){
    return {
        twitterSearch: function(tagName){
            return $http.get('/search/twitter/' + tagName);
        },
        instagramSearch: function(tagName){
            return $http.get('/search/instagram/' + tagName);
        }
    };
});