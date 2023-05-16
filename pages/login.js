import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/components/Login"), { ssr: false });

export default function LoginPage() {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        // if token is available( user is already logged in ), redirect to profile page
        if (token) {
            window.location.href = "/userdashboard";
        } else {
            return <Login />;
        }
    }
}
