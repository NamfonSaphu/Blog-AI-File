import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://github.com/namfonsaphu" className="flex items-center gap-1 text-sm text-muted-foreground hover:underline">
        <ImGithub className="text-base" />
        Github
      </a>
      <a href="https://www.linkedin.com/in/namfon-saphu/" className="flex items-center gap-1 text-sm text-muted-foreground hover:underline">
        <ImLinkedin  className="text-base" />
        Linkedin
      </a>
      <a href="https://www.facebook.com/nanphon.sauphoo.5" className="flex items-center gap-1 text-sm text-muted-foreground hover:underline">
        <FaFacebook  className="text-base" />
        Facebook
      </a>
    </div>
  );
}
