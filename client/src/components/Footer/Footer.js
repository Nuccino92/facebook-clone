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
      <div style={{ fontWeight: "bolder", fontSize: 31, marginTop: "7px" }}>
        This is not facebook, please do not enter your facebook information
      </div>
    </div>
  );
};

export default Footer;
