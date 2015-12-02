/* ================================================================= */
/* | CONTROLLER FOR THE FRONT PAGE                                   */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" the view code so the controller can access it
    HomePageView = require( "./firstPageView" ),

    // reference to Firebase model data in the view
    modelData = HomePageView.resourcesData,

    // reference to the view object in the view
    homepageView = HomePageView.SingleResourceView,

    // create a controller object for the homepage view
    SingleResourceController = {};

/* 
 * "displayHomePage()" method renders the model data that's
 * passed to view object's "render()" method. The "getData" parameter
 * represents the model data.
 */
SingleResourceController.displayHomePage = function( getData ) {
  return homepageView.render( getData );
};

/*
 * Run the "displayHomePage()" method & pass the Firebase model data,
 * which is represented by the "modelData" variable defined above.
 */
SingleResourceController.displayHomePage( modelData );