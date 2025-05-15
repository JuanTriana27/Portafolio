import { RiInstagramLine, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const SocialIcons = () => {
    return (
        <div className="social-icons" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <a href="https://www.instagram.com/juan_triiana/" target="_blank" rel="noreferrer">
                <RiInstagramLine />
            </a>
            <a href="https://www.linkedin.com/in/juan-triana27/" target="_blank" rel="noreferrer">
                <RiLinkedinFill />
            </a>
            <a href="https://github.com/JuanTriana27" target="_blank" rel="noreferrer">
                <RiGithubFill />
            </a>
        </div>
    );
};

export default SocialIcons;