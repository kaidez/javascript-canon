/* ================================================================= */
/* | CONTROLLER FOR A SINGLE RESOURCE PAGE                           */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // "require" the single page view module
    SinglePageView = require( "./singlePageView" ),

    // reference to Heroku-powered model data in the view
    singleResourceData = SinglePageView.singleResourceData,

    // reference to the view object in the single page view module
    singlePageView = SinglePageView.SinglePageResourceView,

    // Direct reference to the articles array in the view object
    aboutTextArray = singlePageView.aboutTextArray,

    // create a controller object for a single page view
    SingleResourcePageController = {},

    // reference the single resource links
    bookLink = $(".js-modal");


/*
 * "openModal()" method renders the model data that's
 * passed to view object's "openModal()" method. The "getData"
 * parameter represents the model data.
 */
SingleResourcePageController.openModal = function() {
  return singlePageView.openModal();
};

SingleResourcePageController.closeModal = function() {
  return singlePageView.closeModal();
};

SingleResourcePageController.buildAboutTextArray = function() {
  return singlePageView.buildAboutTextArray();
};

/* Run the "openModal()" method & pass the model data as its
 * parameter, which is represented by the "singleResourceData"
 * variable defined above.
 */
$(bookLink).on("click", function(event) {

    /* Get the numerical value of the clicked-on link's
     * "data-resource-number" attribute and subtract 1 from it. This
     * is done so the number matches the value of the article array
     * index.
     */
    var resourceNumber = $(event.target).data("resourceNumber") - 1;

    // Build the article array
    SingleResourcePageController.buildAboutTextArray();

    // Open the modal
    SingleResourcePageController.openModal();

    /* Look at the about text array and grab the link's respective
     * text into the modal. Subtracting 1 from "resourceNumber"
     * properly matches the array's 0-based index
     */
    document.querySelector(".js-modal-content").innerHTML = aboutTextArray[resourceNumber];

});

// When the user clicks on the modal's close button, close it
$(".page-modal-element__button").click(function(){
    SingleResourcePageController.closeModal();
});