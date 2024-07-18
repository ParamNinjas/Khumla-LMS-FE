"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import MyVerticallyCenteredModal from "./Modal";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import { Badge, Modal } from "react-bootstrap";
import { useParams, usePathname, useRouter } from "next/navigation";
import { generateAudio } from "@/app/lib/actions/paraphrase";
import { useSearchParams } from "next/navigation";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any, key) => <TableRow data={data} key={key} />)}
      </tbody>
    </>
  );
};

export default TableBody;

const TableRow = ({ data }: { data: IParaPhraseResponseObject }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [closeLoader, setCloseLoader] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");
  const [audioGenerateModal, setAudioGenerateModal] = useState(false);

  const {
    id: courseId,
    moduleId,
    documentId,
  } = useParams<{
    id: string;
    moduleId: string;
    documentId: string;
  }>();

  useEffect(() => {
    setAudioGenerateModal(false);
    setCloseLoader(false);
  }, [refreshId]);

  const AudioGenerator = async (id: string, text: string) => {
    const payload = {
      paraphraseId: id,
      text: text,
      courseId,
      documentId,
      moduleId,
      documentTitle: title,
    };
    setAudioGenerateModal(true);
    await generateAudio(payload);
    const date = new Date().toString();
    router.replace(`${pathname}?title=${title}&refreshId=${date}`);
  };

  return (
    <>
      <Modal
        show={audioGenerateModal}
        onHide={() => setAudioGenerateModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            height: "300px",
          }}
        >
          <div className="spinner-border text-primary" role="status" />
          <p style={{ color: "#252525" }}>Generating Audio...</p>
        </Modal.Body>
      </Modal>

      <Modal
        show={closeLoader}
        onHide={() => setCloseLoader(false)}
        centered
        backdrop={false}
      >
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            height: "300px",
          }}
        >
          <div className="spinner-border text-primary" role="status" />
          <p style={{ color: "#252525" }}>Saving Your changes...</p>
        </Modal.Body>
      </Modal>

      <MyVerticallyCenteredModal
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
        data={data}
        setCloseLoader={setCloseLoader}
      />

      <tr className="selected">
        <td
          style={{ width: "200px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div className="d-flex align-items-center ml-5">
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "350px",
              }}
              className="text-justify"
            >
              {data.title}
            </p>
          </div>
        </td>
        <td className="text-center js-lists-values-projects small">
          {data.status ? (
            <button className="btn btn-success rounded-pill px-4 py-2">
              Confirmed
            </button>
          ) : (
            <button className="btn btn-outline-success rounded-pill px-4 py-2">
              Pending
            </button>
          )}
        </td>
        <td className="text-center js-lists-values-projects small">
          <button
            onClick={() => AudioGenerator(data.id, data.description)}
            className="btn btn-success rounded-pill px-4 py-2"
          >
            Generate Audio
          </button>

          {data.audioBlobUrl && (
            <Badge pill bg="warning" className="success ml-2">
              Generated
            </Badge>
          )}
        </td>
        <td
          onClick={() => setOpenModal(true)}
          style={{ cursor: "pointer" }}
          className="text-center js-lists-values-projects small"
        >
          <i className="material-icons mr-8pt">edit</i>
        </td>
      </tr>
    </>
  );
};
