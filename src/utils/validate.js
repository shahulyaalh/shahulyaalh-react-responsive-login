export default function validate(values){
    let errors = {};
    if(!values.username.trim()){
        errors.username = "username required"
    }
    if(!values.email.trim()){
        errors.email = "Email required"
    }
    else if(!/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/.test(values.email)){
        errors.email = "email is invalid"
    }
    if(!values.password.trim()){
        errors.password = "password is req"
    }
    else if(values.password.length < 6){
        errors.password = "password length needs to be 6 or more"
    }
    if(!values.password2.trim()){
        errors.password2 ="password id req"
    }
    else if(values.password2!==values.password){
        errors.password2 ="password does not match"
    }
    return errors;
}