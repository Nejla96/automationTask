var data = require("../data/data.js");
const { default: Button } = require("../BaseComponents/Button.js");

class EHSAllItems {

    // GETTERS

    get ehrAllItemsTittle() {
        return new Button(element(by.xpath('/html/body/table/tbody/tr[1]/th')))
    }
    get item1() {
        return new Button(element(by.css('OpenItem1Button')))
    }
    get item2() {
        return new Button(element(by.css('OpenItem2Button')))
    }
    get item3() {
        return new Button(element(by.css('OpenItem3Button')))
    }
    get item4() {
        return new Button(element(by.css('OpenItem4Button')))
    }
    get item5() {
        return new Button(element(by.css('OpenItem5Button')))
    }

    get item6() {
        return new Button(element(by.css('OpenItem6Button')))
    }

    get item7() {
        return new Button(element(by.css('OpenItem7Button')))
    }

    get item8() {
        return new Button(element(by.css('OpenItem8Button')))
    }

    get item9() {
        return new Button(element(by.css('OpenItem9Button')))

    }


    // ACTIONS

    checkEHSAllItemsTitle() {
        if (ehrAllItemsTittle.Exists(100)) {
            console.log(`Checked the title "EHS - All Items"...`);
            return true;
        }
        else
            console.log(`"EHS - All Items" title is not checked..`);
        return false;

    }


    clickOnSpecificProduct() {
        switch (element) {
            case item1:
                if (this.item1.Click())
                    return true;

            case item2:
                if (this.item1.Click())
                    return true;

            case item3:
                if (this.item3.Click())
                    return true;

            case item4:
                if (this.item4.Click())
                    return true;

            case item5:
                if (this.item5.Click())
                    return true;

            case item6:
                if (this.item6.Click())
                    return true;
            case item7:
                if (this.item7.Click())
                    return true;
            case item8:
                if (this.item8.Click())
                    return true;
            case item9:
                if (this.item9.Click())
                    return true;

            default:
                console.log("Item not clickable..")
        }
        return false;
    }

    visibilityOfElements(element) {
        switch (element) {
            case item1:
                if (this.item1.Exists(100))
                    return true;

            case item2:
                if (this.item1.Exists(100))
                    return true;

            case item3:
                if (this.item3.Exists(100))
                    return true;

            case item4:
                if (this.item4.Exists(100))
                    return true;

            case item5:
                if (this.item5.Exists(100))
                    return true;

            case item6:
                if (this.item6.Exists(100))
                    return true;
            case item7:
                if (this.item7.Exists(100))
                    return true;
            case item8:
                if (this.item8.Exists(100))
                    return true;
            case item9:
                if (this.item9.Exists(100))
                    return true;

            default:
                console.log("Item not visible...")
        }
        return false;
    }

}
module.exports = new EHSAllItems();