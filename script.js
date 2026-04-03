document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const guestBtn = document.getElementById("guestBtn");
  const goSignup = document.getElementById("goSignup");

  loginBtn?.addEventListener("click", () => {
    const input = document.getElementById("loginInput").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if(!storedData){
      alert("登録されたユーザーがいません");
      return;
    }

    // メール/電話 or ユーザーネーム + パスワードで照合
    if((input === storedData.username || input === storedData.contact) && password === storedData.password){
      alert("ログイン成功！");
      location.href = "home.html"; // ログイン後ページ
    } else {
      alert("ユーザー名かパスワードが違います");
    }
  });

  guestBtn?.addEventListener("click", () => {
    localStorage.setItem("userData", JSON.stringify({ username: "guest", contact:"", password:"" }));
    location.href = "home.html";
  });

  goSignup?.addEventListener("click", () => {
    location.href = "../Signup/"; // Signupページに遷移
  });
});