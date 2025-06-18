import { BsHeartFill } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrYoutube } from "react-icons/gr";
function FooterPage() {
  return (
    <section
      id="footer"
      className="text-center py-14 bg-slate-900 rounded-t-xl"
    >
      <div className="flex gap-8 justify-center">
        <a className="bg-gray-800 p-3 rounded-full transition-colors hover:text-[#4078c0] duration-500" href="https://github.com/abdulrrahmann" target="_blank"><GrGithub size={30} /></a>  
        <a className="bg-gray-800 p-3 rounded-full transition-colors hover:text-[#0a66c2] duration-500" href="https://linkedin.com" target="_blank"><TiSocialLinkedin size={30} /></a>
        <a className="bg-gray-800 p-3 rounded-full transition-colors hover:text-red-500 duration-500" href="https://youtube.com " target="_blank"><GrYoutube size={30} /></a>
        
        
      </div>
      <p className="md:text-lg lg:text-xl font-semibold tracking-wider text-neutral-150 my-6">
        Made With <BsHeartFill className="inline" fill="red" /> by{" "}
        <span className="text-primary">Abdulrrahman</span>
      </p>
      <p className="md:text-lg lg:text-xl font-semibold tracking-wider text-neutral-150">
        Copyright &copy; {new Date().getFullYear()} All Right Reserved
      </p>
    </section>
  );
}

export default FooterPage;
