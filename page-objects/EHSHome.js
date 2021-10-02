const { default: Button } = require("../BaseComponents/Button.js");



class EHSHome extends EHSFramework {
    constructor() {
        super();
    }
    // GETTERS

    get find() {
        return new Button(element(by.css('#FindItemButton')))
    }
    get listAllItems() {
        return new Button(element(by.css('#ListAllItemsButton')))
    }
    get productIdInputField() {
        return new Button(element(by.css('#ProductIdField')))

    }

    // ACTIONS

    clickOnFind() {
        console.log("Clicking on Find..");
        this.find.Click();
        return this;
    }

    clickOnListAllItems() {
        console.log("Clicking on List all items..");
        this.listAllItems.Click();
        return this;
    }

    enterProductIdInInputField(productId) {
        if (this.productIdInputField.Exists(100)) {
            this.productIdInputField.Click();
            this.productIdInputField.Write(productId);
            this.clickOnFind();
            return true;
        } else {
            console.log("The product id field is not displayed and the entry failed.");
            return false;

        }

    }
    readabilityOfElements(element){
        switch (element) {
            case "find":
                if (this.find.Read())
                return true;

            case "listAllItems":
                    if (this.listAllItems.Read())
                    return true;

             case "productIdInputField":
                        if (this.productIdInputField.Read())
                        return true;
        
            default: 
            console.log("Element on the EHS Home Page cannot be read..")
        }
        return false;
    }



    visibilityOfElements(element){
        switch (element) {
            case "find":
                if (this.find.Exists(100))
                return true;

            case "listAllItems":
                    if (this.listAllItems.Exists(100))
                    return true;

             case "productIdInputField":
                        if (this.productIdInputField.Exists(100))
                        return true;
        
            default: 
            console.log("The element on the EHS Home is not displayed.")
        }
        return false;
    }


}
module.exports = new EHSHome();