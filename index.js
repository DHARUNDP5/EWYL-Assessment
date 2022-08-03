const url = `https://randomuser.me/api/?results=10`;
let charInfo = "";
fetch(url).then((data) => {
    data.json().then((result) => {
        // console.log(result);
        
        localStorage.setItem("allInfo", JSON.stringify(result.results));
        let userInfo = localStorage.getItem("allInfo");
        let allInfo = JSON.parse(userInfo);
        allInfo.map(function (obj) {
            charInfo += `<div class="displaydetails">
            <div class="image">
            <img  class="picture" src=${obj.picture.large} alt="img">
            </div>
            <div>
            <div class=names>
            <h3 class="name">
            ${obj.name.title}
            </h3>
            <h3 class="name">
            ${obj.name.first}
            </h3>
            <h3 class="name">
            ${obj.name.last}
            </h3>
            </div>
            
            <p class="email">
             ${obj.email}
            </P>
             <p class="loaction">
             ${obj.location.street.number}
            </p>
            <p class="loaction">
             ${obj.location.street.name}
            </p>
            </div>
             </div>`
        })
        document.getElementById("display-container").innerHTML = charInfo;
    })
})
const searchcharname= () => {
    charInfo = "";
     let newdata =JSON.parse(localStorage.getItem("allInfo"));
     let val = document.querySelector('.box').value
     let data = newdata.filter((item) => item.name.first=== val);
     data.map(function (obj) {
        charInfo += `<div class="displaydetails">
            <div class="image">
            <img  class="picture" src=${obj.picture.large} alt="img">
            </div>
            <div>
            <div class=names>
            <h3 class="name">
            ${obj.name.title}
            </h3>
            <h3 class="name">
            ${obj.name.first}
            </h3>
            <h3 class="name">
            ${obj.name.last}
            </h3>
            </div>
            
            <p class="email">
             ${obj.email}
            </P>
             <p class="loaction">
             ${obj.location.street.number}
            </p>
            <p class="loaction">
             ${obj.location.street.name}
            </p>
            </div>
             </div>`
    })
    console.log(charInfo);
    document.getElementById("display-container").innerHTML = charInfo;
 }
  function gotonextPage(event) { 
    event.preventDefault(); 
    window.history.pushState({}, '', event.target.href); 
    constructPage(); 
} 
const routes = { 
    '/home':'./about.html' 
    
} 
function constructPage() { 
    let path = window.location.pathname; 
    // let templateName = "./about";
    // routes["/home"] 
    fetch("./about.html") 
    .then(function(htmlContent) { 
        htmlContent.text() 
        .then(function(content) { 
            document.querySelector('.page-container').innerHTML = content; 
        }); 
    }); 
}
function totalamount(){
    let expvalue=100000;
    let amount = document.getElementById("main1").value
    expvalue = expvalue - amount;
      
    charInfo = "";
    let newdata =JSON.parse(localStorage.getItem("allInfo"));
    let val = document.querySelector('.box').value
    let data = newdata.filter((item) => item.name.first=== val);
    data.map(function (obj) {
        charInfo += `<div class="displaydetails">
        <div class="image">
        <img  class="picture" src=${obj.picture.large} alt="img">
        </div>
        <div>
        <div class=names>
        <h3 class="name">
        ${obj.name.title}
        </h3>
        <h3 class="name">
        ${obj.name.first}
        </h3>
        <h3 class="name">
        ${obj.name.last}
        </h3>
        </div>
        <p class="email">
         ${obj.email}
        </P>
         <p class="loaction">
         ${obj.location.street.number}
        </p>
        <p class="loaction">
         ${obj.location.street.name}
        </p>
        <p class="exp">
        Total : ${expvalue}
       </p>
       <p class="exp">
        Expense: ${amount}
       </p>
        </div>
        </div>`
   })
   console.log(charInfo);
   document.getElementById("display-container").innerHTML = charInfo;


}
