chrome.runtime.onMessage.addlistener((msg, sender, response) => {
    if(msg.name == "message") {
        response({text: "This is a response..."})
    }
})