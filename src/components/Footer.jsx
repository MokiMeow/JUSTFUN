import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa"

const socialLinks = [
  {
    href: "https://discord.com",
    icon: <FaDiscord className="h-5 w-5" />,
    label: "Discord"
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter className="h-5 w-5" />,
    label: "Twitter"
  },
  {
    href: "https://youtube.com",
    icon: <FaYoutube className="h-5 w-5" />,
    label: "YouTube"
  },
  {
    href: "https://medium.com",
    icon: <FaMedium className="h-5 w-5" />,
    label: "Medium"
  },
]

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-violet-600 to-indigo-600">
      {/* Top wave decoration */}
      <div className="absolute inset-x-0 -top-4">
        <svg
          className="h-4 w-full"
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1440 54V0C1440 0 1082.5 54 720 54C357.5 54 0 0 0 0V54H1440Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Copyright section */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <p className="text-sm font-medium text-white/90">
              ©Nova 2024. All rights reserved
            </p>
          </div>

          {/* Social links section */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={link.label}
                >
                  <div className="absolute -inset-2 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative text-white/90 transition-colors duration-300 hover:text-white">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-col items-center justify-center gap-2 md:items-end">
            <a
              href="#privacy-policy"
              className="text-sm font-medium text-white/90 transition-colors duration-300 hover:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm font-medium text-white/90 transition-colors duration-300 hover:text-white hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
