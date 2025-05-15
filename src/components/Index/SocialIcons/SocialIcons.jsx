import { RiInstagramLine, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const SocialIcons = () => {
    return (
        <div className="social-icons" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noreferrer">
                <RiInstagramLine />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">
                <RiLinkedinFill />
            </a>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
                <RiGithubFill />
            </a>
        </div>
    );
};

export default SocialIcons;