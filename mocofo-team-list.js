(function(global, factory) {
  if(typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    global.mocofoteamlist = factory();
  }
}(this, function() {

  // This references the shared central list, not the local copy in this repo
  var _srcList = 'http://mozilla.github.io/team-list/teams.txt';

  function warn(msg) {
    console.warn("[mocofoteamlist] " + msg);
  }

  // checks
  if (typeof jQuery == 'undefined') {
    warn("jQuery has not been loaded");
  }

  /**
   * Use the central team list to populate a placeholded select element
   * @param  {String} selectID e.g. #teamlist
   */
  function populateSelect(selectID) {
    var jqxhr = $.get( _srcList, function() {
      alert( "success" );
    })
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "finished" );
    });

    // load srclist asynchronously
    // parse the list
    // on callback populate list
    console.log("ran populateSelect()");
    return;
  }

  return {
    populateSelect: populateSelect
  };

}));
