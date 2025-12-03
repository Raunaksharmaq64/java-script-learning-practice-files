let todoItems=[];
displayItems();

function add(){
    let inputElement=document.querySelector('#input-data');
     let tododate=document.querySelector('#date')



    let todoVal=inputElement.value;
    let dateVal=tododate.value;

    console.log(todoVal)

    if (todoVal === "" || dateVal === "") {
    document.getElementById("addedNotification").innerHTML = "Please enter task and date!";
    
    setTimeout(() => {
        document.getElementById("addedNotification").innerHTML = "";
    }, 1500);

    return;
}


    todoItems.push({items:todoVal,dueDate:dateVal} );
    inputElement.value="";
    tododate.value="";
    displayItems();


    let msg = document.getElementById("addedNotification").innerHTML='YOUR TASK ADDED SUCCESSFULLY';

    
    setTimeout(() => {
         document.getElementById("addedNotification").innerHTML=' ';
    }, 1500); 
}


    function displayItems(){
           let cobtainerElements=document.querySelector('.todo-container');

           let newHtml='';
            
           
           for(let i=0; i < todoItems.length; i++){
            let {items,dueDate}=todoItems[i];



            newHtml+= `
            
            
            <div>
            
            <span class="todo-items-paragraph"> ${items} </span>
            <span class="todo-items-paragraph"> ${dueDate} </span>


            <button class="deletes" onclick="todoItems.splice(${i},1); displayItems();"> delete </button>
            </div>
            `;

           }
           cobtainerElements.innerHTML=newHtml;
    }

    
    

