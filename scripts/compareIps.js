function compareIps(credentials, hostname, currentIp, fetchedIp) {
    console.log('Comparing current with fetched IP...');
    if (currentIp != fetchedIp) {
        currentIp = fetchedIp;
        sessionStorage.setItem('ip', currentIp);
        ip.innerText = currentIp;
        updateService(credentials, hostname, currentIp);
    }
    else {
        runCounter(interval, credentials, hostname);
    }
}