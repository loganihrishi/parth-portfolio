// workLists.ts
import logo from '../assets/logo.svg'
import img from "../assets/work1.svg";

// testimonials.ts
import img2 from "../assets/img2.svg";

export const navItems = [
    { name: "Home", link: "#" },
    { name: "Work", link: "#work" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export const workLists = [
    {
        logo: logo,
        img: img,
        title: "Publisher Prime",
        description: "This innovative project leverages cutting-edge technology to simulate flight conditions and principles in a virtual environment.",
        tags: ["ART DIRECTION", "AR", "INTERACTION", "3D MODELING"]
    },
    {
        logo: logo,
        img: img,
        title: "Publisher Prime",
        description: "This innovative project leverages cutting-edge technology to simulate flight conditions and principles in a virtual environment.",
        tags: ["ART DIRECTION", "AR", "INTERACTION", "3D MODELING"]
    },

];

export const testimonialsLeft = [
    {
        img: img2,
        message: "lorem ipsum."
    },
    {
        img: img2,
        message: "Nathan global mindset and technical prowess make him an invaluable asset."
    },
]

export const testimonialsRight = [
    {
        img: img2,
        message: "Nathan global mindset and technical prowess make him an invaluable asset."
    },
    {
        img: img2,
        message: "Nathan global mindset and technical prowess make him an invaluable asset."
    },
]