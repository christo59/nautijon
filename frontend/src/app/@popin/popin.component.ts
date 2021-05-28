import {Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener} from "@angular/core";

@Component({
    selector: 'popin',
    templateUrl: 'popin.component.html',
    styleUrls: ['popin.component.css']
})
/**
 * Composant qui gère le loader
 */
export class PopinComponent {
    @Input() size : string;
    @Input() bottom : string;
    @Input() zindex : boolean;
    @Input() sub_header : boolean;
    @Input() avoidCancelEE : boolean = false;
    @Output() cancel_EE : EventEmitter<any> = new EventEmitter();
    @Output() close_EE : EventEmitter<any> = new EventEmitter();
    @Output() enterKey_EE : EventEmitter<any> = new EventEmitter();
    @ViewChild('modal',{static: false}) modalRef: ElementRef;
    private isOpen : boolean;
    private isActive : boolean = false;

    static CONSTANTES = {
        FULL: 'full',
        ESCAPE: 'Escape',
        ENTER: 'Enter',
        TEXTAREA: 'TEXTAREA'
    };

    /**
     * Permets gérer les événements clavier produit sur la popin:
     * - Faire l'action principale de la popin avec la touche ENTRER du clavier
     * - Quitter la popin avec la touche ECHAP du clavier
     * @param event
     */
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if(event.key === PopinComponent.CONSTANTES.ENTER && this.checkIsOpen() && this.checkIsActive()) {
            if((<HTMLElement>event.target).nodeName !== PopinComponent.CONSTANTES.TEXTAREA) {
                this.enterKey_EE.emit();
            }
        }
        if(event.key === PopinComponent.CONSTANTES.ESCAPE && this.checkIsOpen() && this.checkIsActive()) {
            if((<HTMLElement>event.target).nodeName === PopinComponent.CONSTANTES.TEXTAREA) {
                (<HTMLElement>event.target).blur();
            } else {
                this.cancelPopin();
            }
        }
    }

    /** Permet d'ouvrir la modal */
    public displayModal(){
        $(this.modalRef.nativeElement).modal();
        this.setIsOpen(true);
        this.setIsActive(true);
    }

    /** Permet de fermer une modal */
    public hideModal(){
        $(this.modalRef.nativeElement).modal('hide');
        this.setIsOpen(false);
        this.setIsActive(false);
    }

    /**
     * communiquer que la popin est fermé
     */
    public closePopin() {
        if(!this.avoidCancelEE){
            $(this.modalRef.nativeElement).modal('hide');
            this.close_EE.emit();
            this.setIsOpen(false);
        }
        else{
            this.close_EE.emit();
        }
    }

    /**
     * communiquer que la popin est fermé
     */
    public cancelPopin() {
        $(this.modalRef.nativeElement).modal('hide');
        this.cancel_EE.emit();
        this.setIsOpen(false);
    }

    /**
     * verifie si la popin est ouverte
     * @returns {boolean}
     */
    public checkIsOpen() : boolean {
        return this.isOpen;
    }

    /**
     * verifie si la popin est active
     * @returns {boolean}
     */
    public checkIsActive() : boolean {
        return this.isActive;
    }

    public setIsOpen( isOpen : boolean) {
        this.isOpen = isOpen;
    }

    public setIsActive(isActive : boolean) {
        this.isActive = isActive;
    }

}
