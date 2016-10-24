module.exports = function( grunt ) {

  // Project config
  grunt.initConfig({

    //uncss task
    uncss: {
      dist: {
        files: {
          'build/css/style.css': ['build/index.html']
        },
        options: {
          ignore: [
            "article",
            ".book-image",
            ".book-link",
            ".book-link:hover",
            ".book-link:visited",
            ".col-md-4",
            ".fixed-nav",
            ".h1-animation",
            ".h1-animation-back",
            ".move-down",
            ".move-up",
            ".nav__button",
            ".page-modal-element__button",
            ".resource-header",
            ".single-resource",
            ".single-resource__button",
            ".page-modal__slide",
            ".scale-logo",
            ".header-class"
          ]
        },
      }
    }
  });

  grunt.loadNpmTasks( "grunt-uncss" );

  // running "grunt" in "vanilla-js-mvc" runs the uncss task
  grunt.registerTask( "default", ["uncss"] );

};