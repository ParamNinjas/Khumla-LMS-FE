import { IOption } from "@/app/interfaces/questions";
import { deleteOption } from "@/app/lib/actions/options";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateQuestionBtn({
  option,
  selectedOption,
  setSelectedOption,
}: {
  option: IOption;
  selectedOption: string | null;
  setSelectedOption: (value: any) => void;
}) {
  const [label, setLabel] = useState(option.label);

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setSelectedOption((prevSelected: any) =>
      prevSelected === value ? null : value
    );
  };

  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");

  const delOption = async () => {
    setIsSpinner(true);
    await deleteOption(option.id!);
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
      className="form-group d-flex  align-items-center"
    >
      <input
        type="radio"
        name="correctValue"
        value={label}
        checked={selectedOption === label}
        onChange={handleOptionChange}
        style={{ width: "17px", height: "17px" }}
        disabled={false}
      />
      <input
        type="hidden"
        name={`options[${option.id}][id]`}
        value={option.id}
      />
      <input
        style={{ width: "150px" }}
        type="text"
        className="form-control"
        placeholder="Label: E.g. A"
        name={`options[${option.id}][label]`}
        defaultValue={option.label}
        onChange={(e: any) => setLabel(e.target.value)}
      />
      <input
        style={{ width: "720px" }}
        type="text"
        className="form-control"
        placeholder="Option ..."
        name={`options[${option.id}][description]`}
        defaultValue={option.description}
      />
      {isSpinner ? (
        <span className="spinner-border text-success" role="status" />
      ) : (
        <i onClick={() => delOption()} className="material-icons">
          delete
        </i>
      )}
    </div>
  );
}
