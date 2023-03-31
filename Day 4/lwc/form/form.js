import { LightningElement } from 'lwc';

export default class Form extends LightningElement {
    _result;
 
    handleClick(){
        let dataArray=this.template.querySelectorAll("lightning-input")
        console.log(dataArray.value)
        let result=""
        dataArray.forEach((item,index)=>{
            if(item.value.length!=0){
                result=`Form Completed`
            }
            else{
                result="Fill all the required fileds"
               
                
            }

        });
        this._result=result;

        

        }
        
    }





