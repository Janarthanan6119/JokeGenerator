const button = document.getElementById("btn");
const joke = document.getElementById("joke");
const punch = document.getElementById("punchline")

function convo(response){
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then(function(response){
    punch.textContent="";
    button.textContent="Next";
    joke.textContent=response.data.setup;
    setTimeout(function(){
    punch.textContent=response.data.punchline
},3000)
    })
    .catch(function(error){
        console.log(error);
    })
}