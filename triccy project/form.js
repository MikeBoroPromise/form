const form = document.getElementById("form");

// const button = document.getElementById("Register");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const gender = document.getElementById("option").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const password = document.getElementById("password").value;

  const birthDate = new Date(date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  console.log(
    `Hi, my name is ${firstname + " " + lastname} i'm ${age} years old , i'm a ${gender} i currently weigh ${weight}kg and i'm ${height}ft tall, here is my email address ${email} `,
  );
  // console.log("Password:", password);
  form.reset();
});
