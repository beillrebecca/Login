document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginInput").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("メールアドレスが認証されていません。確認メールをチェックしてください");
        return;
      }

      alert("ログイン成功！");
      window.location.href = "home.html";

    } catch (error) {
      alert("ログインエラー: " + error.message);
    }
  });
});