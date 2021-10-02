import { IButton } from "../BaseComponents/interface/IButton";
import { IElement } from "../BaseComponents/interface/IElement";
import { IField } from "../BaseComponents/interface/IField";

export default class Button implements IButton, IField, IElement{

    element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    Click() {
        return true;
    }

    Write(text) {
        return true;
    }

    Read() {
        return "";
    }

    Exists(timeout) {
        return true;
    }

}