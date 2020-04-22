module.exports = {
    validate,
}

function validate(user){
    //return user.username && user.password ? true: false;
    return Boolean(user.username && user.password);
}