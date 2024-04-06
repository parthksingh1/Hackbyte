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
        className="p-3 bg-yellow-500 hover:bg-yellow-400 rounded-lg font-medium flex gap-4 items-center "
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
              color="secondary"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
