export default function Stepper({ step, currentPath }: { step: number, currentPath: string }) {
  const steps = [
    { name: "Paraphrase Sections", stepper: 1, path: "/paraphrase-document" },
    { name: "Confirm Audio", stepper: 2, path: "/confirm-audio" },
    { name: "Upload Video Link", stepper: 3, path: "/upload-link" },
  ];
  return (
    <div className="container-fluid page__container my-2">
      <div className="progression-bar progression-bar--active-accent">
        {steps.map((st) => (
          <Step
            name={st.name}
            isActive={currentPath.indexOf(st.path) !== -1}
            isComplete={step > st.stepper}
          />
        ))}        
      </div>
    </div>
  );
}

const Step = ({
  name,
  isActive,
  isComplete,
}: {
  name: string;
  isActive: boolean;
  isComplete: boolean;
}) => {
  return (
    <a
      href="#"
      className={`progression-bar__item ${
        isActive &&
        "progression-bar__item--complete progression-bar__item--active"
      }
      ${isComplete && "progression-bar__item--complete"}`}
    >
      <span className="progression-bar__item-content">
        <i className="material-icons progression-bar__item-icon">
          {isComplete && "done"}
        </i>
        <span className="progression-bar__item-text mb-0 text-uppercase">
          <b>{name}</b>
        </span>
      </span>
    </a>
  );
};
