import useRegister from "../hooks/RegisterHook";

const Register = () => {
  const register = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const registerUrl = "http://localhost:1337/api/auth/local/register";
    register({ body: JSON.stringify(body), url: registerUrl });
  };

  return (
    <>
      <h1> Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          name="username"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
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

export default Register;
