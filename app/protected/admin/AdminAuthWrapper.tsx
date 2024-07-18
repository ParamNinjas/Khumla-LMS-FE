import { Suspense, useEffect } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const cookies = new Cookies();
    const loggedInUser = cookies.get("param-lms-user");
    const isAuthorised = () => loggedInUser && loggedInUser.role == "Admin";

    useEffect(() => {
      const checkAuth = async () => {
        if (!loggedInUser) {
          router.replace("/auth/login");
        } else if (!isAuthorised()) {
          router.replace("/protected/student/course/all-courses");
        }
      };

      checkAuth();
    }, [loggedInUser]);

    return (
      <Suspense>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return AuthComponent;
};

export default withAuth;
