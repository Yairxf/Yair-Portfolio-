function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1060496179277869106/B-IjYy3kknxbHhndJvN62kgIb_q11cckxWoKaDy7tiVgybH6gt9V-fnN0dUfV_fTHIFB");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Yair Contact Form Website",
        avatar_url: "",
        content: `${document.getElementById("tel").value} + ${document.getElementById("name").value} + ${document.getElementById("email").value} + ${document.getElementById("text").value}`

    }

    request.send(JSON.stringify(params));

}