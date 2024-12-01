

import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    // Load user data
    const allUser = useLoaderData();
    console.log(allUser);



    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.updateName.value;
        const email = form.updateEmail.value;
        const gender = form.updateGender.value;
        const status = form.updateStatus.value;
        const updateUser = { name, email, gender, status }
        console.log(updateUser)

        // update user

        fetch('https://server-side-sable-sigma.vercel.app/users', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUser)

        })
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User information update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => console.log(err))

    };

    return (
        <>
            <div>
                <Link to={'/'}>all users</Link>
            </div>

            <div className="text-center">
                <h2 className="text-4xl font-bold">Update User Information</h2>
                <p className="mt-1">Give your personal information to make our user</p>

                <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={allUser?.name}
                                name="updateName"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={allUser?.email}

                                name="updateEmail"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Gender Radio Buttons */}
                        <div className="form-control">
                            <div className="flex space-x-8">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Gender</span>
                                </label>
                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="updateGender"
                                        value="male"

                                        defaultChecked={allUser?.gender === "male"}
                                        className="radio checked:bg-blue-500"
                                    />
                                    <span className="label-text">Male</span>
                                </label>
                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="updateGender"
                                        value="female"

                                        defaultChecked={allUser?.gender === "female"}
                                        className="radio checked:bg-pink-500"
                                    />
                                    <span className="label-text">Female</span>
                                </label>
                            </div>
                        </div>

                        {/* Status Radio Buttons */}
                        <div className="form-control">
                            <div className="flex space-x-8">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Status</span>
                                </label>
                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="updateStatus"
                                        value="Active"

                                        defaultChecked={allUser?.status === "Active"}
                                        className="radio checked:bg-blue-500"
                                    />
                                    <span className="label-text">Active</span>
                                </label>
                                <label className="label cursor-pointer flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="updateStatus"
                                        value="Inactive"

                                        defaultChecked={allUser?.status === "Inactive"}
                                        className="radio checked:bg-pink-500"
                                    />
                                    <span className="label-text">Inactive</span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateUser;
