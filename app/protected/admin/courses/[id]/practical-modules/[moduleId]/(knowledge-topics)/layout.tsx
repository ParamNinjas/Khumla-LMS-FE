"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const pathname = usePathname();

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  const tabs = [
    {
      name: "documents",
      title: "Knowledge Topics",
      url: `${url}/knowledge-topics?title=${title}&moduleTitle=${moduleTitle}`,
      path: `${url}/knowledge-topics`,
    },
    {
      name: "videos",
      title: "Video Links",
      url: `${url}/videos?title=${title}&moduleTitle=${moduleTitle}`,
      path: `${url}/videos`,
    },
    {
      name: "quizzes",
      title: "Quizzes",
      url: `${url}/quizzes?title=${title}&moduleTitle=${moduleTitle}`,
      path: `${url}/quizzes`,
    },
    {
      name: "assessments",
      title: "Assessments",
      url: `${url}/assessments?title=${title}&moduleTitle=${moduleTitle}`,
      path: `${url}/assessments`,
    },
  ];

  return (
    <>
      <div className="card p-relative o-hidden mb-0">
        <div
          className="card-header card-header-tabs-basic nav px-0"
          role="tablist"
        >
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              className={tab.path === pathname ? "active" : ""}
              href={tab.url}
            >
              <span className="flex d-flex flex-column">
                <strong className="card-title">{tab.title}</strong>
              </span>
            </Link>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
