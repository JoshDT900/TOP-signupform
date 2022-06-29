let createPass = document.querySelector("#password")
let confirmPass = document.querySelector("#confirm_password")
let submitBtn = document.querySelector(".submit_btn")

let checkIfSame = () => {
  console.log("Works?");
  if (createPass.value != confirmPass.value) {
  return alert("WRONG@@!!")
}
}

submitBtn.addEventListener('click', checkIfSame)

