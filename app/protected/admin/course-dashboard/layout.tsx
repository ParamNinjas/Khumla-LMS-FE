"use client";
import PageHeader from "./PageHeader";
import { useSearchParams, usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();

  let title =
    pathname == "/protected/admin/course-dashboard"
      ? "Course Dashboard - Web Development"
      : `Web Development - ${name}`;

  if (pathname == "/protected/admin/course-dashboard/graphs")
    title = "Sanlam Dashboard Analytics - Web Development";

  return (
    <>
      <div className="mdk-header-layout__content page-content ">
        <div className="mdk-header-layout__content page-content ">
          <PageHeader title={title} />
          <div className="container page__container page__container page-section">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
