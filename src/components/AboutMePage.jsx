import About from "../images/wireframing.svg";
import { MdOutlineFileDownload } from "react-icons/md";

function AboutMePage() {
  return (
    <section className="container py-30 flex gap-20" id="about-me">
      <div className="w-1/3 hidden sm:block py-20">
        <img className="w-full" src={About} alt="" />
      </div>
      <div className="w-2/3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl/12 font-black">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="my-4 md:text-lg lg:text-xl font-mono leading-7">
          Motivated Saudi front-end developer with a solid foundation in HTML,
          CSS, and JavaScript. Currently expanding skills in React and Tailwind
          CSS. Passionate about building responsive, user-friendly web
          interfaces and eager to gain real-world experience in a collaborative
          team environment.
        </p>
        <button className="btn-primary flex items-center gap-4">
        My Resume <MdOutlineFileDownload size={25} />
        </button>
      </div>
    </section>
  );
}

export default AboutMePage;
