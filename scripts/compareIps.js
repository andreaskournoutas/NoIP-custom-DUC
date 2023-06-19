function getIp() {
    console.log('IP detection initialized');
    fetch('https://ip1.dynupdate.no-ip.com/', {mode: 'no-cors'})
    .then((response) => {console.log(response); return response.text()})
    .then((data) => {console.log(data)});

}