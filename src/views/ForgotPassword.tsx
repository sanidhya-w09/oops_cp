import React, { useState } from "react";
import { MailIcon } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        // Simulate sending reset link
        toast.success("Password reset link sent! 📧");
        console.log("Reset link sent to:", email);
        setEmail("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 px-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
                <div className="flex items-center justify-center mb-6">
                    <MailIcon className="h-7 w-7 text-blue-600 mr-2" />
                    <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
                </div>

                <p className="text-sm text-gray-600 mb-4 text-center">
                    Enter your email and we’ll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-5">
                    Remembered your password?{" "}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
