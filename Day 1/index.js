import { employeeInfo } from "./data.js";

var displayArea= document.getElementsByClassName('cardsDisplay')[0];
const cdate=new Date();
var edata=[];

const getData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(employeeInfo)
    },1500)
});
getData.then((data)=>{
    edata=data;
    var min_age=60;
    var max_salary=0;
    edata.map((item)=>{
        item.age=Math.floor((cdate - new Date(item.dob))/31557600000);
        if(item.age<min_age){
            min_age=item.age
        }
        if(item.salary>max_salary){
            max_salary=item.salary
        }
        if(item.role=="Level 1"){
            item.bonus=10;
        }
        else if(item.role=="Level 2"){
            item.bonus=15;
        }
        else{
            item.bonus=20;
        }

    })
    edata.find((item)=>item.age==min_age).youngest=true;
    edata.find((item)=>item.salary==max_salary).richest=true;
    console.log(edata);
}).then(()=>{
    edata.map((item)=>{
        var cardData='';
        var card=document.createElement('div')
        card.className='card'
        var expCard=document.createElement('p');
        expCard.className='expCard';
        card.addEventListener('click',function(){
            
            var fullData=`<p>Date of Birth: ${item.dob}</p><p>Job Role:${item.role}</p><p>Employee Salary:${item.salary}</p><p>Expected bonus is <storng>${(item.salary)*(item.bonus)/100}</storng></p>`;
            if(item.youngest==true){
                console.log("young");
                expCard.innerHTML=`${item.fname} is the youngest employee.`;

            }
            if(item.richest==true){
                expCard.innerHTML=`${item.fname} is the highest paid employee.`;
                
            }
            
            card.innerHTML=cardData+fullData;
            card.appendChild(expCard);
        });
        console.log(item);
        cardData=`<h3>Company Name: ${item.companyName}<span id="dot">.</span></h3><h3>Employee Name: ${item.fname} ${item.lname}</h3><span>Employee Id: ${item.id}</span>`
        
        card.className='card';
        card.innerHTML=cardData;
        displayArea.appendChild(card);
    })
})