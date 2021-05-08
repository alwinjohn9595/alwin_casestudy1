



function load (){
   console.log("Window Loading.......");
   fetch("https://jsonplaceholder.typicode.com/todos")
   .then((apidata) => {
     
      return apidata.json();

   }).then((actualdata) => {

      show(actualdata);

   }).catch( (error) => {
      console.log(`The Error: ${error}`);
   });
  
}


function show(user){

   
    let table = document.getElementById("table");

    for(let i = 0; i < user.length ;i++){
       const obj = user[i];
     


       let row = document.createElement("tr");
       
       let task = document.createElement("td");
       
       const checkbox = document.createElement("input");

         checkbox.setAttribute("type", "checkbox");
         checkbox.setAttribute("name", "check");
         checkbox.setAttribute("id", "check");

       if(obj.completed == true)
       {
          checkbox.checked = true;
          checkbox.disabled = true;       
       }
      
       
       task.innerHTML = obj.title;
       

       row.appendChild(checkbox);
       
       
       row.appendChild(task);
       

      //  data to table
   
       table.appendChild(row);
       
      
    }
     
      new Promise (function(resolve,reject){
      let counter = 0;   
      var checkbox = document.querySelectorAll("input[type=checkbox]");
      
      $(document).on("change", "input[name='check']", function () {
         console.log(this.checked);
           
         if ( this.checked) {
            
            
            counter++;
            
         }else
         {
            counter--;
            
         }
         
         if(counter==5)
         {
            resolve(alert("you have completed 5 tasks"));
         
         }
         
            

     });
   
      });
   
   }


   
   
   
   
   window.onload = load;

   function logout(){
      self.close(this.window);
      window.location.href = "index.html";

   }
   
     

              
         
         
   



      

      






