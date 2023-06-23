function checkCredentialsExistence() {
    const cred = navigator.credentials.get({password: true})
    .then((cred) => {
        if (cred) {
            if (localStorage.getItem(hostname)) {
                showApp(cred, localStorage.getItem(hostname));
            }
            else {
                showLogin();
            }
        }
        else {
            showLogin();
        }
    })
}