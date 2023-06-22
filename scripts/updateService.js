function updateService(credentials, currentIp) {
    console.log('No-IP update request initialized');
    fetch('http://dynupdate.no-ip.com/nic/update?hostname=' + localStorage.getItem('hostname') + '&myip=' + currentIp, {
        body: credentials,
        mode: 'no-cors',
        credentials: 'include'
    })
    .then((response) => {
        console.log(response.text());
        runCounter(interval, credentials);;
    });
}