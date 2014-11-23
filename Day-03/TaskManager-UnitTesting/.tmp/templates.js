angular.module('exercise.angular.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/dashboard.html',
    '<div class="dashboard">\n' +
    '    <sape-message message="Your Dashboard"></sape-message>\n' +
    '</div>\n' +
    '\n' +
    '<button type="button" ng-click="goHome()">Go back Home</button>');
  $templateCache.put('home/home.html',
    '<div class="home">\n' +
    '    <sape-message message="Welcome Home"></sape-message>\n' +
    '</div>\n' +
    '\n' +
    '<button type="button" ng-click="gotoDashboard()">Go to Dashboard</button>');
}]);
