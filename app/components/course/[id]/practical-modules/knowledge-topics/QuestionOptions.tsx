import OptionDelete from "./OptionDelete";
import OptionAdd from "./OptionAdd";
import { IOption } from "@/app/interfaces/questions";
import { useState } from "react";

export default function QuestionOptions({ options }: { options?: IOption[] }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      {options &&
        options.map((option: IOption) => (
          <OptionDelete
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            key={option.id}
            option={option}
          />
        ))}
      <OptionAdd
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}
