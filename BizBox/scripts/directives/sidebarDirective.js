angular.module ("BizBoxApp").directive ('sidebarDirective', function () {
    return {
        scope: {
            showtype: '='
        },
        templateUrl: 'templates/directives/sidebar-directive.html',
    }
})
