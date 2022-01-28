import "./Footer.css";
import githubIcon from "./github-icon.png";

const Footer = () => {
  return (
    <div className="Footer">
      <a
        href="https://github.com/Nuccino92/facebook-clone"
        target="https://github.com/Nuccino92/facebook-clone"
      >
        <img src={githubIcon} alt="Github icon" />
      </a>
    </div>
  );
};

export default Footer;
