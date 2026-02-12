import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import img6 from "@/assets/img6.png";
const shots = [
  { src: img1, title: "Mobile App Concept", likes: 142 },
  { src: img2, title: "Analytics Dashboard", likes: 238 },
  { src: img3, title: "Landing Page", likes: 185 },
  { src: img4, title: "Typography Poster", likes: 97 },
  { src: img5, title: "Product Showcase", likes: 312 },
  { src: img6, title: "E-Commerce UI", likes: 164 },
];

const MoreByAuthor = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-9 w-9 bg-background shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-9 w-9 bg-background shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 px-10 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {shots.map((shot, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-[280px] cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden shadow-sm border border-border bg-secondary transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-md">
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-sm font-medium text-foreground truncate">
                  {shot.title}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  ♥ {shot.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreByAuthor;
