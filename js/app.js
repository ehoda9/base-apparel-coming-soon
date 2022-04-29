const inputEmail = document.querySelector('input[type="email"]');
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
  const errorIcon = document.querySelector(".errormsg");
  const errorMsg = document.querySelector(".error");
  const errorMsg2 = document.querySelector(".error2");
  const emailValue = inputEmail.value.trim().toLowerCase();
  const validateEmail = (email) => {
    let characters =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characters.test(String(email).toLowerCase());
  };
  if (emailValue === "" || emailValue === null) {
    inputEmail.classList.add("red");
    errorIcon.classList.remove("none");
    errorMsg.classList.remove("none");
    errorMsg.innerHTML = "Email Can't Be Empty.";
  } else {
    if (emailValue.length <= 9 || !validateEmail(emailValue)) {
      inputEmail.classList.add("red");
      errorIcon.classList.remove("none");
      errorMsg.classList.remove("none");
      errorMsg.innerHTML = "Please provide a vaild email.";
    } else {
      if (
        inputEmail.classList.contains("red") ||
        errorIcon.classList.contains("none") ||
        errorMsg.classList.contains("none")
      ) {
        inputEmail.classList.remove("red");
        errorIcon.classList.add("none");
      }
      submitBtn.classList.add("none");
      inputEmail.classList.add("green");
      errorMsg.classList.remove("none");
      errorMsg.classList.add("green");
      errorMsg.innerHTML = "Subscribe success.";
      if ((errorMsg.innerHTML = "Subscribe success.")) {
        setTimeout(() => {
          inputEmail.classList.add("none");
          errorMsg.classList.remove("green");
          errorMsg.classList.add("big");
          errorMsg2.classList.remove("none");
          errorMsg2.innerHTML = emailValue;
          setTimeout(() => {
            errorMsg.classList.add("none");
            errorMsg2.classList.add("none");
            setTimeout(() => {
              inputEmail.value = null;
              errorMsg.classList.remove("big");
              inputEmail.classList.remove("green");
              inputEmail.classList.remove("none");
              submitBtn.classList.remove("none");
            }, 1500);
          }, 2000);
        }, 2000);
      }
    }
  }
});
