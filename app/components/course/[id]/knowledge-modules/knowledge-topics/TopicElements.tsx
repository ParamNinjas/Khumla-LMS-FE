"use client";
import { useState } from "react";
import AddTopicElement from "./AddTopicElement";

interface TopicElement {
  element: string;
  code: string;
}

function TopicElements() {
  const [showError, setShowError] = useState(false);
  const [topicElement, setTopicElement] = useState("");
  const [elementCode, setElementCode] = useState("");
  const [topicElements, setTopicElements] = useState<TopicElement[]>([]);

  return (
    <div className="mt-2">
      <label htmlFor="">Topic Elements</label>
      {topicElements &&
        topicElements.map((topic, index) => (
          <div
            style={{ columnGap: "20px" }}
            className="form-group d-flex mb-3 align-items-center"
            key={index}
          >
            <input
              type="text"
              className="form-control w-75"
              placeholder="Topic Element ..."
              name={`options[${index}][title]`}
              defaultValue={topic.element}
              onChange={(e) => {
                const updatedElements = [...topicElements];
                updatedElements[index].element = e.target.value;
                setTopicElements(updatedElements);
              }}
            />
            <input
              type="text"
              className="form-control w-25"
              placeholder="Element Code ..."
              name={`options[${index}][elementCode]`}
              defaultValue={topic.code}
            />
            <button className="btn p-0" type="button">
              <i
                style={{ fontSize: "25px" }}
                className="material-icons"
                onClick={() => {
                  setTopicElements(topicElements.filter((_, i) => i !== index));
                }}
              >
                delete
              </i>
            </button>
          </div>
        ))}
      <AddTopicElement
        topicElement={topicElement}
        setTopicElement={setTopicElement}
        elementCode={elementCode}
        setElementCode={setElementCode}
        setShowError={setShowError}
        topicElements={topicElements}
        setTopicElements={setTopicElements}
      />
      {showError && <p className="text-danger">Enter Topic Element</p>}
    </div>
  );
}
export default TopicElements;
