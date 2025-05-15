import { RiArrowDownSFill } from "@remixicon/react";

const ScrollDown = () => {
    return (
        <div className="scroll-down">
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                <RiArrowDownSFill />
            </button>
        </div>
    );
};

export default ScrollDown;