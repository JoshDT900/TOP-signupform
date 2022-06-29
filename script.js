let createPass = document.querySelector("#password")
let confirmPass = document.querySelector("#confirm_password")
let confirmTxt = document.querySelectorAll(".confirmText")
let submitBtn = document.querySelector(".submit_btn")

let checkIfSame = () => {
  if (createPass.value != confirmPass.value) {
  alert("Passwords don't match")
  confirmTxt.forEach(target => target.textContent = "*Passwords don't match")
  createPass.value = "";
  return confirmPass.value = "";
}
}

confirmPass.addEventListener('blur', checkIfSame)

