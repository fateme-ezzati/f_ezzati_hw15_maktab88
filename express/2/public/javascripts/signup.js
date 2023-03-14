const submitBtn = $('#submit');


const submitUser = async (e) => {
    e.preventDefault();
    console.log("submit------");

    try {
        document.querySelector('.error-log').innerHTML = '';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        const body = JSON.stringify({
            username,
            password,
            email
        });

        const handle_username = await validation("username", username)
        const handle_password = await validation("password", password)
        const handle_email = await validation("email", email)

        console.log(handle_username)

        if (!handle_username.status) {
            return document.querySelector('.error-log').innerHTML = handle_username.msg
        }

        if (!handle_password.status) {
            return document.querySelector('.error-log').innerHTML = handle_password.msg
        }

        if (!handle_email.status) {
            return document.querySelector('.error-log').innerHTML = handle_email.msg
        }






    } catch (error) {
        // document.querySelector('.error-log').innerHTML = error.cause.message;
    }


}

document.querySelector('#submit').addEventListener('click', submitUser);