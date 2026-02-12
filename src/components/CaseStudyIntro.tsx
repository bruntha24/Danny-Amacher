import { MessageCircle, Share2, Info } from "lucide-react";

const CaseStudyIntro = () => {
  return (
   <section className="relative flex flex-col lg:flex-row lg:items-center justify-center min-h-[60vh] mt-8">
<div className="flex-1 space-y-2 max-w-3xl mx-auto">
  <p className="text-lg text-black leading-relaxed text-center">
    I designed a Helpdesk product during my time as design director at Capacity.
    <br /><br />
    Helpdesk is a core part of the Capacity platform because support issues that cannot be resolved with automation must be escalated to a [human] agent. We spent a lot of effort building personas around the helpdesk agents so we could understand their needs.
    <br /><br />
    This wasn't a time-boxed project with a clear end date. Rather, this was work that evolved over time as we released an MVP to the market, observed how customers used it, and adjusted and iterated over time. The following shows, not all, but many of the features we designed and shipped to the delight of our customers.
  </p>
</div>
<div className="flex lg:flex-col items-center gap-4 mt-4 lg:mt-0 lg:ml-56">
   <div className="group relative flex flex-col items-center cursor-pointer">
      <MessageCircle className="w-6 h-6 text-muted-foreground hover:text-foreground" />
      <span className="absolute lg:right-10 bottom-0 lg:bottom-auto whitespace-nowrap px-2 py-1 rounded-md bg-background text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Feedback
      </span>
    </div>  <div className="group relative flex flex-col items-center cursor-pointer">
      <Share2 className="w-6 h-6 text-muted-foreground hover:text-foreground" />
      <span className="absolute lg:right-10 bottom-0 lg:bottom-auto whitespace-nowrap px-2 py-1 rounded-md bg-background text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Share
      </span>
    </div>
 <div className="group relative flex flex-col items-center cursor-pointer">
      <Info className="w-6 h-6 text-muted-foreground hover:text-foreground" />
      <span className="absolute lg:right-10 bottom-0 lg:bottom-auto whitespace-nowrap px-2 py-1 rounded-md bg-background text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Shot Details
      </span>
    </div>
  </div>
</section>

  );
};

export default CaseStudyIntro;
