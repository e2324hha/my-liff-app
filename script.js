// LIFFアプリケーションの初期化
liff.init({
    liffId: '2006463532-pEYQlkMg'  // あなたのLIFF IDをここに入れる
})
.then(() => {
    // ユーザーのプロフィールを取得
    return liff.getProfile();
})
.then(profile => {
    const userInfo = `
        <p>ユーザー名: ${profile.displayName}</p>
        <img src="${profile.pictureUrl}" alt="プロフィール画像" />
        <p>ユーザーID: ${profile.userId}</p>
    `;
    document.getElementById('user-info').innerHTML = userInfo;
})
.catch(err => {
    console.error(err);
});
