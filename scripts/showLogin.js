function showApp(formData) {
    console.log('Showing app interface...')
    login.classList.add('d-none');
    app.classList.remove('d-none');
    compareIps(formData, sessionStorage.getItem(ip), getIp());
};