import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Flame,
  Sparkles,
  Box,
  Monitor,
  Film,
  Brush,
  Image,
  Smartphone,
  Type,
  Printer,
  FileText,
  Users,
  Layers,
  Briefcase,
  Rocket,
  Megaphone,
  BookOpen,
  Trophy,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(
    null
  );

  const menuClass =
    "absolute left-1/2 -translate-x-1/2 top-8 bg-background shadow-2xl rounded-2xl p-8 border border-border z-50";

  const itemClass =
    "flex items-center gap-3 hover:text-black cursor-pointer text-black";

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <span className="text-xl font-bold tracking-tight text-black">
          Dribbble
        </span>
        <div className="hidden md:flex items-center relative max-w-md flex-1 mx-8">
          <Input
            placeholder="What are you looking for?"
            className="rounded-full pl-4 pr-12 h-10 bg-secondary border-none text-sm text-black placeholder-black"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Search className="w-4 h-4 text-black" />
          </button>
        </div>
        <div className="flex items-center gap-6 relative">
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("explore")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="text-sm text-black hover:text-black cursor-pointer">
                Explore
              </span>
              {openMenu === "explore" && (
                <div className={`${menuClass} w-[320px]`}>
                  <ul className="space-y-3 text-sm text-black">
                    <li className={itemClass}><Flame size={16}/> Popular</li>
                    <li className={itemClass}><Sparkles size={16}/> New and Noteworthy</li>
                    <li className={itemClass}><Box size={16}/> Product Design</li>
                    <li className={itemClass}><Monitor size={16}/> Web Design</li>
                    <li className={itemClass}><Film size={16}/> Animation</li>
                    <li className={itemClass}><Brush size={16}/> Branding</li>
                    <li className={itemClass}><Image size={16}/> Illustration</li>
                    <li className={itemClass}><Smartphone size={16}/> Mobile</li>
                    <li className={itemClass}><Type size={16}/> Typography</li>
                    <li className={itemClass}><Printer size={16}/> Print</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("hire")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="text-sm text-black hover:text-black cursor-pointer">
                Hire Talent
              </span>
              {openMenu === "hire" && (
                <div className={`${menuClass} w-[380px]`}>
                  <ul className="space-y-4 text-sm text-black">
                    <li className={itemClass}><FileText size={16}/> Start Project Brief</li>
                    <li className={itemClass}><Users size={16}/> Browse Profiles</li>
                    <li className={itemClass}><Layers size={16}/> Explore Services</li>
                    <li className={itemClass}><Briefcase size={16}/> Post a Full-Time Job →</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("getHired")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="text-sm text-black hover:text-black cursor-pointer">
                Get Hired
              </span>
              {openMenu === "getHired" && (
                <div className={`${menuClass} w-[380px]`}>
                  <ul className="space-y-4 text-sm text-black">
                    <li className={itemClass}><FileText size={16}/> Browse Project Briefs</li>
                    <li className={itemClass}><Layers size={16}/> Add a Service</li>
                    <li className={itemClass}><Rocket size={16}/> Upgrade to Pro →</li>
                    <li className={itemClass}><Megaphone size={16}/> Advertise with Us →</li>
                    <li className={itemClass}><Briefcase size={16}/> Apply to Full-Time Jobs</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("community")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="text-sm text-black hover:text-black cursor-pointer">
                Community
              </span>
              {openMenu === "community" && (
                <div className={`${menuClass} w-[360px]`}>
                  <ul className="space-y-4 text-sm text-black">
                    <li className={itemClass}><BookOpen size={16}/> Blog</li>
                    <li className={itemClass}><Trophy size={16}/> Playoffs</li>
                    <li className={itemClass}><HelpCircle size={16}/> Help Center</li>
                  </ul>
                </div>
              )}
            </div>
            {user ? (
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-black font-medium">{user.name}</span>
              </div>
            ) : (
              <>
                <span className="text-black text-sm font-medium cursor-pointer">
                  <Link to="/signup">Sign up</Link>
                </span>
                <Button size="sm">
                  <Link to="/login">Log in</Link>
                </Button>
              </>
            )}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-4 text-sm text-black">
            <div>Explore</div>
            <div>Hire Talent</div>
            <div>Get Hired</div>
            <div>Community</div>
          </div>

          <div className="pt-4 border-t border-border space-y-4 flex flex-col gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-black font-medium">{user.name}</span>
              </div>
            ) : (
              <>
                <Link to="/signup" className="text-black font-medium">
                  Sign up
                </Link>
                <Button size="sm" className="w-full rounded-xl">
                  <Link to="/login">Log in</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
