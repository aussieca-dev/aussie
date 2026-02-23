"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useParams } from "next/navigation";

// Project list
const projects = [
  // ======================== FUN PROJECTS ========================
  {
    title: "Anime Profile Card",
    description:
      "A cool anime-style card for your profile. Because why be normal when you can be anime?",
    image: "/projects/Anime_Profile_Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Anime_Profile_Card/index.html",
  },
  {
    title: "Circular Navigation Menu Magic Dark",
    description:
      "A round menu with dark vibes. Feels like Batman designed this.",
    image: "/projects/Circular Navigation Menu Magic Dark/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Circular Navigation Menu Magic Dark/index.html",
  },
  {
    title: "Circular Navigation Menu Magic",
    description: "Spinning menu made with code. No magician needed.",
    image: "/projects/Circular Navigation Menu Magic/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Circular Navigation Menu Magic/index.html",
  },
  {
    title: "CSS 9 Dots Menu",
    description:
      "The famous 9 dots—but now they wiggle. Google would be jealous.",
    image: "/projects/CSS 9 Dots Menu/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/CSS 9 Dots Menu/index.html",
  },
  {
    title: "CSS Animated Buttons with Hover Effects",
    description:
      "Buttons with more moves than your dance partner. Hover and enjoy.",
    image: "/projects/CSS Animated Buttons with Hover Effects/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/CSS Animated Buttons with Hover Effects/index.html",
  },
  {
    title: "CSS Creative Product Card UI Design",
    description: "A fancy product card. Looks like it belongs in an Apple ad.",
    image: "/projects/CSS Creative Product Card UI Design/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/CSS Creative Product Card UI Design/index.html",
  },
  {
    title: "CSS Only Image Comparison Slider",
    description:
      "Slide between images with pure CSS. No JavaScript, no stress.",
    image: "/projects/CSS Only Image Comparison Slider/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/CSS Only Image Comparison Slider/index.html",
  },
  {
    title: "Interactive Wallpaper Changer",
    description:
      "Tap to change wallpapers like you change outfits—daily and with style.",
    image: "/projects/Interactive_Wallpaper_Changer/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Interactive_Wallpaper_Changer/index.html",
  },
  {
    title: "MacBook Control Center",
    description:
      "Looks like a Mac, feels like a Mac, but made with love and HTML.",
    image: "/projects/MacBook_ControlCenter/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/MacBook_ControlCenter/index.html",
  },
  {
    title: "MacOS DockBar",
    description: "A mini Mac Dock that says, 'Hey, I'm fancy too!'",
    image: "/projects/MacOS DockBar/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "projects/MacOS DockBar/index.html",
  },
  {
    title: "Magic Loading",
    description: "Loading screens, but make them ✨ magical ✨.",
    image: "/projects/Magic Loading/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Magic Loading/index.html",
  },
  {
    title: "Modern Animated Menu Toggle Button",
    description:
      "Tap the burger, watch it flip. Menu buttons doing gymnastics.",
    image: "/projects/Modern Animated Menu Toggle Button/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Modern Animated Menu Toggle Button/index.html",
  },
  {
    title: "Movie Card",
    description: "A stylish movie card. Popcorn not included 🍿.",
    image: "/projects/Movie Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Movie Card/index.html",
  },
  {
    title: "NavBar",
    description:
      "The backbone of every website. This one's clean, responsive, and doesn't complain.",
    image: "/projects/NavBar/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/NavBar/index.html",
  },
  {
    title: "NFT Product Card",
    description:
      "A product card for your million-dollar pixel art. Looks rich, feels richer.",
    image: "/projects/NFT Product Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/NFT Product Card/index.html",
  },
  {
    title: "Profile Card UI Design",
    description: "Clean profile card to impress your crush. Or your recruiter.",
    image: "/projects/Profile Card UI Design/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Profile Card UI Design/index.html",
  },
  {
    title: "Right Click Panel",
    description: "Right-click and boom! A custom panel appears like a ninja.",
    image: "/projects/Right Click Panel/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Fun-Project"],
    url: "/projects/Right Click Panel/index.html",
  },

  // ======================== WEBSITE PROJECTS ========================
  {
    title: "ArcticBase",
    description: "Made by students who don't chill—except in the Arctic.",
    image: "/cetegoris/website/arctic_website.png",
    tags: ["Next.js", "Website"],
    url: "https://arcticbase.tech",
  },
  {
    title: "Dhrosubi",
    description: "Bags that save the planet (and still carry snacks).",
    image: "/cetegoris/website/dhrusubi.png",
    tags: ["Next.js", "Website"],
    url: "https://dhrosubi.vercel.app",
  },
  {
    title: "Jayesh Portfolio",
    description: "Football + frontend = this stylish portfolio goal! ⚽",
    image: "/cetegoris/website/jayesh.png",
    tags: ["Next.js", "Website"],
    url: "https://jayeshadiwal.vercel.app",
  },
  {
    title: "Roman Zecret",
    description:
      "A journal app that feels like you're typing top-secret stuff.",
    image: "/cetegoris/website/roman.png",
    tags: ["Python", "Terminal", "Website"],
    url: "https://github.com/RonitKaushal/roman-zecret",
  },
  {
    title: "Periodic",
    description: "Project created for Hackathon",
    image: "/cetegoris/website/periodic.png",
    tags: ["Next.js", "Website"],
    url: "https://periodic-psi.vercel.app",
  },
  {
    title: "Numeria",
    description: "A memory game that may fry your brain (in a fun way).",
    image: "/cetegoris/website/numeria.jpeg",
    tags: ["HTML", "Game", "Website"],
    url: "https://ronitkaushal.github.io/numeria/",
  },
  {
    title: "Datalans",
    description: "An AI dashboard that tries to outsmart your posts.",
    image: "/cetegoris/website/datalans.png",
    tags: ["Next.js", "Gemini API", "Website"],
    url: "https://datalans.vercel.app/dashboard",
  },
  {
    title: "Ronit Portfolio",
    description: "My OG portfolio. Humble beginnings with bold vibes.",
    image: "/cetegoris/website/portfolio.png",
    tags: ["HTML", "CSS3", "JavaScript", "Website"],
    url: "https://ronitkaushal.github.io/portfolio/",
  },

  // ======================== FIGMA PROJECTS ========================
  {
    title: "Buddyse Hope",
    description:
      "Designing kindness—one donation card at a time. Made with love and Figma.",
    image: "/cetegoris/figma/donation.png",
    tags: ["UI UX Design", "Figma"],
    url: "https://www.figma.com/proto/tt2ApuY5j0yGzAoKyVD6tD/Buddyse-Hope?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=cUe4CWrLxlHL3Smx-1",
  },
  {
    title: "Jashwar Haveli",
    description: "Because every palace deserves a pretty UI. Client said wow.",
    image: "/cetegoris/figma/haveli.png",
    tags: ["UI UX Design", "Figma"],
    url: "https://www.figma.com/proto/MYdhGfeZbfhCrfPsscoxi9/Untitled?page-id=0%3A1&node-id=1-3&t=i1W7xFML97BOefez-1",
  },
  {
    title: "Salon App",
    description:
      "Snip, style, swipe—get your haircut booked before your chai cools.",
    image: "/cetegoris/figma/salon.png",
    tags: ["UI UX Design", "Figma"],
    url: "https://www.figma.com/proto/xrgY5fVIaoJ2S3hVkg2dsv/Shear-Brilliance-App?page-id=0%3A1&node-id=1-2&p=f&viewport=-12%2C260%2C0.35&t=Ze1aB5dr4AdMjGxd-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    title: "Dhrosubi",
    description:
      "Saving the Earth, one stylish bag at a time. UI so fresh, even trees approved.",
    image: "/cetegoris/figma/dhrosubi.png",
    tags: ["UI UX Design", "Figma"],
    url: "https://www.figma.com/proto/jFmwM1PDWWo1rnoakGneMw/Dhrosubi---Landing-Page?page-id=0%3A1&node-id=1-2&p=f&viewport=284%2C25%2C0.31&t=orFgzLUfc78PhFHo-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    title: "Wheels & Wings",
    description: "Cars. Bikes. UI that goes vroom-vroom.",
    image: "/cetegoris/figma/wheels.png",
    tags: ["Figma"],
    url: "https://www.figma.com/proto/1eHe06Hrg8bOTyrAaMMP5j/Wings---Wheels?page-id=0%3A1&node-id=1-2&p=f&viewport=176%2C25%2C0.09&t=dy9u2LavlYD3LPDJ-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    title: "Folks Valley",
    description:
      "Make your own portfolio? Easy. This dashboard has it all—except coffee.",
    image: "/cetegoris/figma/folksvalley_project.png",
    tags: ["Figma"],
    url: "https://www.figma.com/proto/6saY6SWHR7qqA5QgxpiKfd/FolksValley-Dashboard?page-id=0%3A1&node-id=65-404&p=f&viewport=-99%2C130%2C0.48&t=2b3YSoYXZLQOJUMV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=65%3A404",
  },
  {
    title: "Forest Quest",
    description: "Hackathon dreams and pixel-perfect trees. Nature meets UI.",
    image: "/cetegoris/figma/forest.png",
    tags: ["Figma"],
    url: "https://www.figma.com/proto/5lVYeEzgo7RDcfRttXz4Bx/Untitled?page-id=0%3A1&node-id=1-2&t=w6TgSrZ6wgimD30m-1",
  },

  // ======================== GRAPHIC DESIGN PROJECTS ========================
  {
    title: "Ronit Kaushal",
    description: "If Photoshop had a LinkedIn—this would be the profile pic.",
    image: "/cetegoris/graphic_design/Ronit_Kaushal.png",
    tags: ["Graphic-Design", "Photoshop"],
    url: "NaH",
  },
  {
    title: "IBT Event",
    description:
      "Blockchain + Design = This flyer. Let's decentralize aesthetics.",
    image: "/cetegoris/graphic_design/IBT_ArtWork.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "COD Poster",
    description:
      "Call of Duty meets call of Canva. Gamer vibes, designed sharp.",
    image: "/cetegoris/graphic_design/COD_Poster.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Valorant poster",
    description: "Designed like a headshot. Boom. Eye candy for gamers.",
    image: "/cetegoris/graphic_design/Valorant_poster_CSGC.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Metamorphsis ADS",
    description: "When your Instagram feed needs a glow-up.",
    image: "/cetegoris/graphic_design/metaforest.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Metamorphsis ADS",
    description: "Another scroll-stopper from your favorite creative wizard.",
    image: "/cetegoris/graphic_design/metapc.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Valorant CSGC",
    description: "If Jett could design posters—this would be it.",
    image: "/cetegoris/graphic_design/Valorant_CSGC.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Character Day Flyer",
    description: "Because dressing up deserves designer flyers too.",
    image: "/cetegoris/graphic_design/Character_Day_Flyer v3.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "Mini miletrea",
    description: "Gaming event poster—now with 100% more hype.",
    image: "/cetegoris/graphic_design/Mini_miletrea_v2.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "PowerBI event",
    description: "Turning boring data workshops into spicy flyers.",
    image: "/cetegoris/graphic_design/PowerBI_event.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
  {
    title: "PowerBi Workshop",
    description: "Excel might be boring, but this flyer isn't.",
    image: "/cetegoris/graphic_design/PowerBi_Workshop_New v2.png",
    tags: ["Graphic-Design"],
    url: "NaH",
  },
];

