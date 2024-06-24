"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function EditButton({ setShowModal }: any) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pending]);

  return (
    <button
      className="btn btn-success btn-block d-flex flex-column justify-content-center align-items-center"
      disabled={pending}
    >
      Submit
    </button>
  );
}
