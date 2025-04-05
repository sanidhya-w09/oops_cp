import { auth } from "../Data/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error: unknown) {
            // Narrow down the error type
            if (error instanceof Error) {
                toast.error(`Logout failed: ${error.message}`);
            } else {
                toast.error("An unknown error occurred during logout.");
            }
        }
    };


    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
