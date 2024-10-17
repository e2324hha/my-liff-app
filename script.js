window.onload = function() {
    liff.init({ liffId: '2006463532-ERxJnorD' }, () => {
        if (liff.isLoggedIn()) {
            displayUserInfo();
        } else {
            document.getElementById('login-button').style.display = 'block';
        }
    }, err => console.error(err));
};

document.getElementById('login-button').onclick = function() {
    liff.login();
};

function displayUserInfo() {
    liff.getProfile()
        .then(profile => {
            document.getElementById('user-icon').src = profile.pictureUrl;
            document.getElementById('user-name').textContent = profile.displayName;
            document.getElementById('user-info').style.display = 'block';
            document.getElementById('login-button').style.display = 'none';
        })
        .catch(err => console.error(err));
}
