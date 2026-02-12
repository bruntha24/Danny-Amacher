import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Bookmark } from "lucide-react";
import defaultImg from "@/assets/default.webp";

const AuthorProfile = () => {
  return (
    <div className="sticky top-0 bg-background z-40 border-b border-border">

      <h2 className="text-2xl font-bold text-foreground mb-4 p-4">
        Ticketing - Capacity Helpdesk
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 px-4">

        <div className="flex items-center gap-4">
         <img
            src={defaultImg}
            alt="Danny Amacher"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-foreground">
              Danny Amacher
            </h3>

            <Badge
              variant="outline"
              className="text-success border-success/30 bg-success/10 text-xs font-medium"
            >
              Available for work
            </Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm"
          >
            Follow
          </Button>
        </div>
        <div className="flex items-center gap-3">
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button size="sm" className="rounded-xl">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
