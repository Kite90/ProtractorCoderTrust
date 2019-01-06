var mainPage = function() {

   this.openPage = function() {
     browser.get("https://angularjs.org/");
     browser.driver.manage().window().setSize(1440, 900);
   }

   this.typeName = function() {
     var nameInput = element(by.model("yourName"));
     var nameValue = "Imie";
     var nameOutput = element(by.xpath("//h1[@class='ng-binding']"));

     nameInput.sendKeys(nameValue);
     expect(nameOutput.getText()).toContain(nameValue);

   }

   this.openNewPage = function() {
     var newLink = element(by.linkText("angular.io"));
      newLink.click();

   }


}

module.exports = new mainPage();
