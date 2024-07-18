"use client";
import PageHeader from "./PageHeader";
import { useSearchParams, usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const assessmentName = searchParams.get("assessment_name");
  const pathname = usePathname();

  const title =
    pathname == "/protected/admin/assessments/grade-assessments"
      ? "Assessments"
      : `${assessmentName} - ${name}`;

  return (
    <>
      <div className="mdk-header-layout__content page-content ">
        <div className="mdk-header-layout__content page-content ">
          {assessmentName && name ? (
            <PageHeader title={title} mark={78} />
          ) : (
            <PageHeader title={title} />
          )}
          <div className="container page__container page__container page-section">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
