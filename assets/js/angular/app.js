var socialMood = angular.module('socialMood', ['masonry']);

socialMood.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

//socialMood.directive('ngMasonry', function(){
//    return function(scope, element, attrs){
//        scope.$watch(attrs.ngMasonry, function(value){
//            if (value){
//                $('.main__results--instagram').masonry('destroy');
//                $('.main__results--instagram').masonry({
//                    itemSelector: '.item',
//                    singleMode: false,
//                    isResizable: true,
//                    isAnimated: true,
//                    animationOptions: {
//                        queue: false,
//                        duration: 500
//                    }
//                });
//            }
//        });
//    };
//});