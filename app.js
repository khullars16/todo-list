const btn = document.getElementById("btn");
let input, listItem, text, editInput, val, valText;
var count = 0;
btn.addEventListener("click", () => {
  val = "init_" + count;
  valText = "init-" + count;
  input = document.getElementById("input").value;
  listItem = document.getElementById("list");
  if(input == ""){
      alert("add some task");
  }
  else{
    text = `<li style='list-style: none;'>
    <div class='row'>
    <div class='col-md-12 textField ext'>
    <div id='${valText}'>
    ${input}
    </div>
    <div class='thisinit'>
    <button id='${val}' onclick='edit(this.id)' class='btn btn-sm btn-primary delButton'><i class="icofont-ui-edit"></i></button>
    <button id='${val}' onclick='deletion(this.id)' class='btn btn-sm btn-primary delButton'><i class="icofont-ui-delete"></i></button>
   </div> 
   </div>
  </div><hr>
   </li>`;
  
   listItem.insertAdjacentHTML("beforeend", text);
   count++;
   document.getElementById("input").value = null;
     }   
    });

    function deletion(element) {
      var x = document.getElementById(element);
      var y = x.parentElement.parentElement.parentElement.parentElement;
      var f = y.parentElement;
      var del = f.removeChild(y);
      console.log(f);
    }
        
    function edit(ele)
    {
        var editInput = prompt("Enter Task to edit");
        if(editInput == "" || editInput == null){
         
        }
        else{
        var testing = document.getElementById(ele);
        var parentEle = testing.parentElement.previousElementSibling;
        parentEle.innerHTML = editInput; 
        }
    }


