import { track,wire,LightningElement,api} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class Fchild extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @api tabledata;
    @api columns;
    @track keyword;
    @track filteredArray=[];
    // @wire(CurrentPageReference) pageRef;

    
    handleName(event){
        this.keyword=event.target.value;
        console.log(this.keyword);
    }

    handleClick(){
        console.log("is it in");
        this.filteredArray=this.tabledata.filter((item)=>item.name==this.keyword);
        console.log(this.filteredArray);
        if(this.filteredArray.length!=0){
            fireEvent(this.pageRef,'filteredItem',this.filteredArray);
            console.log('event fired');
            this.filteredArray=[];
        }else{
            console.log("No such results");
        }
        
    }
}