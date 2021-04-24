exports.checkPassword = (password) => {
    let re = /[a-zA-Z0-9]{8}/;
    return re.test(password);
}

exports.checkEmail = (email) => {
    let re = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

exports.checkOnlyLetters = (value) => {
    let re = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,70}$/;
    return re.test(value);
}

exports.checkDate = (value) => {
    let re = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    return re.test(value);
}