import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
import { LoginModel } from "../interfaces/LoginModel";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginModel>();
  const { users } = useUserContext();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginModel> = (data) => {
    const user = users.find(
      (u) => u.username === data.username && u.password === data.password
    );
    if (user) {
      console.log("Login successful:", user);
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register("username", { required: true })} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
}
