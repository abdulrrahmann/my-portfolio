import projectImg1 from "../images/projects/js.png";
import projectImg2 from "../images/projects/bootstrap.png";
import projectImg3 from "../images/projects/testimonials-grid-section.png";
import projectImg4 from "../images/projects/tip-calculator.png";
import projectImg5 from "../images/projects/accordion.png";
import projectImg6 from "../images/projects/time-tracking-dashboard.png";
import projectImg7 from "../images/projects/news-homepage.png";
import projectImg8 from "../images/projects/e-commerce.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    src: projectImg1,
    title: "Special Design Agency",
    description:
      "A dark-themed landing page for a creative agency. This project, built with JavaScript, features a minimalist and professional aesthetic.",
  },
  {
    id: 2,
    src: projectImg2,
    title: "Bondi - Bootstrap Theme",
    description:
      "A landing page for a creative agency built with Bootstrap. It features a navigation bar, a services section with icons, and a clean design.",
  },
  {
    id: 3,
    src: projectImg3,
    title: "Testimonials Grid Section",
    description:
      "A responsive grid layout showcasing user testimonials. The design uses different card sizes and colors to create a visually engaging layout.",
  },
  {
    id: 4,
    src: projectImg4,
    title: "Tip Calculator App",
    description:
      "An interactive tip calculator that computes the tip amount and total per person based on the bill, selected tip percentage, and number of people.",
  },
  {
    id: 5,
    src: projectImg5,
    title: "FAQ Accordion",
    description:
      "A clean and user-friendly FAQ section with an accordion interface that expands to show answers, enhancing user experience.",
  },
  {
    id: 6,
    src: projectImg6,
    title: "Time Tracking Dashboard",
    description:
      "A sleek dashboard UI for a time tracking application. Features a user profile and cards for different activities with daily, weekly, and monthly views.",
  },
  {
    id: 7,
    src: projectImg7,
    title: "News Homepage",
    description:
      "A modern, responsive news homepage with a multi-column layout, highlighting a main article and listing new and trending topics.",
  },
  {
    id: 8,
    src: projectImg8,
    title: "E-commerce Product Page",
    description:
      'A responsive e-commerce product page featuring a clean layout, image gallery, quantity selection, and an "Add to cart" functionality.',
  },
];

function WorkPage() {
  return (
    <section id="work" className="container py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
        My recent <span className="text-primary">works</span>
      </h2>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-gray-700 rounded-md relative overflow-hidden group"
              >
                <img src={project.src} alt={project.title} />
                <div className="absolute -top-full left-0 p-4 bg-black/60 w-full h-full transition-all duration-500 group-hover:top-0">
                  <h4 className="font-bold sm:text-lg lg:text-2xl">
                    {project.title}
                  </h4>
                  <p className="lg:text-lg mt-2 text-slate-300">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <p className="text-center text-gray-400 mt-8 text-md sm:text-lg">
        Want to see more? You can find all of my projects on{" "}
        <a
          href="https://github.com/abdulrrahmann"
          target="_blank"
          className="text-blue-400 hover:text-blue-600 transition"
        >
          my GitHub profile <FaExternalLinkAlt className="inline -mt-1" />
        </a>
        .
      </p>
    </section>
  );
}

export default WorkPage;
