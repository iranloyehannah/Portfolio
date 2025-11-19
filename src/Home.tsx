import { Typewriter } from "react-simple-typewriter";
import Hannah from "./assets/Images/Ih.png";

interface HomeProps {
  darkMode: boolean;
}


const Home = ({darkMode} : HomeProps) => {
  return (
    <main className="max-w-full min-h-screen  flex items-center justify-evenly ">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-7xl ">Hi, I'm </h1>
          <h1 className="text-7xl font-bold bg-gradient-to-br from-[#38BDF8] to-[#0369A1] bg-clip-text text-transparent">
            Iranloye Hannah 
          </h1>
        </div>

        <div className="mt-2">
          <h2 style={{ fontFamily: "monospace",
            fontSize: "2rem",
            fontWeight: "bold",
            color: darkMode ? "#ffffff" : "#0369A1",

           }}>
            <Typewriter
              words={[
                "Frontend Developer",
                "Virtual Assistant",
                "Customer relationship management",
                "Digital Marketer",
              ]}
              loop={0}
              cursor
              cursorStyle="▎"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center relative ">
        <div className="relative overflow-visible">
         { darkMode ? (
          <>
           <div className="absolute inset-0 -m-8 bg-gradient-to-br from-[#A5F3FC] to-[#0369A1] opacity-20 blur-3xl rounded-full animate-pulse"></div>

          <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#A5F3FC] to-[#0369A1] opacity-30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#0369A1] to-[#A5F3FC] opacity-30 rounded-full blur-2xl"></div>
          </>
         ): (
          <div></div>
         )}

          <div className="relative p-1  rounded-2xl ">
            <div className="bg-gray-900 rounded-full p-8 w-100 h-100">
              <img src={Hannah} alt={Hannah} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
