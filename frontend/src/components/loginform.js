import React from 'react';

export default function LoginForm() {
    return (
        <div>
            <h1>PWEASE LOG IN</h1>
            <form>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}