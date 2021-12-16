/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import {v4 as uuidV4} from 'uuid'

const Login = ({onIdSubmit}) => {

    const idRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onIdSubmit(idRef.current.value);
    }

    const createNewID = () => {
        onIdSubmit(uuidV4());
    }

    return (
        <div className="flex justify-center h-screen relative ">
            <div className="absolute w-full xl:max-w-xl lg:max-w-md max-w-sm align-middle">
                <form onSubmit={handleSubmit} className="bg-white inline-block shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="userid">
                            UserID
                        </label>
                        <input ref={idRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="UserID" required />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                        <button onClick={createNewID} className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800">
                            Create a new ID?
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 VidChat Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Login
