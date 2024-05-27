//Topic: Create a single-page web application
 // target: meet all the requirements.


// set the look of our page
let colorPage = document.getElementsByTagName("body");
console.log(colorPage);
colorPage[0].style.backgroundColor = "gold";

// working on  the box that contains our login page
 let boxContainer = document.getElementById("container");
 console.log(boxContainer)

//set the attribute of the div we have created
boxContainer.classList.add( "container")
boxContainer.style.backgroundColor = "pink"

//add my eventlistener to my submit button
const btnEl = document.querySelector("button");
btnEl.addEventListener("click",myButton);

//my helper function here is.
function myButton(){
    const bElement = document.querySelector("button");
    if(bElement.innerHTML === "submit"){
        bElement.innerHTML = "submitted"
    } else{
        bElement.innerHTML = "submit"
    }
}

//give our button a color
btnEl.style.backgroundColor = "gold";


//now let add some fun interactions.
let allElement = document.getElementById("#container");
console.log(allElement)
document.addEventListener("mouseover", (event)=>{
    event.target.style.color = "green";
    //Now that we have setted our effect let add a caple more interactions
    //using some if statement.
    for(let m = 1; m < allElement.length; m++){
        if(event.target.style.color !== "green"){
            window.alert(`this is not an input element`);
            break
        }else {
            window.alert(`this is an input element`);
            break
        }
    }



    //setting our runtime for the effect on the elements.
    setTimeout(() =>{
        event.target.style.color = "";
    },500);
},
false,
);

