const { default: EHSFramework } = require("../BaseComponents/EHSFramework");

class States  {

    executionTool; 

    constructor() {
        this.executionTool = new EHSFramework();
    }

    startEHSApplication() {
        if (this.executionTool.StartApplication()) {
            console.log(`Application has started and ready for user input.`);
            WaitForApplicationIdle();
            return true;
        } else {
            console.log(`Application has not started and is not ready for user input..`);
            return false;
        }


    }

    exitEHSApplication() {
        if (this.executionTool.ExitApplication()) {
            console.log(`Exit the application.`);
            return true;
        } else {
            console.log(`Exiting application failed.`);
            return false;
        }

    }
}

module.exports = States;