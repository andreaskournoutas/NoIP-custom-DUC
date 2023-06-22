async function compareIps(credentials, currentIp, fetchedIp) {
    console.log('Comparing current with fetched IP...');
    if (currentIp != fetchedIp) {
        currentIp = fetchedIp;
        ip.innerText = currentIp;
        updateService(credentials, currentIp);
     }
}