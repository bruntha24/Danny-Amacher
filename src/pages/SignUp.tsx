import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      console.log(data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:flex-[3] flex items-center justify-center bg-[#f8f8fb] px-6">
        
        <div className="w-full max-w-md text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-pink-400 rounded-full" />
            </div>
          </div>       <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline hover:text-gray-600">
                Login
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">

            <Input
              name="name"
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 rounded-xl bg-white border-gray-300"
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 rounded-xl bg-white border-gray-300"
              required
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="h-12 rounded-xl bg-white border-gray-300"
              required
            />

            <Button
              type="submit"
              className="w-full h-12 rounded-full bg-[#0c0c2d] hover:bg-[#14144a] text-white transition-all duration-300"
            >
              Sign Up
            </Button>

          </form>
          <p className="text-xs text-gray-400 leading-relaxed">
            By creating an account, you agree to our{" "}
            <span className="underline cursor-pointer hover:text-gray-600">
              Terms
            </span>{" "}
            and{" "}
            <span className="underline cursor-pointer hover:text-gray-600">
              Privacy Policy
            </span>.
          </p>

        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/4 bg-cover bg-center"
        style={{ backgroundImage: "url('/animation.gif')" }}
      />

    </div>
  );
};

export default SignUp;
