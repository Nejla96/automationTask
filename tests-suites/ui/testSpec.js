const UITasks = require('../../tasks/uiTasks.js');
const States = require('../../states/appStates.js');
const data = require("../../data/data.js");
const uiTasks = new UITasks(),
    appStates = new States();



describe('Automation Task', function () {
    let ehsApplication = clone(data, {
            invalidProductId: "STDD9",
            productId: "STD 2"
        }
    );

    it('Story 1: As an administrator of the EHS system I want to be able to see all the available products so that I can make faster decisions.', function () {

        //Start app
        appStates.startEHSApplication();

        // Click on List all items button to see all available products
        uiTasks.listAllItemAndVerifyVisibily();

        //Terminates app
        appStates.exitEHSApplication();

    });

    it('Story 2: As an administrator of the EHS system I want to se detailed information about a specific product so that I know that the system is up to date.', function () {

        //Start app
        appStates.startEHSApplication();

        // Click on List all items button to see all available products
        uiTasks.listAllItemAndVerifyVisibily();

        // Open specif item, check visibility
        uiTasks.openSpecificItem(item1);

        //Check readability of elements
        uiTasks.checkingValuesFromTheFields(data.ehsItem);

        //Terminates app
        appStates.exitEHSApplication();

    })

    it('Story 3: As an administrator of the EHS system I want to be able to search for a specific product so that I can get faster access to its product details.', function () {

        //Start app
        appStates.startEHSApplication();

        //Enter product id and check information about that product
        uiTasks.enterProductId(ehsApplication.productId);

        uiTasks.checkingValuesFromTheFields(data.ehsItem2);

        //Terminates app
        appStates.exitEHSApplication();

    })

    it('Story 4 : As Administrator I try to enter a product Id that does not exist.', function () {

        //Start app
        appStates.startEHSApplication();

        //Enter product id and check information about that product
        uiTasks.enterProductId(ehsApplication.invalidProductId);

        //Terminates app
        appStates.exitEHSApplication();

    })


});