"use client";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const name = searchParams.get("title");

  const pathname = usePathname();
  const router = useRouter();

  const baseUrl = `/protected/admin/courses/${params.id}`;
  const links = [
    { name: "Edit Course", path: baseUrl, url: `${baseUrl}?title=${name}` },
    {
      name: "Knowledge Modules",
      path: `${baseUrl}/knowledge-modules`,
      url: `${baseUrl}/knowledge-modules?title=${name}`,
    },
    {
      name: "Practical Skills Modules",
      path: `${baseUrl}/practical-modules`,
      url: `${baseUrl}/practical-modules?title=${name}`,
    },
  ];

  return (
    <>
      <div className="card p-relative o-hidden mb-0">
        <div
          className="card-header card-header-tabs-basic nav px-0"
          role="tablist"
        >
          {links.map((l: any) => (
            <Link
              key={l.id}
              className={pathname === l.path ? "active" : ""}
              href={l.url}
            >
              <span className="flex d-flex flex-column">
                <strong className="card-title">{l.name}</strong>
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
