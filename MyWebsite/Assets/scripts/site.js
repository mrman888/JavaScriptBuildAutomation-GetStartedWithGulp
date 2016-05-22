/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/bootstrap/index.d.ts" />
var Site = (function () {
    function Site(sitename) {
        this.SiteName = sitename;
    }
    return Site;
}());
$(document).ready(function () {
    var site = new Site("My Site");
    $('#dialogButton').click(function () {
        $('#myModal').modal();
    });
});
