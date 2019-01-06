

var mainPage = require('../pages/mainPage.js');


describe("Typing demo", function() {

  it("Otworz stronę WWW", function() {
     mainPage.openPage();

  });

  it("Typing demo", function() {
    mainPage.typeName();
  });

});
