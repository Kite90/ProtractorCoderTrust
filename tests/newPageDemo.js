var mainPage = require('../pages/mainPage.js');
var newPage = require('../pages/newPage.js');
var fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

var i = 0;

describe("Wejście na stronę Angulara, przejście na nowszą i sprawdzenie nawigacji", function() {

  afterEach(function() {
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'exception' + i + '.png');
  });
  i++;
  });

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
