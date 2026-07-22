import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = async () => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsAudioPlaying(true);
      } catch (error) {
        console.warn("Background audio could not start:", error);
        setIsAudioPlaying(false);
      }
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navContainerRef.current;
      if (!nav) return;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        nav.classList.remove("floating-nav");
      } else {
        setIsNavVisible(currentScrollY < lastScrollYRef.current);
        nav.classList.add("floating-nav");
      }
      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <a href="#top" aria-label="Back to top">
              <img src="/img/logo.png" alt="JUSTFUN" className="w-10" />
            </a>

            <Button
              id="product-button"
              title="Products"
              href="#features"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-hover-btn"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
              type="button"
              aria-label={isAudioPlaying ? "Pause background audio" : "Play background audio"}
              aria-pressed={isAudioPlaying}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
                preload="none"
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isAudioPlaying,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
