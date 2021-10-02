const ehsHomePage = require('../page-objects/EHSHome.js');
const ehsAllItemsPage = require('../page-objects/EHSAllItems.js');
const ehsItemPage = require('../page-objects/EHSItem.js');


class Task extends EHSFramework {

    listAllItemAndVerifyVisibily() {
        ehsHomePage.visibilityOfElements("listAllItems");
        ehsHomePage.clickOnListAllItems();
        ehsAllItemsPage.checkEHSAllItemsTitle();
        return this;
    }

    openSpecificItem(element) {
        if (ehsAllItemsPage.visibilityOfElements(element)) {
            ehsAllItemsPage.clickOnSpecificProduct(element);
            return true;
        }
        else {
            return false;
        }

    }
    checkingValuesFromTheFields(data) {
        let item = ehsItemPage.readValuesFromFields();
        if (item == data) {
            console.log("Successfully checked");
            return true;

        } else {
            return false;
        }
    }

    enterProductId(productId) {
        ehsHomePage.enterProductIdInInputField(productId);
        return this;
    }

}

module.exports = Task;