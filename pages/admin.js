import dynamic from "next/dynamic";

const LoginAdmin = dynamic(() => import("@/components/LoginAdmin"), {
  ssr: false,
});

export default function LoginPage() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("admintoken");

    // if token is available( user is already logged in ), redirect to profile page
    if (token) {
      window.location.href = "/empdashboard";
    } else {
      return <LoginAdmin />;
    }
  }
}
