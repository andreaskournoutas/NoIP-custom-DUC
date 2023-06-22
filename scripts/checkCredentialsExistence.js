function checkCredentialsExistence() {
    const cred = navigator.credentials.get({password: true})
    .then((cred) => {
        if (cred) {
            if (localStorage.getItem(hostname)) {
                showApp(cred);
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