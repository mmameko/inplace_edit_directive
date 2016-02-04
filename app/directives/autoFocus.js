/**
 * Created by Home-PC on 04.02.2016.
 */

app.directive('autoFocused', function(){
    return {
        restrict: 'A',
        link: function(scope, el, attr){
            scope.$parent.$watch('inFocus', function(value){
                if(value){
                    setTimeout(function(){
                        el[0].focus();
                    }, 0);
                }
            });
        }
    };
});