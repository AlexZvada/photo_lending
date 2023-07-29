"use strict";
class Fields {
    constructor() {
        this.templateElementStudio = document.getElementById("serveises-studio");
        this.templateElementLove = document.getElementById("serveises-love");
        this.templateElementLocation = document.getElementById("servises-location");
        this.hostElement = document.getElementById("servises");
        this.buttonsList = document.querySelectorAll(".servises-button");
        this.activeButton = this.buttonsList[0];
        const node = document.importNode(this.templateElementStudio.content, true);
        this.element = node.firstElementChild;
        this.configure();
        this.atach();
    }
    setElement(templateElement) {
        const node = document.importNode(templateElement.content, true);
        this.element = node.firstElementChild;
    }
    atach() {
        this.addActiveStage(this.activeButton);
        this.render();
    }
    render() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    addActiveStage(element) {
        element.classList.add("active");
    }
    removeActivestage(element) {
        element.classList.remove("active");
    }
    changeHandler(e) {
        const { target } = e;
        switch (target) {
            case this.buttonsList[0]:
                this.removeActivestage(this.activeButton);
                this.activeButton = this.buttonsList[0];
                this.addActiveStage(this.activeButton);
                this.hostElement.removeChild(this.element);
                this.setElement(this.templateElementStudio);
                this.render();
                break;
            case this.buttonsList[1]:
                this.removeActivestage(this.activeButton);
                this.activeButton = this.buttonsList[1];
                this.addActiveStage(this.activeButton);
                this.hostElement.removeChild(this.element);
                this.setElement(this.templateElementLove);
                this.render();
                break;
            case this.buttonsList[2]:
                this.removeActivestage(this.activeButton);
                this.activeButton = this.buttonsList[2];
                this.addActiveStage(this.activeButton);
                this.hostElement.removeChild(this.element);
                this.setElement(this.templateElementLocation);
                this.render();
                break;
            default:
                break;
        }
    }
    configure() {
        document.addEventListener("click", this.changeHandler.bind(this));
    }
}
class Modal {
    constructor() {
        this.modalElement = document.getElementById("modal");
        this.openButton = document.getElementById('modal-btn--open');
        this.closeButton = document.getElementById('modal-btn--close');
        this.configure();
    }
    changeHandler(e) {
        const close = this.closeButton.closest('span');
        if (e.target === this.openButton) {
            this.open();
        }
        if (e.target.closest('span') === this.closeButton || e.target === this.modalElement) {
            this.close();
        }
    }
    configure() {
        document.addEventListener('click', this.changeHandler.bind(this));
    }
    open() {
        this.modalElement.classList.add('open');
    }
    close() {
        this.modalElement.classList.remove('open');
    }
}
const f = new Fields();
const modal = new Modal();
