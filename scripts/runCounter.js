function runCounter(interval, credentials) {
    console.log('Counter started');
    let seconds = interval;
    let counterInstance =  setInterval(function() {
        if (seconds != 0) {
            seconds--;
            counter.innerText = seconds;
            clearInterval(counterInstance);
        }
        else {
            compareIps(credentials, sessionStorage.getItem(ip), getIp());
        }
    }, interval * 1000);
}