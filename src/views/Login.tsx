import React, { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Data/firebase";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully 🎉");
            console.log("Logged in with:", email);
            navigate("/student"); // direct redirect after login
        } catch (error: unknown) {
            toast.error( "Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 px-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm">
                <div className="flex items-center justify-center mb-6">
                    <LogIn className="h-8 w-8 text-blue-600 mr-2" />
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div className="text-right mb-6">
                        <Link to="/forgotpassword" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-5">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
