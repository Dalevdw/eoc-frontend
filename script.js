function createAccount() {
  let form = document.getElementById("create-account");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.001:5000/add-new/", {
    method: "POST",
    body: JSON.stringify({
      first_name: inputs[0].value,
      username: inputs[1].value,
      password: inputs[2].value,
      repeat_password: inputs[3].value,
      email: inputs[4].value,
    }),
    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been created");
      console.log(json);
      form.reset();
    });
}

function login() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementById("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let users;
  fetch("http://127.0.0.1:5000/show-record/")
    .them((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(username, password, username);

      loggedIn = users.filter((user) => {
        return user.username == username && user.password == password;
      });
      alert("logged in successfully");
      console.log(json);
      loginForm.reset();
    });
}
