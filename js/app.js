function login(event) {
  event.preventDefault();

  // dummy authentication
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter credentials");
  }
}
