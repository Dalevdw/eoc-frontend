function createAccount() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-new/", {
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
      console.log(json);
      alert("account is created");
      document.getElementById("id01");
      window.location.href = "index.html";
    })
    .catch((e) => alert(e));
}
