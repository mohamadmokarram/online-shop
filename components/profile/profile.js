import Image from "next/image";
import profileImg from "@/assets/black&white-profile.jpg";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile-container z-20">
      <figure id="profile">
        <Image
          src={profileImg}
          alt="front end developer"
          width={640}
          height={640}
        />
        <div className="profile-links">
          <Link
            target="_blank"
            href="https://www.instagram.com/mokaram_frontdeveloper/">
            <FaInstagram />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mohamad-mokaram-05b873200/">
            <FaLinkedin />
          </Link>
          <Link target="_blank" href="https://github.com/mohamadmokarram">
            <FaGithub />
          </Link>
        </div>
        <div className="developer">
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </div>
      </figure>
    </div>
  );
}
