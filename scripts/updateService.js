function updateService(credentials, hostname, currentIp) {
    console.log('Service update request initialized');
    fetch('http://dynupdate.no-ip.com/nic/update?hostname=' + hostname + '&myip=' + currentIp, {
        headers: {
            'Authorization': `Basic ${encodeCredentials(credentials)}`
        }
    })
    .then((response) => {
        if (response.ok) {
            console.log('Service update successful');
            result.classList.remove('text-danger');
            result.classList.add('text-success');
            result.innerText = 'SUCCESSFULLY';
        }
        else {
            console.log('Service update unsuccessful');
            result.classList.remove('text-success');
            result.classList.add('text-danger');
            result.innerText = 'UNSUCCESSFULLY';
        }
        runCounter(interval, credentials, hostname);
    });
}