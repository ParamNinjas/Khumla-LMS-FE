"use client";
import { useSearchParams, usePathname } from "next/navigation";
import PageHeader from "@/app/components/course/PageHeader";

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("title");
  const pathname = usePathname();

  let title =
    pathname == "/protected/admin/courses/create"
      ? "Create Course"
      : `Edit Course - ${name}`;

  if (pathname == "/protected/admin/courses") title = "Courses";

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
