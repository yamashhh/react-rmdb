import { useState, useContext, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import Button from './Button';
import { Wrapper } from './Login.styles';
import { Context, UserContext } from '../context';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useContext(Context) as UserContext;
  const navigate = useNavigate();

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  async function handleSubmit() {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password,
      );
      console.dir(sessionId);
      if (sessionId?.success) {
        setUser({ sessionId: sessionId.session_id, username });
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <label htmlFor="">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        id=""
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        value={password}
        id=""
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
}
