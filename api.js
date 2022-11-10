const container = document.querySelector(".api_callbox");
const button = document.querySelector("#button");
let output = '';
let maxNum = 100;
button.addEventListener("click", ()=>{
    let response = new XMLHttpRequest();
    response.open("GET", "https://jsonplaceholder.typicode.com/todos/");

    response.onreadystatechange = function(){
          if(this.status === 200 && this.readyState === 4){
            let users =  JSON.parse(this.responseText);
            users.forEach((user, index)=>{
                let newIndex = index + 1;
                  if(newIndex <=maxNum && user.completed == true){
                    output += `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.title}</li>
                    <li>${user.completed}</li>
                    
                </ul>
                     `;
                  }   
            })
               

          }

          container.innerHTML +=  output;
    }

    response.send();
})
