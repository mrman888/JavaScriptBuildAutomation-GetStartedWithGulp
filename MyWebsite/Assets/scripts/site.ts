/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/bootstrap/index.d.ts" />

class Site {
    public SiteName: string;

    constructor(sitename: string) {
        this.SiteName = sitename;
    }
}

$(document).ready(function () {
    var site = new Site("My Site");
    $('#dialogButton').click(function () {
        $('#myModal').modal();
    });
});