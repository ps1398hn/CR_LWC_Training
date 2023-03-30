import { api,LightningElement,track } from 'lwc';

export default class Child extends LightningElement {
    @api peopleData;


    connectedCallback(){
        console.log('This data is coming form parent',this.peopleData);
    }

    handleChange(){
        console.log('button clicked');
        const updatevent= new CustomEvent('updatevent',{
            detail:{
                value:20
            }
        });
        this.dispatchEvent(updatevent);
    }
}