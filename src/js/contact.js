function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1040582936250036316/uCHN1JJpJyEV5ntn6UOMec04SBmQuXn1hvzgSqy4G-b3R3wdP77Q8K30tLSsfEDJa9Lh");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Yair Contact Form Website",
        avatar_url: "",
        content: `${document.getElementById("tel").value} + ${document.getElementById("name").value} + ${document.getElementById("email").value} + ${document.getElementById("text").value}`

    }

    request.send(JSON.stringify(params));

}