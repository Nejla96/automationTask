import { IButton } from "./IButton";
import { IField } from "./IField";

export interface IExecutionTool {
    
    StartApplication() : boolean;

    WaitForApplicationIdle() : void;

    ExitApplication() : boolean;

    GetAllButtons() : Map<String, IButton>;

    GetAllFields() : Map<String, IField>;
}
