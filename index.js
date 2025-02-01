$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $("#yes");
    var btn_no = $("#no");
    var responseMessage = $("#response-message");

    console.log("Script loaded!"); // Debugging

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
        responseMessage.text(""); // Clear response message on reset
    });

    btn_yes.click(function(event) {
        event.stopPropagation(); // Prevents click from propagating to the envelope
        responseMessage.text("Yay! 😊");
    });

    btn_no.click(function(event) {
        event.stopPropagation(); // Prevents click from propagating to the envelope
        responseMessage.text("Sad :( ");
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
