import portfolio1 from "@/assets/img1.png";
import portfolio2 from "@/assets/img2.png";
import portfolio3 from "@/assets/img3.png";
import portfolio4 from "@/assets/img4.png";
import defaultImg from "@/assets/default.webp";

const categories = [
  { name: "Mobile", image: portfolio1, count: "2.4k shots", stacked: true },
  { name: "Typography", image: portfolio4, count: "1.8k shots", stacked: false },
  { name: "Product Design", image: portfolio2, count: "3.1k shots", stacked: true },
  { name: "Web Design", image: portfolio3, count: "4.2k shots", stacked: true },
];

const CategoryBrowse = () => {
  return (
    <section className="py-16 border-b border-border">
      <div className="text-center pt-4 pb-8">
        <img
          src={defaultImg}
          alt="Danny Amacher"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mx-auto mb-2 sm:mb-4"
        />

        <h6 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-black mb-1 sm:mb-2">
          <span className="font-serif italic">Danny Amacher</span>
        </h6>

        <p className="text-sm sm:text-base md:text-lg font-light text-gray-400 mb-2 sm:mb-4">
          SaaS Product Design + Design Systems 👋🏼 ✨
        </p>

        <button className="bg-blue-600 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition">
          Get in touch
        </button>
      </div>
      <h3 className="text-lg sm:text-xl md:text-xl font-bold text-foreground mb-6 sm:mb-8 text-center">
        More By Danny Amacher
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative">
              {cat.stacked && (
                <>
                  <div className="absolute inset-0 rounded-xl bg-secondary border border-border rotate-2 translate-x-1 translate-y-1 -z-20" />
                  <div className="absolute inset-0 rounded-xl bg-secondary border border-border rotate-1 translate-x-0.5 translate-y-0.5 -z-10" />
                </>
              )}

              <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-secondary transition-transform duration-200 group-hover:scale-[1.02] relative z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-2 sm:mt-3 text-center">
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {cat.name}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {cat.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBrowse;
