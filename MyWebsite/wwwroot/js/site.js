/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/bootstrap/index.d.ts" />
var Site = (function () {
    function Site(sitename, siteConfiguration) {
        this.SiteName = sitename;
        siteConfiguration = siteConfiguration;
    }
    return Site;
}());
$(document).ready(function () {
    var site = new Site("My Site", new SiteConfiguration());
    $('#modalContent').html(site.SiteName);
    $('#dialogButton').click(function () {
        $('#myModal').modal();
    });
});
