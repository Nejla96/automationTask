import { IExecutionTool } from "./interface/IExecutionTool"; 

export default class EHSFramework implements IExecutionTool {

    constructor() {

    }

    StartApplication() {
        return true;
    }

    WaitForApplicationIdle() {

    }

    ExitApplication() {
        return true;
    }

    GetAllButtons() {
        const a = new Map();
        return a;
    }

    GetAllFields() {
        const a = new Map();
        return a;
    }
}
