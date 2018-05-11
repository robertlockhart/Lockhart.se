function validateCode(codeSequence, correctCode, navigateUrl, modal) {
    var code = "";
    code = $(codeSequence).val();
    if (code == correctCode) {
        location.href = navigateUrl;

    } else {
        alert("Nu blev det fel, försök igen..");
    }
}