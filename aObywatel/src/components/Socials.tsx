import IconShare from './Icons/IconShare';
import IconQr from './Icons/IconQr';
import { Snackbar } from '@mui/material';
import { useState } from 'react';

const Socials = ({ showQr }: {showQr: (prev: unknown) => void}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-center gap-5">
            <div onClick={() => {
                if("clipboard" in navigator) {
                    setOpen(true);
                    setTimeout(() => setOpen(false), 3000);
                    navigator.clipboard.writeText(window.location.href);
                }
            }}>
                <IconShare />
            </div>
            <div onClick={
                () => {showQr((prev) => !prev)}
            }>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    message="Skopiowano link do schowka"
                />
                <IconQr />
            </div>
        </div>
    );
};

export default Socials;
