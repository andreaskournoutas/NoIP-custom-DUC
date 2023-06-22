function getIp() {
    console.log('IP detection initialized');
    fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((response) => {return response.ip})
}