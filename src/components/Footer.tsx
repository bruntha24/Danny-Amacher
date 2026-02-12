const footerLinks = {
  "For designers": ["Go Pro!", "Explore design work", "Design blog", "Overtime podcast"],
  "Hire talent": ["Post a job opening", "Post a freelance project", "Search for designers"],
  "Inspiration": ["Graphic design", "Product design", "Web design", "Animation"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="text-xl font-bold tracking-tight text-black">
              Dribbble
            </span>
            <p className="text-sm mt-3 leading-relaxed text-black">
              Dribbble is the world's leading community for creatives to share, grow, and get hired.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4 text-black">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-black hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-black">
          <div className="flex items-center gap-4 text-sm">
            <span>© 2026 Dribbble</span>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>

          <div className="flex items-center gap-6">
            {["𝕏", "Facebook", "Instagram", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-black hover:underline"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          {["Jobs", "Designers", "Freelancers", "Tags", "Resources"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-black hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
