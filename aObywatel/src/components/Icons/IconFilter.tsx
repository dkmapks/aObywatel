type IconFilterProps = {
    width?: string;
    color?: string;
}

function IconFilter(props: IconFilterProps) {

    const fillColor = props.color || "#52575F";
    const iconWidth = props.width || "25px";

return <svg width={iconWidth} viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 3C24.2761 3 24.5 2.77614 24.5 2.5C24.5 2.22386 24.2761 2 24 2V3ZM5 3H24V2H5V3Z" fill={fillColor}/>
    <circle cx="3.5" cy="2.5" r="2" stroke={fillColor}/>
    <path d="M24 15C24.2761 15 24.5 14.7761 24.5 14.5C24.5 14.2239 24.2761 14 24 14V15ZM5 15H24V14H5V15Z" fill={fillColor}/>
    <circle cx="3.5" cy="14.5" r="2" stroke={fillColor}/>
    <path d="M1 8C0.723858 8 0.5 8.22386 0.5 8.5C0.5 8.77614 0.723858 9 1 9V8ZM20 8H1V9H20V8Z" fill={fillColor}/>
    <circle cx="21.5" cy="8.5" r="2" transform="rotate(180 21.5 8.5)" stroke={fillColor}/>
    <path d="M1 20C0.723858 20 0.5 20.2239 0.5 20.5C0.5 20.7761 0.723858 21 1 21V20ZM20 20H1V21H20V20Z" fill={fillColor}/>
    <circle cx="21.5" cy="20.5" r="2" transform="rotate(180 21.5 20.5)" stroke={fillColor}/>
    </svg>
    
    ;
}

export default IconFilter;