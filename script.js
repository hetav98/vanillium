function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Показать уведомление
    showCopyNotification();
}

function showCopyNotification() {
    var notification = document.getElementById("copyNotification");
    notification.style.display = "block";

    // Скрыть уведомление через 3 секунды
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
}
