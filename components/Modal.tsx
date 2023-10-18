import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const MyModal = ({ toggle }: { toggle: boolean }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (toggle) {
            handleOpen();
        } else {
            handleClose();
        }
    }, [toggle]);

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                </div>
            </Modal>
        </div>
    );
};

export default MyModal;
