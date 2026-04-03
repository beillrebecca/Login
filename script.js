document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginInput = document.getElementById("loginInput");
  const loginPassword = document.getElementById("loginPassword");

  loginBtn.addEventListener("click", async () => {
    const input = loginInput.value.trim();
    const password = loginPassword.value.trim();

    if (!input) return alert("メールアドレスまたは電話番号を入力してください");

    // 電話番号かメールかを判定
    const isEmail = input.includes("@");

    if (isEmail) {
      if (!password) return alert("パスワードを入力してください");

      // メールログイン
      try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(input, password);
        const user = userCredential.user;

        if (!user.emailVerified) {
          alert("メールアドレスが認証されていません。確認メールをチェックしてください");
          return;
        }

        alert("ログイン成功！");
        window.location.href = "../Home/index.html";

      } catch (error) {
        alert("ログインエラー: " + error.message);
      }

    } else {
      // 電話番号ログイン
      // 事前に Verify ページで confirmationResult を保存していることが前提
      const code = prompt("SMSで受け取った確認コードを入力してください");
      if (!code) return alert("コードを入力してください");

      if (!window.confirmationResult) {
        return alert("電話番号ログイン情報がありません。再度認証してください");
      }

      try {
        await window.confirmationResult.confirm(code);
        alert("電話番号ログイン成功！");
        window.location.href = "../Home/index.html";
      } catch (err) {
        alert("確認コードが間違っています: " + err.message);
      }
    }
  });
});