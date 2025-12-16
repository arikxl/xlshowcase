import { LocationItem } from "@/types/types";

export const navList = [

    {
        id: 1003,
        title: 'Apps',
        type:'finder'
    },
    {
        id: 1005,
        title: 'Resume',
        type:'resume'
    },
    {
        id: 1002,
        title: 'Contact',
        type: 'contact',
    },
]



const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Showcase", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Talks", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const talkPosts = [
    {
        id: 4,
        date: "01/01/2026",
        title: "My Youtube Channel - 100 JS Projects",
        image: "",
        iframeSrc: 'https://www.youtube.com/embed/videoseries?si=NjIM18jXFv-I1-Bv&amp;list=PLzuqPsaGWZS4mhQbSHgJHZW_UdrgMWZjh',
        link: "https://youtube.com/playlist?list=PLzuqPsaGWZS4mhQbSHgJHZW_UdrgMWZjh&si=64PNQ2wS1O13EVRa",
    },
    {
        id: 1,
        date: "24/01/2024",
        iframeSrc: 'https://www.youtube.com/embed/4Y-QlJ3dFc8?si=RMLTjnxnxDP0BZ0N',
        title:
        "My AI Adventure - Negev Web Developers",
        image: "https://res.cloudinary.com/arikxl/image/upload/v1764859339/Ella2023/gv8tr2nylvjig2kqrktp.png",
        link: "https://www.youtube.com/watch?v=4Y-QlJ3dFc8&t=1s",
    },
    {
        id: 3,
        date: "19/12/2024",
        title: "My AI Adventure 2  - JavaScript Israel",
        image: "",
        iframeSrc: 'https://www.youtube.com/embed/KgV-L2jiU8Y?si=bZ8nCVCD0tJ99kt3',
        link: "https://www.youtube.com/watch?v=KgV-L2jiU8Y&t=1s",
    },
    {
        id: 2,
        date: "06/07/2023",
        title: "Programming Playtime - תכנות זה משחק ילדים",
        image: "",
        iframeSrc: 'https://www.youtube.com/embed/FC9fXjr-WMo?si=VG6j6JCIZrC38AvC',
        link: "https://www.youtube.com/watch?v=FC9fXjr-WMo&t=1s",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Python"],
    },
    {
        category: "Database & ORM",
        items: ["MongoDB", "PostgreSQL","Prisma"],
    },
    {
        category: "Styling & Animation",
        items: ["Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
        category: "Design & Creative",
        items: ["Figma", "Canva", "Midjourney"],
    },
    {
        category: "AI Integration", 
        items: [
            "Vercel AI SDK",
            "OpenAI API",   
            "v0.dev"       
        ],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#24292e",
        link: "https://github.com/arikxl",
    },
    {
        id: 2,
        text: "Email",
        icon: "/icons/gmail-white.svg",
        bg: "#EA4335",
        link: "mailto:arikxl@gmail.com?subject=Shalom%20Arik",
    },
    {
        id: 3,
        text: "Whatsapp",
        icon: "/icons/whatsapp.svg",
        bg: "#25D366",
        link: "https://wa.me/972506860169",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0077B5",
        link: "https://www.linkedin.com/in/arik-alexandrov/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal11.jpg",
    },
    {
        id: 2,
        img: "/images/arik5.jpg",
    },
    {
        id: 3,
        img: "/images/gall67.jpg",
    },
    {
        id: 4,
        img: "/images/gal45.jpg",
    },
];

export {
    navIcons,
    dockApps,
    talkPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const APPS_LOCATION = {
    id: 1,
    type: "apps",
    name: "Apps",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Tattoo Studio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Arik-Tattoo.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This is a sleek concept website designed for a fictional tattoo studio, demonstrating a premium digital presence.",
                        "It features an integrated AI tool that allows users to generate unique tattoo sketches instantly.",
                        "Think of it as a digital playground—combining the moody vibe of a real studio with modern tech to visualize ink ideas.",
                        "It’s built with React(Vite) and integrates the Pixabay API to fetch gallery images dynamically, ensuring a fresh and diverse portfolio."
                    ],
                },
                {
                    id: 2,
                    name: "arik-tattoo.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://arik-tattoo.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "tattoo.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/proj33.jpg",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://github.com/arikxl/arik-tattoo",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "XLmath",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "XLmath.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "XL Math is a gamified educational web app designed to make practicing arithmetic fun and engaging.",
                        "Instead of boring worksheets, it motivates users with an XP scoring system, dynamic difficulty, and customizable color themes.",
                        "Think of it like a digital gym for your brain-where every solved problem earns you points and tracks your progress.",
                        "Built with LocalStorage, it instantly saves user stats and preferences without needing a backend."
                    ],
                },
                {
                    id: 2,
                    name: "xl-math.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://xl-math-yehonathan.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "XLmath.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://github.com/arikxl/xl-math",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "animxl",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Animation Studio App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This is a high-end frontend project focused on strong interactive animations and dynamic UX.",
                        "The interface comes to life with image tilt effects on mouse hover, creating a sense of depth and motion.",
                        "Inspired by the award-winning aesthetics of Zentry.com, I built this as a technical homage to their unique style.",
                        "It’s a showcase of precision coding, where smooth transitions meet complex visual mechanics."
                    ],
                },
                {
                    id: 2,
                    name: "animxl.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://animxl.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "animation-studio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/proj3.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://github.com/arikxl/animxl",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
    links: [
        // ▶ Project 1
        {
            id: 5,
            name:"KidKod",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Nike Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
                        "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                        "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                        "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "nike.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "nike.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "עתידים",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "טופ אדיו",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Animation Studio App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This is a high-end frontend project focused on strong interactive animations and dynamic UX.",
                        "The interface comes to life with image tilt effects on mouse hover, creating a sense of depth and motion.",
                        "Inspired by the award-winning aesthetics of Zentry.com, I built this as a technical homage to their unique style.",
                        "It’s a showcase of precision coding, where smooth transitions meet complex visual mechanics."
                    ],
                },
                {
                    id: 2,
                    name: "animxl.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://animxl.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "animation-studio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/proj3.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://github.com/arikxl/animxl",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};



const WORK_LOCATION = {
    id: 11,
    type: "work",
    name: "Work",
    icon: "/icons/job.svg",
    kind: "folder",
    children: [
        {
            id: 15,
            name: "KidKod",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-20 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Nike Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
                        "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                        "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                        "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "nike.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
                    position: "top-10 right-30",
                },
                {
                    id: 4,
                    name: "nike.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://google.com",
                    position: "top-60 right-50",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 16,
            name: "עתידים",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-45 right-50",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 17,
            name: "טופ אדיו",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-90",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Animation Studio App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This is a high-end frontend project focused on strong interactive animations and dynamic UX.",
                        "The interface comes to life with image tilt effects on mouse hover, creating a sense of depth and motion.",
                        "Inspired by the award-winning aesthetics of Zentry.com, I built this as a technical homage to their unique style.",
                        "It’s a showcase of precision coding, where smooth transitions meet complex visual mechanics."
                    ],
                },
                {
                    id: 2,
                    name: "animxl.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://animxl.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "animation-studio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/proj3.png",
                },
                {
                    id: 5,
                    name: "Code.git",
                    icon: "/images/plain2.png",
                    kind: "file",
                    fileType: "git",
                    href: "https://github.com/arikxl/animxl",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/arik.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/arik44.png",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/arik3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/arik2.jpg",
            description: [
                "Shalom! I’m Arik Alexandrov, a Full Stack Developer and Instructor who loves combining logic with creativity.",
                "I have a huge passion for UI and smooth animations. I love making websites that feel alive.",
                "I’m also a big fan of AI tools, using them to code faster and help my students learn better.",
                "When I’m finally offline, I’m usually gaming, hanging out with friends, or just recharging 🔋"
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations: Record<string, LocationItem> = {
    apps: APPS_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
    work: WORK_LOCATION
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};


export const WELCOME_FONT_WEIGHTS = {
    subtitle: { min: 200, max: 400, default: 200 },
    title: { min: 400, max: 900, default: 400 },
} as const;

export { INITIAL_Z_INDEX, WINDOW_CONFIG };