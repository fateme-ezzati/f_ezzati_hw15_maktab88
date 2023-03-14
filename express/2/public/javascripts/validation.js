const validation = async (type, val) => {
    console.log("validation----",type)
    val = val.trim()

    if (type === 'username') {

        const response = await axios.get(
			'http://localhost:3000/api/admin/get-all-users'
		);

        console.log(response)


		const users = response.data.data.users;
        const userStatus = users.findIndex(user => user.username === val)
        if(userStatus===-1){
            return {
                status: false,
                msg: "username is already registered"
            }
        }

        return {
            status: true,
        }

    }

    if (type === 'password') {
        const  regularExpression = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8}$/;
        regularExpression.test(val);
        console.log( regularExpression.test(val))
        
        if (!regularExpression.test(val)) {
            return {
                status: false,
                msg: "weak pass"
            }
        }

        return {
            status: true,
        }


    }

    if (type === 'email') {
        const regularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        regularExpression.test(val);
        console.log( regularExpression.test(val))

        if (!regularExpression.test(val)) {
            return {
                status: false,
                msg: "unvalid email"
            }
        }

        return {
            status: true,
        }

    }

}