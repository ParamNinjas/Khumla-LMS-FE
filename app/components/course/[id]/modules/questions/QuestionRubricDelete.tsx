import { Rubric } from "@/app/interfaces/rubric";
import { deleteRubric } from "@/app/lib/actions/rubrics";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionRubric({ rubric }: { rubric: Rubric }) {
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");

  const delRubric = async () => {
    setIsSpinner(true);
    await deleteRubric(rubric.id!);
    const date = new Date().toString();
    router.replace(`${pathname}?title=${title}&refreshId=${date}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    setIsSpinner(false);
  }, [refreshId]);

  return (
    <div
      style={{ columnGap: "20px" }}
      className="form-group d-flex align-items-center"
    >
      <input
        type="hidden"
        name={`options[${rubric.id}][id]`}
        value={rubric.id}
      />
      <input
        style={{ width: "750px" }}
        type="text"
        className="form-control"
        placeholder="Rubric ..."
        name={`options[${rubric.id}][description]`}
        defaultValue={rubric.description}
      />
      <input
        style={{ width: "150px" }}
        type="number"
        className="form-control"
        placeholder="Points: E.g. 4"
        name={`options[${rubric.id}][label]`}
        defaultValue={rubric.label}
      />
      {isSpinner ? (
        <span className="spinner-border text-success" role="status" />
      ) : (
        <i onClick={() => delRubric()} className="material-icons">
          delete
        </i>
      )}
    </div>
  );
}
