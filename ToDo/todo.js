//input, button and heading variables
const nameInput = document.querySelector("input[name='todo-name']");
const nameBtn = document.querySelector(".name-btn");
const nameHeading = document.querySelector(".list-name");

//item-inputs, button and ul variables
const itemInput = document.querySelector("input[name='todo-item']");
const itemBtn = document.querySelector(".item-btn");
const itemUl = document.querySelector(".items");

//function to add name
function addName() {
  if(nameInput.value!='')
  {
    nameInput.value="";
    nameBtn.classList.add("disabled");
    nameInput.setAttribute("disabled", true);
    nameInput.setAttribute("placeholder", `${nameHeading.innerText}`);
    document.querySelector(".right-div .heading-div").style.borderBottom = "2px dashed rgba(255, 255, 255, .4)";
  }
}

//function to extract name and add to heading to card
function extractName(evt)
{
  console.log(evt)
  if(evt.key==="Enter"&&nameInput.value!='')
  {
    nameInput.value="";
    nameBtn.classList.add("disabled");
    nameInput.setAttribute("disabled", true);
    nameInput.setAttribute("placeholder", `${nameHeading.innerText}`);
    document.querySelector(".right-div .heading-div").style.borderBottom = "2px dashed rgba(255, 255, 255, .4)";
  } else {
    nameHeading.innerText = nameInput.value;
    nameHeading.innerText = (nameHeading.innerText).charAt(0).toUpperCase() + (nameHeading.innerText).slice(1);
  }
}

//key event listener added to input
nameInput.addEventListener("keyup", extractName);
nameBtn.addEventListener("click", addName);


function addItem() {
  if(itemInput.value!='')
  {
    let li = document.createElement("li");
    li.classList.add("item");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("check-box");
    li.innerHTML = `<input type ="checkbox">${itemInput.value}`;
    itemUl.appendChild(li);
    itemInput.value="";
    itemInput.setAttribute("placeholder", "Enter another item");
  }
}

//function to extract item from input and add to card
function extractItem(evt)
{
  if(evt.key==="Enter"&&itemInput.value!='')
  {
    let li = document.createElement("li");
    li.classList.add("item");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("checked-box");
    li.innerHTML = `${(itemInput.value).charAt(0).toUpperCase()+(itemInput.value).slice(1)}`;
    itemUl.appendChild(li);
    li.prepend(checkBox);
    checkBox.addEventListener("click", function(evt) {
      if(checkBox.checked)
      {
        li.classList.add("ticked-item");
      }
      else{
        li.classList.remove("ticked-item");
      }
    })
    itemInput.value="";
    itemInput.setAttribute("placeholder", "Enter another item");
  }
}

//key event listener added to items input
itemInput.addEventListener("keyup", extractItem);
itemBtn.addEventListener("click", addItem);
