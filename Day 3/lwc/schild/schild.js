import { LightningElement,wire,track } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Schild extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track message;
    connectedCallback(){
        registerListener('filteredItem',this.handleData,this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handleData(incomingData){
        console.log(incomingData);
        this.message=incomingData;
        console.log('data from right' ,this.message);
    }
}