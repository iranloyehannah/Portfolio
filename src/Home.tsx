import { Typewriter } from "react-simple-typewriter";
import Hannah from "./assets/Images/Ih.png";
import { useEffect, useRef, useState } from "react";

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }: HomeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="home"
      ref={sectionRef}
      className="max-w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0 px-4"
    >
      <div
        className={`max-w-xl flex flex-col items-center justify-center gap-6 ${
          isVisible ? "slide-in-left" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-2">
          <h1
            className="font-bold text-5xl md:text-7xl"
            style={{
              color: darkMode ? "#E0F2FE" : "#0C4A6E",
              animation: "fadeIn 1s ease-out",
            }}
          >
            Hi, I'm
          </h1>
          <h1 className="py-2 text-5xl md:text-7xl font-bold gradient-text">
            Iranloye Hannah
          </h1>
        </div>

        <div className="mt-4">
          <h2
            className="text-xl md:text-2xl font-bold"
            style={{
              fontFamily: "monospace",
              color: darkMode ? "#7DD3FC" : "#0284C7",
              minHeight: "3rem",
            }}
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "Virtual Assistant",
                "Customer relationship Mgt.",
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
        <div className="w-full max-w-3xl">
          <p
            className="text-left text-lg leading-relaxed"
            style={{
              color: darkMode ? "#BAE6FD" : "#075985",
              animation: "fadeIn 1.2s ease-out",
            }}
          >
            I am a dedicated frontend developer focused on building clean,
            efficient, and responsive web interfaces. I enjoy transforming ideas
            into intuitive digital experiences and continuously improving my
            skills through modern tools, best practices, and real-world
            projects.
          </p>
        </div>
      </div>

      <div
        className={`flex flex-col items-center relative ${
          isVisible ? "slide-in-right" : "opacity-0"
        }`}
      >
        <div className="relative overflow-visible">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] opacity-20 dark:opacity-30 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#7DD3FC] to-[#38BDF8] opacity-30 dark:opacity-40 rounded-full blur-2xl float"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] opacity-30 dark:opacity-40 rounded-full blur-2xl float" style={{ animationDelay: "1s" }}></div>

          {/* Profile image container with animated border */}
          <div className="relative p-2 rounded-2xl hover-lift">
            <div
              className="rounded-full p-2"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #38BDF8, #0EA5E9, #0284C7)"
                  : "linear-gradient(135deg, #7DD3FC, #38BDF8, #0EA5E9)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 3s ease infinite",
              }}
            >
              <div
                className="rounded-full p-4"
                style={{
                  backgroundColor: darkMode ? "#0C4A6E" : "#E0F2FE",
                }}
              >
                <img
                  src={Hannah}
                  alt="Iranloye Hannah"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                  style={{
                    animation: "fadeIn 1.5s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
