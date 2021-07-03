const sendHtml = () => {
    const input = document.querySelector(".md");
    const text = input.value;
    fetch('https://markdown-converter-api.herokuapp.com/convert', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'type': 'html', 'value': text })
    })
        .then(fetch('https://markdown-converter-api.herokuapp.com/download', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'type': 'html', 'value': text })
        }))
        .catch(err => {
            console.log(err);
        });
}

const sendPdf = () => {
    const input = document.querySelector(".md");
    const text = input.value;
    fetch('https://markdown-converter-api.herokuapp.com/convert', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'type': 'pdf', 'value': text })
    })
        .then(fetch('https://markdown-converter-api.herokuapp.com/download', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'type': 'pdf', 'value': text })
        }))
        .catch(err => {
            console.log(err);
        });
}