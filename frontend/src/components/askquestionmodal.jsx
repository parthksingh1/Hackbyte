"use client";
import { useState } from "react";
import { Button, Modal } from "keep-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import PostQuestionForm from "./form";

export const AskquestionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={openModal}
        className="p-3 bg-[#ADFE8E] text-purple-800 rounded-lg font-semibold flex gap-4 items-center "
      >
        Ask Question <ChevronDownIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3 w-[50%]">
          <Modal.Content>
            <PostQuestionForm />
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
