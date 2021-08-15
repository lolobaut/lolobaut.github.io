function sendMail()
{
    alert("send");
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    window.location.href = "mailto:egliloris@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
function redirect()
{
    alert("Hello! I am an alert box!!");
    sendMail();
}