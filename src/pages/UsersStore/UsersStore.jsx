import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UsersStore = () => {

    const allUser = useLoaderData()

    const [users, setUsers] = useState(allUser)

    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                // If the user confirms, proceed with deletion
                fetch(`https://server-side-sable-sigma.vercel.app/users/${id}`, {
                    method: "DELETE",
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // Update UI after successful deletion
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);

                            Swal.fire(
                                "Deleted!",
                                "The user has been deleted.",
                                "success"
                            );
                        } else {
                            Swal.fire(
                                "Error",
                                "Failed to delete the user.",
                                "error"
                            );
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        Swal.fire(
                            "Error",
                            "An error occurred while deleting the user.",
                            "error"
                        );
                    });
            }
        });
    };


    return (
        <>

            <h2 className='text-center text-4xl font-bold mt-2 mb-5'>All Users Information</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Ind.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, ind) => (
                                <tr key={user?._id}>
                                    <th>{ind + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <Link className='btn' to={`/updateuser/${user?._id}`}><img className='w-[20px]' src="https://img.icons8.com/?size=256&id=71201&format=png" alt="update_icon" /></Link>
                                        <Link className='btn' onClick={() => { handleUserDelete(user?._id) }}><img className='w-[20px]' src="https://img.icons8.com/?size=50&id=gywqmjXXTAXu&format=png" alt="delete_icon" /></Link>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default UsersStore
