import "./components.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

var currentTime = new Date();
var year = currentTime.getFullYear()


const Footer = () => {
  return (
    <div className="footer">
      <div className='links'>
        <a href="https://github.com/piyu-piyu" target="_blank" rel="noreferrer" ><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/piyush-kumar-subudhi-a8820a1a8/" target="_blank" rel="noreferrer" ><LinkedInIcon/></a>
        <a href="mailto:piyushsubudhi2003@gmail.com" target="_blank" rel="noreferrer" ><EmailIcon/></a> 
      </div>
      <div
      style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        © {year} Copyright: Made By Piyush
      </div>
    </div>
  );
};

export default Footer;