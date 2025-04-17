interface Props {
    width?: string;
    height?: string;
}

const MenuIcon = ({ width, height }: Props) => {
    return (
        <div>
            <svg
                width={width ? width : "14"}
                height={height ? height : "14"}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="4" cy="4" r="2" fill="#A9A9A9" />
                <circle cx="4" cy="12" r="2" fill="#A9A9A9" />
                <circle cx="12" cy="4" r="2" fill="#A9A9A9" />
                <circle cx="12" cy="12" r="2" fill="#A9A9A9" />
            </svg>
        </div>
    );
};

export default MenuIcon;
