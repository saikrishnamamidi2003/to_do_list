let taske=document.getElementById("taskInfo")
let tasklist=document.getElementById("taskList")
document.getElementById("add").onclick=function(){
    
    if(taske.value.length == 0){
        alert("the input is empty..!");
    }
    else{
        tasklist.innerHTML+=`
        <div class="task">
            <span id="work"> ${taske.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`

        let alltasks=document.querySelectorAll(`.del`)
        for(let i=0;i<alltasks.length;i++){
            alltasks[i].onclick=function(){
                this.parentNode.remove()
                
            }
        }
        taske.value=""

        

        }
    }


