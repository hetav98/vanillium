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
//шо ты тут делаешь? не лезб! оно тебя сожрёт!!!
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
