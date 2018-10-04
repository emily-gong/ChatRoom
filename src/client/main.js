
var message = document.forms['chat'];
var container = document.querySelector('section');

var socket = io();

message.elements.message.placeholder = 'Write your message here';

function addMessage(text) {
    var newMessage = document.createElement("p");
    var separator = document.createElement("br");

    newMessage.innerText = text;
    container.appendChild(newMessage);
    container.appendChild(separator);
    container.scrollTop = container.scrollHeight;
}

message.addEventListener('submit', function(e){
    e.preventDefault();
    var text = document.querySelector('input').value;
    socket.emit('message',text);
});

socket.on('message', function(e){
    addMessage(e);
});