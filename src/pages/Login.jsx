import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import schema from "../validations/LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router";



function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const navigate = useNavigate()


  const sendData = async (data) => {
    try {
        const responce = await axios.post("https://dummyjson.com/auth/login", {
            username: "emilys",
            password: "emilyspass"
        })
        localStorage.setItem("token", responce.data.accessToken)
        navigate("/profile")
    } catch (error) {
        console.log(error)
    }
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-150 p-8 border-2 border-gray-600 rounded-md mt-40 mx-auto flex flex-col gap-4"
      >
        <input
          {...register("username")}
          type="text"
          placeholder="Enter UserName"
          name="username"
          className="w-full p-3 text-md border-1 text-pink-500 border-gray-600 rounded-md outline-none"
        />
        {errors.username && (
          <p className="text-red-500 text-sm font-bold">
            {errors.username.message}
          </p>
        )}
        <div className="relative">
          <input
            {...register("password")}
            type={isVisible ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            className="w-full p-3 text-md border-1 text-pink-500 border-gray-600 rounded-md outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-bold">
              {errors.password.message}
            </p>
          )}
          <button
            onClick={() => setIsVisible(!isVisible)}
            type="button"
            className="absolute top-3 right-3 cursor-pointer"
          >
            {isVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className="w-full text-white font-bold p-4 rounded-md mt-5"
          style={{
            backgroundColor: !isValid ? "#b4acac" : "#ff3b9d",
            cursor: !isValid ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
