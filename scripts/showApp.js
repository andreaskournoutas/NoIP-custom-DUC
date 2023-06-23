function showApp(formData, hostname) {
    console.log('Showing app interface...')
    login.classList.add('d-none');
    app.classList.remove('d-none');
    compareIps(formData, hostname, sessionStorage.getItem(ip), getIp());
};