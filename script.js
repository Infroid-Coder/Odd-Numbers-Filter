function findOdds(){
    let nums = document.getElementById("numbers").value
    let op = document.getElementById("list")

    for (let i = 0; i < nums.length; i++) {
        if(isNaN(nums.charAt(i)) === false && Number(nums.charAt(i)) % 2 != 0){
            op.innerHTML += "<li id='listing'>" + nums.charAt(i) + "</li>"
        }
    }
}
function clearList(){
    let op = document.getElementById("list");

    op.innerHTML = "";
}