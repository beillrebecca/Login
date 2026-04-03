document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const guestBtn = document.getElementById("guestBtn");
  const goSignup = document.getElementById("goSignup");

  loginBtn?.addEventListener("click", () => {
    const input = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const storedData = JSON.parse(localStorage.getItem("loginUserData") || "{}");

    if(input === storedData.username && pass === storedData.password){
      alert(`ようこそ ${storedData.username} さん！`);
      location.href = "home.html"; // ログイン成功
    } else {
      alert("ユーザー名かパスワードが違います");
    }
  });

  guestBtn?.addEventListener("click", () => {
    localStorage.setItem("loginUserData", JSON.stringify({username:"guest"}));
    location.href = "index.html";
  });

  goSignup?.addEventListener("click", () => {
    location.href = "../Signup/"; // Signup ページに移動
  });
});