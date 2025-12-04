function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Example login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

 setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
}