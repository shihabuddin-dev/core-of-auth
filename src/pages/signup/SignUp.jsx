import React, { use } from 'react';
import { Link } from 'react-router';
import { ValueContext } from '../../layout/Root';

const SignUp = () => {
    const { handleSingUp } = use(ValueContext)

    const handleSubmit = e => {
        e.preventDefault()
        const fullName = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(fullName)

        // password validation 
        if (password.length < 6) {
            alert('Password Must be more than 6 character')
            return
        }
        if (password !== confirmPassword) {
            alert('Password and confirm password must be same')
            return
        }
        if (!/(?=.*[a-z])/.test(password)) {
            alert('Password Must be includes One small letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            alert('Password Must be includes Uppercase letter')
            return
        }
        if (!/(?=.*\d)/.test(password)) {
            alert('Password Must be includes One digit Number')
            return
        }

        handleSingUp(email, password)
            .then((userCredential) => {
                // const user = userCredential.currentUser;
                console.log(userCredential)
                alert('Success')
                // setUser(currentUser)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert(errorMessage)
            });
    }

    return (
        <div className="flex flex-col max-w-md  mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 ">
            <div className="mb-6 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign Up to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="fullname" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Confirm Password</label>
                        </div>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-indigo-600 dark:text-gray-50">Sign Up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to='/signin' className="hover:underline dark:text-violet-600">Sign In</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;