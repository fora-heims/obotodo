import './Auth.css';
import Form from '../../components/Form/Form.js';
import Header from '../../components/Header/Header.js';
import { useState } from 'react';
import { logout } from '../../services/users.js';
import React from 'react';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('message appears here');
  const [type, setType] = useState('in');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (type === 'in') {
        let user = await signInUser(email, password);
        setUser(user);
      } else {
        let user = await signUpUser(email, password);
        setUser(user);
      }
    } catch {
      setMessage('something got caught');
    }
  };

  return (
    <div>
      <Header user={user} type={type} setType={setType} logout={logout} />
      {!user ? (
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          message={message}
          submitHandler={submitHandler}
        />
      ) : (
        <img
          src="https://thumbs.dreamstime.com/b/cat-pic-catpose-catpic-kittenpic-moodykitten-whitekitten-157371421.jpg"
          alt="cat"
        />
      )}
    </div>
  );
}
