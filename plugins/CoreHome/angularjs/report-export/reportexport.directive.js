/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

/**
 *
 */
(function () {
    angular.module('piwikApp').directive('piwikReportExport', piwikReportExport);

    piwikReportExport.$inject = ['$document', 'piwik', '$compile'];

    function piwikReportExport($document, piwik, $compile){

        return {
            restrict: 'A',
            scope: {
                'reportTitle': '@'
            },
            link: function(scope, element, attr) {

                element.on('click', function () {
                    var elem = angular.element('<span ng-include="\'plugins/CoreHome/angularjs/report-export/reportexport.popover.html?cb=' + piwik.cacheBuster + '\'" id="reportExport"></span>');
                    $document.find('body').eq(0).append(elem);
                    $compile(elem)(scope);
                });
            }
        };
    }
})();
