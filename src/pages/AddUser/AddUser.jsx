import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddUser = () => {

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        const user = { name, email, gender, status }
        console.log(user)

        // send into server for save data into database
        fetch('https://server-side-sable-sigma.vercel.app/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top-center",
                    icon: "Congratulation",
                    title: "User added in mongoDB",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => console.log(err))
    }

    return (
        <>

            <div>
                <Link to={'/'}>all users</Link>
            </div>

            <div className='text-center'>
                <h2 className='text-4xl font-bold'>New User Form</h2>
                <p>Give your personal information to make our user</p>


                <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleCreateUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <div className="flex space-x-8">

                                <label className="label">
                                    <span className="label-text font-bold text-lg">Gender</span>
                                </label>


                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input type="radio" name="gender" value="male" className="radio checked:bg-blue-500" />
                                    <span className="label-text">Male</span>
                                </label>

                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input type="radio" name="gender" value="female" className="radio checked:bg-pink-500" />
                                    <span className="label-text">Female</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <div className="flex space-x-8">

                                <label className="label">
                                    <span className="label-text font-bold text-lg">Status</span>
                                </label>


                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input type="radio" name="status" value="Active" className="radio checked:bg-blue-500" />
                                    <span className="label-text">Active</span>
                                </label>

                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input type="radio" name="status" value="Inactive" className="radio checked:bg-pink-500" />
                                    <span className="label-text">Inactive</span>
                                </label>
                            </div>
                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default AddUser
