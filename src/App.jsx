import logo from "./assets/logo.svg";
import heroImg from "./assets/illustration-mockups.svg";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="sm:bg-[url('./assets/bg-mobile.svg')] bg-[url('./assets/bg-desktop.svg')] bg-cover bg-no-repeat bg-[#674baf] min-h-screen">
        <div className="md:p-10">
          <header>
            <nav>
              <img src={logo} alt="" />
            </nav>
          </header>
          <main>
            <div className="md:flex ">
              <div className="flex justify-center items-center  flex-grow  p-6">
                <img
                  className="md:w-full md:min-w-[650px] object-contain"
                  src={heroImg}
                  alt=""
                />
              </div>
              <div className=" flex flex-col justify-center items-center   flex-grow  p-6 text-white gap-5 ">
                <h1 className="text-3xl font-bold leading-10">
                  Build The Community Your Fans Will Love
                </h1>
                <p className="  leading-5">
                  Huddle re-imagines the way we build communities. You have a
                  voice, but so does your audience. Create connections with your
                  users as you engage in genuine discussion.
                </p>
                <button className="bg-[#e882e8] w-30 h-10 hover:shadow-md rounded-4xl cursor-pointer">
                  Register
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-1.5 md:float-right gap-5">
              <span className="border-white border p-2 rounded-4xl cursor-pointer text-white hover:text-[#e882e8] hover:border-[#e882e8]">
                <Facebook />
              </span>
              <span className="border-white border p-2 rounded-4xl cursor-pointer text-white hover:text-[#e882e8] hover:border-[#e882e8]">
                <Twitter />
              </span>
              <span className="border-white border p-2 rounded-4xl cursor-pointer text-white hover:text-[#e882e8] hover:border-[#e882e8]">
                <Instagram />
              </span>
            </div>
          </main>
        </div>
        <footer className="text-center text-[13px] text-white">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://www.linkedin.com/in/arham-ali-4a1658279/">
              Arham Ali
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
