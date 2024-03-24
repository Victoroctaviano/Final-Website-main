function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

function submit(){

    let aasdjkhv = document.getElementById("password").value;
    let aernio = document.getElementById("confirmPassword").value;
    if(aasdjkhv != aernio) return alert("Hayoo passwordnya engga samaa")

    let awseliudgqwouy = document.getElementById("email").value;

    if(!awseliudgqwouy.endsWith("@gmail.com")) return alert("You are not eligajbsdljakhsbdljKHAFS");

    location.href = "file:///D:/Victor%20Vella/Final%20Project/register%202.html"

}