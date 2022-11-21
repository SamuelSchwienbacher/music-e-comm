import React, { useEffect, useState, useSyncExternalStore } from 'react';
import PropTypes from 'prop-types';

async function loginUser(email, password) {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(data => {
            console.log(data);
            return data.json();
        })
}

export default function LoginForm({ setToken }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [valid, setValid] = useState({ email: false, password: false });
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        validateField('email');
    }, [email]);

    useEffect(() => {
        validateField('password');
    }, [password]);

    useEffect(() => {
        validateForm();
        console.log(email);
        console.log(email.match(emailMatch));
        setErrors({ email: valid.email ? '' : 'not valid!', password: valid.password ? '' : 'not set!' });
    }, [valid]);

    const handleSubmit = async e => {
        e.preventDefault();
        let token = await loginUser(email, password);
        //TODO Check whether the token is actually sent and valid
        token = token.access_token;
        console.log('handleSubmit')
        setToken(token);
    }

    const handleInput = (e, setValue) => {
        setValue(e.target.value);
    }

    const emailMatch = '^[\\w-\.]+@([\\w-]+\.)+[\\w-]{2,4}$';

    const validateField = name => {
        switch (name) {
            case 'email':
                setValid({ email: email.match(emailMatch) != null, password: valid.password });
                break;
            case 'password':
                setValid({ email: valid.email, password: password });
                break;
            default:
                break;
        }
    }

    const validateForm = () => {
        setFormValid(valid.email && valid.password);
    }

    return (
        <div>
            <h1>PWEASE LOG IN</h1>
            <div>
                {Object.keys(errors).map((fieldName, i) => {
                    if (errors[fieldName].length > 0) {
                        return (
                            <p key={i}>{fieldName} {errors[fieldName]}</p>
                        )
                    } else {
                        return '';
                    }
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input name="email" type="text" value={email} onChange={e => handleInput(e, setEmail)} />
                </label>
                <label>
                    <p>Password</p>
                    <input name="password" type="password" value={password} onChange={e => handleInput(e, setPassword)} />
                </label>
                <div>
                    <button name="submit" type="submit" disabled={!formValid}>Submit</button>
                </div>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}