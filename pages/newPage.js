var newPage = function() {

    this.checkNavigation = function() {
      element.all(by.css(".nav-link")).then(function(links) {
        expect(links.length).toBe(6);
        expect(links[2].getText()).toBe("DOCS");
        //links[2].click();
      });
    }


}

module.exports = new newPage();
