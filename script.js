document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const age = form.querySelector("#age").value;
    if (name.trim() === "" || email.trim() === "" || isNaN(age) || age < 1) {
      resultDiv.innerHTML =
        '<p class="error">Please fill in all fields correctly.</p>';
    } else {
      resultDiv.innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Age:</strong> ${age}</p>
            `;
    }
  });
});
