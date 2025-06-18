import Hello from "../images/hello.png";
import { ReactTyped } from "react-typed";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function HomePage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div id="home" className="container">
      <header className="py-6 flex items-center justify-between">
        <h2 className="font-logo font-extrabold tracking-wide text-3xl">
          abdulrrahmann.
        </h2>
        <div className="gap-12 hidden sm:flex">
          <a
            className="text-light text-lg tracking-wide font-medium"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-light text-lg tracking-wide font-medium"
            href="#about-me"
          >
            About Me
          </a>
          <a
            className="text-light text-lg tracking-wide font-medium"
            href="#work"
          >
            My Works
          </a>
          <a
            className="text-light text-lg tracking-wide font-medium"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <TiThMenu
          className="cursor-pointer sm:hidden"
          size={40}
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        />
        {openMenu && (
          <div
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
            className="flex flex-col fixed left-0 top-0 w-full h-full p-10 z-10 bg-black/90 sm:hidden gap-12"
          >
            <IoClose
              className="cursor-pointer"
              size={40}
              onClick={() => {
                setOpenMenu((prev) => !prev);
              }}
            />
            <a
              className="text-light text-lg tracking-wide font-medium border-b-2 pb-2 border-gray"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-light text-lg tracking-wide font-medium border-b-2 pb-2 border-gray"
              href="#about-me"
            >
              About Me
            </a>
            <a
              className="text-light text-lg tracking-wide font-medium border-b-2 pb-2 border-gray"
              href="#work"
            >
              My Works
            </a>
            <a
              className="text-light text-lg tracking-wide font-medium border-b-2 pb-2 border-gray"
              href="#contact"
            >
              Contact
            </a>
          </div>
        )}
      </header>
      <main className="h-[100% - 1.5rem] flex gap-20 items-center">
        <div className="w-full sm:w-2/3 py-15 md:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl/12 font-black">
            Hello, I am <span className="text-primary">Abdulrrahman</span>. I'm
            a <span className="uppercase">Front-end</span>{" "}
            <span className="text-primary">Developer</span>
          </h2>
          <h2 className="mt-10 text-3xl sm:text-4xl md:text-5xl font-black">
            I create responsive websites using the latest web technologies{" "}
            <br />
            like{" "}
            <ReactTyped
              className="text-primary"
              strings={[
                "React",
                "Tailwind CSS",
                "Bootstrap",
                "CSS",
                "JavaScript",
                "Github",
              ]}
              typeSpeed={90}
              backSpeed={100}
              loop
            />
          </h2>
        </div>
        <div className=" w-1/3 hidden sm:block">
          <img className="w-full" src={Hello} alt="" />
        </div>
      </main>
      <a
        href="#about-me"
        className="block w-fit mx-auto mt-10 text-gray-500 animate-bounce"
      >
        Scroll Down <MdOutlineKeyboardArrowDown className="mx-auto text-3xl" />
      </a>
    </div>
  );
}

export default HomePage;
