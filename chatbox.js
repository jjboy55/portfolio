function generateMessage(){
    var message = document.getElementById('chat_text').value;
    var sendContainer = document.createElement('div');
    var senderBubble = document.createElement('div');
    sendContainer.className = 'sendercontainer';
    senderBubble.className = 'senderbubble';
    senderBubble.innerText = message;
    sendContainer.appendChild(senderBubble);
    document.getElementById('chatbox').appendChild(sendContainer);
    document.getElementById
}