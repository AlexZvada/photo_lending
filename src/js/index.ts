class Fields {
  private templateElementStudio: HTMLTemplateElement;
  private templateElementLove: HTMLTemplateElement;
  private templateElementLocation: HTMLTemplateElement;
  private hostElement: HTMLDivElement;
  private element: HTMLElement;
  private buttonsList: NodeList;
  private activeButton: HTMLButtonElement;
  constructor() {
    this.templateElementStudio = document.getElementById(
      "serveises-studio"
    )! as HTMLTemplateElement;
    this.templateElementLove = document.getElementById(
      "serveises-love"
    )! as HTMLTemplateElement;
    this.templateElementLocation = document.getElementById(
      "servises-location"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("servises")! as HTMLDivElement;
    this.buttonsList = document.querySelectorAll(
      ".servises-button"
    )! as NodeList;
    this.activeButton = this.buttonsList[0] as HTMLButtonElement;
    const node = document.importNode(this.templateElementStudio.content, true);
    this.element = node.firstElementChild as HTMLElement;
    this.configure();
    this.atach();
  }
  private setElement(templateElement: HTMLTemplateElement) {
    const node = document.importNode(templateElement.content, true);
    this.element = node.firstElementChild as HTMLElement;
  }
  private atach() {
    this.addActiveStage(this.activeButton);
    this.render();
  }
  private render() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
    
  }
  private addActiveStage(element: HTMLElement) {
    element.classList.add("active");
  }
  private removeActivestage(element: HTMLElement) {
    element.classList.remove("active");
  }
  private changeHandler(e: Event) {
    const { target } = e;
    switch (target) {
      case this.buttonsList[0]:
        this.removeActivestage(this.activeButton);
        this.activeButton = this.buttonsList[0] as HTMLButtonElement;
        this.addActiveStage(this.activeButton);
        this.hostElement.removeChild(this.element);
        this.setElement(this.templateElementStudio);
        this.render();
        break;
      case this.buttonsList[1]:
        this.removeActivestage(this.activeButton);
        this.activeButton = this.buttonsList[1] as HTMLButtonElement;
        this.addActiveStage(this.activeButton);
        this.hostElement.removeChild(this.element);
        this.setElement(this.templateElementLove);
        this.render();
        break;
      case this.buttonsList[2]:
        this.removeActivestage(this.activeButton);
        this.activeButton = this.buttonsList[2] as HTMLButtonElement;
        this.addActiveStage(this.activeButton);
        this.hostElement.removeChild(this.element);
        this.setElement(this.templateElementLocation);
        this.render();
        break;
      default:
        break;
    }
  }
  private configure() {
    document.addEventListener("click", this.changeHandler.bind(this));
  }
}

class Modal{
  private modalElement: HTMLDivElement;
  private openButton: HTMLButtonElement;
  private closeButton: HTMLButtonElement;

  constructor(){
    this.modalElement = document.getElementById("modal")! as HTMLDivElement;
    this.openButton = document.getElementById('modal-btn--open')! as HTMLButtonElement;
    this.closeButton = document.getElementById('modal-btn--close')! as HTMLButtonElement;
    this.configure()
  }

  private changeHandler(e:Event){
    const close = this.closeButton.closest('span')!
    if (e.target === this.openButton) {
      this.open()
    }
    if ((e.target as HTMLElement).closest('span') === this.closeButton ||e.target === this.modalElement) {
      this.close()
    }

  }
  private configure(){
    document.addEventListener('click', this.changeHandler.bind(this))
  }
  private open(){
    this.modalElement.classList.add('open');
  }
  private close(){
    this.modalElement.classList.remove('open')
  }
}

const f = new Fields();
const modal = new Modal();
