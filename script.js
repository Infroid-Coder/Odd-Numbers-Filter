function findOdds(){
  let nums = "13543278764347789642"
  let op = document.getElementById("demo")
  
  for (var i = 0; i < nums.length; i++) {
    if(Number(nums.charAt(i)) % 2 != 0){
      op.innerHTML += nums.charAt(i) + ","
    }
  }
}
