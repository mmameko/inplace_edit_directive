/**
 * Created by Home-PC on 03.02.2016.
 */

app.directive('editField', function(){
    return {
        restrict: 'E',
        template: '<div class="component-edit-field" ng-switch on="type">' +
            '<span ng-hide="inEdit" ng-class="value ? \'value\' : \'placeholder\'">{{ value || placeholder }}</span>' +
            '<input ng-switch-when="input" ng-show="inEdit" type="text" ng-model="$parent.value" autofocus/>' +
            '<select ng-switch-when="select" ng-show="inEdit" ng-options="item for item in $parent.items()" ng-model="$parent.value" autofocus></select>' +
            '<input ng-switch-default type="text" ng-show="inEdit" ng-model="$parent.value" autofocus/>' +
        '</div>',
        replace: true,
        link: function(scope, el, attr){
            var previous = scope.value,
                REVERT_KEY_CODE = 27,
                SAVE_KEY_CODE = 13;

            console.log(scope.items());

            el.on('dblclick', function(e){
                scope.$apply(function(){
                    scope.inEdit = true;
                });
            });

            el.on('keydown', function(e){
                if(e.keyCode === REVERT_KEY_CODE){
                    scope.$apply(function(){
                        scope.inEdit = false;
                        scope.value = previous;
                    });
                } else if(e.keyCode === SAVE_KEY_CODE){
                    previous = scope.value;
                    scope.$apply(function(){
                        scope.inEdit = false;
                    });
                }
            });
        },
        scope: {
            value: '@defaultValue',
            placeholder: '@',
            type: '@',
            inEdit: '@',        // allow set appropriate mode in element attributes
            items: '&items'     // one way binding
        }
    };
});