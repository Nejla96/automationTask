const data = require("../data/data.js");
const { default: Button } = require("../BaseComponents/Button.js");

class EHSItem extends EHSFramework {
    constructor() {
        super();
    }

    // GETTERS
    get productIdTitle() {
        return new Button(element(by.css('#ProductId')))
    }
    get nameField() {
        return new Button(element(by.css('#NameField')))
    }
    get materialField() {
        return new Button(element(by.css('#MaterialField')))
    }
    get manufacturerField() {
        return new Button(element(by.css('#ManufacturerField')))
    }
    get retailPrice() {
        return new Button(element(by.css('#RetailPriceField')))
    }

    // ACTIONS

    checkEhsItemTitle() {
        if (this.productIdTitle.Exists(100)) {
            console.log("Checked title")
            this.productIdTitle().Read()
            return true;
        }
        else {
            console.log("Tite not checked");
            return false;
        }
    }



    readValuesFromFields() {
        if (this.productIdTitle.Exists(100)) {
            let ehsItem = {
                productId: this.productIdTitle.Read(),
                name: this.nameField.Read(),
                material: this.materialField.Read(),
                manufacturer: this.manufacturerField.Read(),
                retailPrice: this.retailPrice.Read()

            }; return ehsItem;
        }
        else {
            console.log("Failed checking values from fields.")
            return;
        }
    }


    
    }

module.exports = new EHSItem();