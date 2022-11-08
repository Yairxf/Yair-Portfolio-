function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1019950776711397386/GV8SpnL0gpfBWqk1p026l9MY6R81F6lZpXiyOkwCaISC_j0IX_YtonlLhhPD4SlW_dnC");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Yair Contact Form Website",
        avatar_url: "",
        content: `${document.getElementById("tel").value} + ${document.getElementById("name").value} + ${document.getElementById("email").value} + ${document.getElementById("subject").value}`

    }

    request.send(JSON.stringify(params));
}