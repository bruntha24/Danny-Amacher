import Navbar from "@/components/Navbar";
import AuthorProfile from "@/components/AuthorProfile";
import CaseStudyIntro from "@/components/CaseStudyIntro";
import CaseStudySection from "@/components/CaseStudySection";
import ScreenshotBlock from "@/components/ScreenshotBlock";
import MoreByAuthor from "@/components/MoreByAuthor";
import CategoryBrowse from "@/components/CategoryBrowse";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import screenshot1 from "@/assets/screenshot1.png";
import screenshot2 from "@/assets/screenshot2.png";
import screenshot3 from "@/assets/screenshot3.png";
import screenshot4 from "@/assets/screenshot4.png";
import screenshot5 from "@/assets/screenshot5.png";
import screenshot6 from "@/assets/help.png";
import screenshot7 from "@/assets/best.png";
import screenshot8 from "@/assets/do.png";
import screenshot9 from "@/assets/mine.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-12">
        <AuthorProfile />
        <CaseStudyIntro />
        <CaseStudySection>
          <ScreenshotBlock 
            src={screenshot1} 
            alt="Helpdesk ticketing interface showing support ticket list" 
          />
        </CaseStudySection>

        <CaseStudySection>
          <ScreenshotBlock 
            src={screenshot2} 
            alt="Helpdesk ticketing interface showing support ticket list" 
          />
        </CaseStudySection>
        <CaseStudySection>
        <p className="mt-10 mb-10 text-center text-black text-lg leading-relaxed">
  Helpdesk agents can add new Q&A to a knowledge base <br />
  without leaving the helpdesk. <br /><br />
  The inquiry and response cards are the same component <br />
  used in the knowledge base.
</p>


          <ScreenshotBlock 
            src={screenshot3} 
            alt="Message composer with public reply and private comment tabs" 
          />
        </CaseStudySection>
        <CaseStudySection>
          <ScreenshotBlock 
            src={screenshot4} 
            alt="Live editing interface showing collaborative editing indicators" 
          />
       <div className="text-center pt-6 pb-6">
  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
    Helpdesk Message Composer UI
  </h3>
  <p className="text-lg md:text-lg leading-relaxed text-black mx-auto max-w-2xl">
    This part of the UI is a great example of when you need to 
    pack a ton of important functionality in a relatively small 
    space—all while making it look clean and enjoyable to use.
  </p>
</div>


        </CaseStudySection>
        <CaseStudySection>
          <p className="pt-6 pb-6 text-center text-black text-lg leading-relaxed mx-auto max-w-2xl">
  Voice of Customer and competitor analysis made it clear that we were going to need to support
  public and private messages. There were concerns about mixing public and private messages in
  the same space because it may be hard to orient yourself in the conversation. I opted
  to use the tab component to bifurcate the experience at the highest level. User testing confirmed that this decision
  cut down on cognitive load because users can trust that everything in one area is public, and everything in another area is all private.
</p>


          <ScreenshotBlock 
            src={screenshot5} 
            alt="Custom views management with reorder and rename functionality" 
          />
             <p className="pt-8 pb-8 text-center text-black text-lg leading-relaxed mx-auto max-w-2xl">
  @mentions - Search and tag users in helpdesk comments so that the recipient can be notified.
</p>


          <ScreenshotBlock 
            src={screenshot6} 
            alt="Custom views management with reorder and rename functionality" 
          />
            <p className="pt-6 pb-6 text-center text-black text-lg leading-relaxed max-w-3xl mx-auto">
  Live Editing – Some user pain we uncovered was that there was no visibility into what agent(s) were working on a specific ticket. 
  This often led to agents unknowingly editing a ticket at the same time, and that experience was confusing and frustrating if their work was undone or not saved.
</p>

<p className="pt-6 pb-6 text-center text-black text-lg leading-relaxed max-w-3xl mx-auto">
  I designed options for how we might show user attribution during live editing of fields 
  and situations where someone is actively typing in the message composer.
</p>



           <ScreenshotBlock 
            src={screenshot7} 
            alt="Custom views management with reorder and rename functionality" 
          /> 
    <h6 className="pt-8 text-2xl md:text-2xl font-semibold mt-10 mb-4 text-center text-black">
  Reorder and Rename Custom Views
</h6>

<p className="pt-6 pb-6 text-center text-black text-lg leading-relaxed max-w-3xl mx-auto">
  As we interviewed helpdesk support agents we kept hearing a similar theme. In addition to the default 
  filtered ticket views provided, agents wanted to create their own custom filtered views 
  and be able to save the views.
</p>

<p className="pt-6 pb-6 text-center text-black text-lg leading-relaxed max-w-3xl mx-auto">
  Not having to reconfigure special views several times a day gave a lot of time back to support agents.
</p>

           <div className="pt-6 ">
  <ScreenshotBlock 
    src={screenshot8} 
    alt="Custom views management with reorder and rename functionality" 
  />
</div>

<div className="pt-2 pb-6">
  <ScreenshotBlock 
    src={screenshot9} 
    alt="Custom views management with reorder and rename functionality" 
  />
</div>


<h4 className="text-center text-black text-2xl md:text-3xl mt-8 mb-4">
  That's it! Thanks for reading this far.
</h4>

<p className="text-center text-black mb-8">
  If you like this project, please hit that 🩷
</p>

        </CaseStudySection>
<CategoryBrowse />
        <MoreByAuthor />
        
      </main>

      <Footer />
    </div>
  );
};

export default Index;
