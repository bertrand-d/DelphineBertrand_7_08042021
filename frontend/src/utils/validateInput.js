exports.checkPassword = (password) => {
    let re = /[a-zA-Z0-9]{8}/;
    return re.test(password);
}

exports.checkEmail = (email) => {
    let re = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}