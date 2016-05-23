/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/bootstrap/index.d.ts" />

class Site {
    public SiteName: string;
    public SiteConfiguration: SiteConfiguration;

    constructor(sitename: string, siteConfiguration: SiteConfiguration) {
        this.SiteName = sitename;
        siteConfiguration = siteConfiguration;
    }
}

$(document).ready(function () {
    var site = new Site("My Site", new SiteConfiguration());
    $('#modalContent').html(site.SiteName);

    $('#dialogButton').click(function () {
        $('#myModal').modal();
    
    });
});