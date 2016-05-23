module.exports = function () {
    var wwwroot = "./wwwroot/";
    var nodeSource = "./node_modules";
    var stylesSource = "./assets/styles";
    var imagesSource = "./assets/images";
    var scriptsSource = "./assets/scripts";
    
    var config = {

        //Styles
        styles: [
             stylesSource + '/site.scss'
            
        ],
        stylesTarget: wwwroot + "/css/",
        stylesWatch: "./assets/scss/**/*.scss",

        //images
        images: [
            imagesSource + '/**/*.*'
        ],
        imagesTarget: wwwroot + "/images",

        //application javascript scripts
        scripts: [
            scriptsSource + '/site.js',
            scriptsSource + '/siteconfiguration.js'
        ],
        scriptsMaps: [
            scriptsSource + '/**/*.map'
        ],
        scriptsTarget: wwwroot + "/js",
        scriptsWatch: scriptsSource + '/**/*.js',


        //external javascript libraries
        libs: {
            jquery: [nodeSource + '/jquery/dist/**/*.*'],
            jqueryTarget: wwwroot + '/libs/jquery/',

            jquery_validation: [nodeSource + '/jquery-validation/dist/**/*.*', "!" + nodeSource + '/jquery-validation/dist/localization/**/*.*'],
            jquery_validationTarget: wwwroot + '/libs/jquery-validation/',

            jquery_validation_unobtrusive: [nodeSource + '/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js'],
            jquery_validation_unobtrusiveTarget: wwwroot + '/libs/jquery-validation-unobtrusive/',

            bootstrap: [nodeSource + '/bootstrap/dist/**/*.*'],
            bootstrapTarget: wwwroot + '/libs/bootstrap/'
        },

        libsTarget: wwwroot + "/libs/",


        //sass
        sassOptionsCompressed: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        },

    };

    return config;
};