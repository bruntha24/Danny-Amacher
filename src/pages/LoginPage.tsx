import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) return;
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
<Button
  variant="ghost"
  className="absolute top-4 left-4 lg:top-8 lg:left-8 p-3 rounded-full"
  onClick={() => navigate(-1)}
>
  <ArrowLeft className="w-6 h-6 text-gray-700" />
</Button>
      <div className="w-full lg:flex-[3] flex flex-col items-center justify-center bg-[#f8f8fb] px-6 py-10 lg:py-0">
        <div className="w-full max-w-md text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-pink-400 rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back
            </h1>
            <p className="text-gray-400 text-sm">or</p>
          </div>
          <form onSubmit={handleContinue} className="space-y-5">
            <Input
              type="text"
              placeholder="Enter email or username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="h-12 rounded-xl bg-white border-gray-300"
              required
            />
            <Button
              type="submit"
              className="w-full h-12 rounded-full bg-[#0c0c2d] hover:bg-[#14144a] text-white transition-all duration-300"
            >
              Continue
            </Button>
          </form>

          <p className="text-xs text-gray-400 leading-relaxed">
            By continuing, you agree to our{" "}
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
        className="w-full lg:w-1/4 h-64 lg:h-auto bg-cover bg-center mt-6 lg:mt-0"
        style={{ backgroundImage: "url('/animation.gif')" }}
      />
    </div>
  );
};

export default LoginPage;

