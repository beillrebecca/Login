const auth = firebase.auth();

loginBtn?.addEventListener("click", async () => {
  const input = document.getElementById("loginInput").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    if (input.includes("@")) {
      // メールログイン
      const userCredential = await auth.signInWithEmailAndPassword(input, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("メール認証が完了していません");
        return;
      }

      alert("ログイン成功！");
      window.location.href = "home.html";

    } else {
      // 電話番号ログインは SMS 認証フローが必要
      alert("電話番号ログインは verify ページ経由です");
    }

  } catch (error) {
    alert("ログインエラー: " + error.message);
  }
});