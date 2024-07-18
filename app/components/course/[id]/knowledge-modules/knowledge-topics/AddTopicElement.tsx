interface TopicElement {
  element: string;
  code: string;
}

export default function AddTopicElement({
  topicElement,
  setTopicElement,
  elementCode,
  setElementCode,
  setShowError,
  topicElements,
  setTopicElements,
}: {
  topicElement: string;
  setTopicElement: (element: string) => void;
  elementCode: string;
  setElementCode: (element: string) => void;
  setShowError: (value: boolean) => void;
  topicElements: TopicElement[];
  setTopicElements: (element: TopicElement[]) => void;
}) {
  return (
    <div
      style={{ columnGap: "20px" }}
      className="form-group d-flex mb-0 align-items-center"
    >
      <input
        type="text"
        className="form-control w-75"
        placeholder="Topic Element ..."
        value={topicElement}
        name={`options[${topicElements.length}][title]`}
        onChange={(e: any) => setTopicElement(e.target.value)}
        onClick={() => setShowError(false)}
      />
      <input
        type="text"
        className="form-control w-25"
        placeholder="Element Code ..."
        name={`options[${topicElements.length}][elementCode]`}
        value={elementCode}
        onChange={(e: any) => setElementCode(e.target.value)}
        onClick={() => setShowError(false)}
      />{" "}
      <button className="btn p-0" type="button">
        <i
          style={{ fontSize: "25px" }}
          className="material-icons"
          onClick={() => {
            if (topicElement !== "" && elementCode !== "") {
              const newElement = {
                element: topicElement,
                code: elementCode,
              };
              setTopicElements([...topicElements, newElement]);
              setTopicElement("");
              setElementCode("");
            } else {
              setShowError(true);
            }
          }}
        >
          add
        </i>
      </button>
    </div>
  );
}
