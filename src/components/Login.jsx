import useLogin from "../hooks/LoginHook";

const Login = () => {
  const login = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      identifier: e.target.identifier.value,
      password: e.target.password.value,
    };
    const loginUrl = "http://localhost:1337/api/auth/local";
    login({ body: JSON.stringify(body), url: loginUrl });
  };

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="identifier"
          placeholder="email ou username"
          name="identifier"
          required
        />

        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
