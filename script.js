

$('#btn-input').click(() =>{
    if ($('#first-name').val() == "") {
        $('#first-name').addClass('border-color-error');
        $('.error-first').css('display', 'block');
    } else {
        $('#first-name').addClass('border-color-ok');
        $('.error-first').css('display', 'none');
    }

    if ($('#last-name').val() == "") {
        $('#last-name').addClass('border-color-error');
        $('.error-last').css('display', 'block');
    } else {
        $('#last-name').addClass('border-color-ok');
        $('.error-last').css('display', 'none');
    }

    if ($('#email').val() == "") {
        $('#email').addClass('border-color-error');
        $('.error-email').css('display', 'block');
    } else {
        $('#email').addClass('border-color-ok');
        $('.error-email').css('display', 'none');
    }

    if ($('#password').val() == "") {
        $('#password').addClass('border-color-error');
        $('.error-pass').css('display', 'block');
    } else {
        $('#password').addClass('border-color-ok');
        $('.error-pass').css('display', 'none');
    }


}  )