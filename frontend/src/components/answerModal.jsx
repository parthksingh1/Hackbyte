"use client";
import { useState } from "react";
import { Button, Modal } from "keep-react";
import AnswerQuestion from "./answerQuestionForm.jsx";
import { Pencil2Icon } from "@radix-ui/react-icons";

export const AnswerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal} className="flex gap-2 items-center">
        <Pencil2Icon /> Answer
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3 w-[50%]">
          <Modal.Content>
            <AnswerQuestion />
          </Modal.Content>
          <Modal.Footer>
            <Button
              onClick={closeModal}
              size="sm"
              variant="outline"
              className="bg-slate-500 hover:bg-slate-400 text-white rounded-lg font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
