function checks(){
    let n=document.getElementById("name").value;
    let p=document.getElementById("pass").value.trim();
    let pat = /^[a-zA-Z]{3,10}$/;
    let e=document.getElementById("mail").value.trim();
    let epattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let c=document.getElementById("phone").value.trim();
    let cPattern = /^[6-9]\d{9}$/;
    let genders = document.getElementsByName('gender');
    let isSelected = false;
    
    if(!n.match(pat)){
        window.alert("Invalid Name");
        return false;
    }

    if(p.length<6){
        window.alert("Password must be atleast 6 digits");
        return false;
    }

    if(!e.match(epattern)){
         window.alert("Invalid email");
        return false;
    }
    if(!c.match(cpattern)){
         window.alert("Invalid Contact");
        return false;
    }
    if(!g.match(gpattern)){
         window.alert("Invalid Gender");
        return false;
    }
     
    for (let gender of genders) {
    if (gender.checked) {
      isSelected = true;
      break;
    }
  }

  if (!isSelected) {
    alert("Please select a gender");
    return false; 
  }
  
  return true; 

};