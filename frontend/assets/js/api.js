function sendRequest(action, data, callback){
    fetch('../api/ajax.php', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({action, ...data})
    })
    .then(res => res.json())
    .then(callback)
    .catch(err => console.error(err));
}
