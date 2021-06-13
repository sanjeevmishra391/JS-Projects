
function getData() {
  let firstname = (document.querySelector('.username[name="first-name"]').value).trim();
  let lastname = (document.querySelector('.username[name="last-name"]').value).trim();
  let email = (document.querySelector('.detail[name="email"]').value).trim();
  let password = (document.querySelector('.detail[name="password"]').value).trim();
  let conPassword = (document.querySelector('.detail[name="confirm-password"]').value).trim();

  return {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    conPassword: conPassword
  };

}

function setData() {
  document.querySelector('.username[name="first-name"]').value="";
  document.querySelector('.username[name="last-name"]').value="";
  document.querySelector('.detail[name="email"]').value="";
  document.querySelector('.detail[name="password"]').value="";
  document.querySelector('.detail[name="confirm-password"]').value="";
  document.querySelector(".check").checked = false;
  document.querySelector(".registerbtn").classList.toggle("disabled");
}

//toggle button depending upon checkbox is clicked or not
function toggleButton() {
  document.querySelector(".registerbtn").classList.toggle("disabled");
}
document.querySelector(".check").onclick = toggleButton;

//register button action
document.querySelector(".registerbtn").addEventListener("click", function() {
  if(document.querySelector(".check").checked) {
    const person = getData();
    console.log(person);
    let validate = true;
    if(person.firstname=='')
    {
        document.querySelector(".warning.name").style.display="block";
        validate = false;
    }
    if(!person.email.includes('@'))
    {
      document.querySelector(".warning.mail").style.display="block";
      validate = false;
    }
    if(person.password.length<8)
    {
      document.querySelector(".warning.pass").style.display="block";
      validate = false;
    }
    if(person.conPassword!==person.password)
    {
      document.querySelector(".warning.conpass").style.display="block";
      validate = false;
    }

    if(validate)
    {
      alert("You are registered.");
      setData();
    }
  }
  else {
    alert("Please check the box");
  }
})
