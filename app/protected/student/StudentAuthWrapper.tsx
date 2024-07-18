import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import Preloader from "@/app/components/Preloader";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const cookies = new Cookies();
    const loggedInUser = cookies.get("param-lms-user");
    const isAuthorised = () => (loggedInUser && (loggedInUser.role == "Student" || loggedInUser.role == "Customer" ) );

    useEffect(() => {
      const checkAuth = async () => {
        if (!loggedInUser) {
          router.replace("/auth/login");
        }

        else if (!isAuthorised()) {
          router.replace("/protected/admin/manage-courses");
        }
      };

      checkAuth();
    }, [loggedInUser]);

    if (!isAuthorised()) {
      return <Preloader />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
