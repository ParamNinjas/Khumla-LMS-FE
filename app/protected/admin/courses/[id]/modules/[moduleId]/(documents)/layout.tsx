"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const pathname = usePathname();

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  const tabs = [
    {
      name: "edit",
      title: "Edit Unit Standard",
      url: `${url}/edit?title=${title}`,
      path: `${url}/edit`,
    },
    {
      name: "documents",
      title: "Modules",
      url: `${url}/documents?title=${title}`,
      path: `${url}/documents`,
    },
    {
      name: "audios",
      title: "Audios",
      url: `${url}/audios?title=${title}`,
      path: `${url}/audios`,
    },
    {
      name: "videos",
      title: "Video Links",
      url: `${url}/videos?title=${title}`,
      path: `${url}/videos`,
    },
    {
      name: "quizzes",
      title: "Quizzes",
      url: `${url}/quizzes?title=${title}`,
      path: `${url}/quizzes`,
    },
    {
      name: "assessments",
      title: "Assessments",
      url: `${url}/assessments?title=${title}`,
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
