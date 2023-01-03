function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1059878296738869258/Oy5RCyxmYqjE_82DIS9N-V7k5feQwBI17JAflioVcW-uT-Be7CPpcmZ0apCG4Vd1gP0C");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Yair Contact Form Website",
        avatar_url: "",
        content: `${document.getElementById("tel").value} + ${document.getElementById("name").value} + ${document.getElementById("email").value} + ${document.getElementById("text").value}`

    }

    request.send(JSON.stringify(params));

}