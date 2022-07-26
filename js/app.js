// generate a 12 characters long random password
function gen_password() {
    let length = 12
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+=><?/";
    
    for (let i = 0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

// copy innerText of 'element' to clipboard
function copyToMyClipboard(element) {
  var textArea = document.createElement("textarea");
  textArea.value = element.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

let arr_output_el = document.getElementsByClassName("output_feild");

const gen_btn_el = document.getElementById("generate-btn");


// event listener for generate password button
gen_btn_el.addEventListener("click", function () {
  for (let i = 0; i < arr_output_el.length; i++) {
    arr_output_el[i].textContent = gen_password();
    arr_output_el[i].style.color = "#55F991";
    arr_output_el[i].style.fontSize = "12px";
  }
});


// add event listeners to copy password to clipboard
for (let i = 0; i < arr_output_el.length; i++) {
  arr_output_el[i].addEventListener("click", function () {
    copyToMyClipboard(arr_output_el[i]);
  })
}