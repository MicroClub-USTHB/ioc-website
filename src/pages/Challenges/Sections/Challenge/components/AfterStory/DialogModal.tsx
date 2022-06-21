import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

// Styles
import afterStyle from "./DialogModal.module.scss";

interface AfterStoryProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  title: string;
  button: string;
}

const DialogModal = (props: AfterStoryProps) => {
  const { show, setShow, content, title, button } = props;
  const [Exit, setExit] = useState("");
  return (
    <Dialog
      className={`${afterStyle.modal} ${Exit && Exit}`}
      open={show}
      onClose={() => {
        setExit(afterStyle.exit);
        setTimeout(() => {
          setShow(false);
        }, 500);
      }}
    >
      <div className={afterStyle.content}>
        <Dialog.Title className={afterStyle.title}>{title}</Dialog.Title>
        <Dialog.Description>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Dialog.Description>
        <button
          className={afterStyle.button}
          disabled={!!Exit}
          onClick={() => {
            setTimeout(() => {
              setShow(false);
            }, 500);
            setExit(afterStyle.exit);
          }}
        >
          {button}
        </button>
      </div>
    </Dialog>
  );
};

export default DialogModal;
