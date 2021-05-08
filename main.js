let UserName = document.getElementById("Username");
let PwdValid = document.getElementById("password");
 let FormSubmit = document.getElementById("form");




function follow () {
    

        window.location.href = "todolist.html";
        console.log("hai hello")

}

function check(callback){
                
            if(UserName.value == "Admin" && PwdValid.value == "12" ) {
                callback();
            }
            else
            {
                alert("Incorrect Credentials");
            }
            
    
}

FormSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();
    check(follow);
})

    


