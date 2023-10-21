type QrDrawerProps = {
    content: string;
}

function QrDrawer({content}: QrDrawerProps) {
    return <div>
        {content}
    </div>;
}

export default QrDrawer;