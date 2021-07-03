const sendHtml = () => {
    const input = document.querySelector(".md");
    const text = input.value;
    fetch('https://markdown-converter-api.herokuapp.com/convert', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'type': 'html', 'value': text })
    })
        .then(res => window.open('https://markdown-converter-api.herokuapp.com/result.html'))
        .then(console.log('downloaded'))
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
    .then(res => window.open('https://markdown-converter-api.herokuapp.com/result.pdf'))
        .catch(err => {
            console.log(err);
        });
}