export default function FilteredProjectsPage() {
  const { alias } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (alias && typeof alias === "string") {
      setSelectedTags([alias.toUpperCase()]);
    }
  }, [alias]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        project.tags.map((t) => t.toUpperCase()).includes(tag.toUpperCase())
      );
    return matchesSearch && matchesTags;
  });

  return (
    <div className="relative flex justify-center items-center flex-col h-auto w-full mt-20 px-2 sm:px-4">
      <Input
        className="hidden sm:flex justify-center items-center max-w-[700px] text-foreground rounded-full hover:bg-red-500 text-xl PoppinMedium p-6 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-10 w-full max-w-[1300px] projectContainer">
        {filteredProjects.length === 0 && (
          <p className="text-center text-primary/50 text-lg">
            No matching projects found.
          </p>
        )}
        {filteredProjects.map((project, index) => (
          <Card key={index} className="projectPin p-0 mb-3 bg-background">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-full object-cover m-0"
            />
            <div className="pt-2 px-2 md:px-4">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                {project.title}
              </h2>
              <p className="hidden md:block text-sm text-white mb-3">
                {project.description}
              </p>
              <div className="flex justify-start items-center w-full h-full flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className="PoppinMedium bg-accent text-white border-transparent"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
               {project.url !== "NaH" && (
                 <Link
                   href={project.url}
                   className="PoppinMedium flex justify-center items-center space-x-1 text-sm border bg-white text-black px-4 py-1 mb-2 md:mb-4 rounded-md"
                   target="_blank"
                 >
                   <p>Explore</p>
                   <ArrowUpRight size={20} />
                 </Link>
               )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

