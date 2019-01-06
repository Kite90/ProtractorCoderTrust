var mainPage = require('../pages/mainPage.js');
var newPage = require('../pages/newPage.js');

describe("Wejście na stronę Angulara, przejście na nowszą i sprawdzenie nawigacji", function() {

  it("Otworz starą stronę WWW", function() {
     mainPage.openPage();
  });

  it("Przejście do nowej strony WWW Angulara", function() {
    mainPage.openNewPage();
  });

  it("Sprawdzenie nawigacji na nowej stronie Angulara", function() {
    newPage.checkNavigation();
  });




});
