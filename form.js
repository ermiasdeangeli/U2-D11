const userInput = document.getElementById("inputUser")
const save = document.getElementsByClassName("btn-primary")[0]
const remove = document.getElementsByClassName("btn-secondary")[0]

save.addEventListener("click", function(){
    const input = userInput.value
    localStorage.setItem("input-memory", input)
    alert ("saved")
})

remove.addEventListener("click", function(){
    userInput.value = ""
    localStorage.removeItem("input-memory")
})


