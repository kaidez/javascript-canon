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
            ".nav--visible",
            ".nav--notVisible",
            ".h1-moveUp",
            ".h1-moveDown",
            ".header-class",
            ".logo__logoMove",
            ".move-down",
            ".move-up",
            ".page-modal-element__button",
            ".page-modal__slide",
            ".resource-header",
            ".scale-out",
            ".scale-up",
            ".single-resource",
            ".single-resource__author",
            ".single-resource__book-image",
            ".single-resource__button",
            ".subtitle-fadeOut",
            ".subtitle-fadeIn"
          ]
        },
      }
    }
  });

  grunt.loadNpmTasks( "grunt-uncss" );

  // running "grunt" in "vanilla-js-mvc" runs the uncss task
  grunt.registerTask( "default", ["uncss"] );

};