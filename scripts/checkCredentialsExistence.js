function saveCredentials(formData) {
    navigator.credentials.store(new PasswordCredential(formData))
    .then(() => {
        localStorage.setItem(hostname) = hostInput.value;
    });
}