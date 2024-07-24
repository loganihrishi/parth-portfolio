// workLists
import logo from '../assets/logo.svg'
import img from "../assets/work1.svg";

// about
import handstand from "../assets/handstand.jpeg"
import studying from "../assets/studying.jpeg"

// testimonials
import img2 from "../assets/img2.svg";

export const navItems = [
    { name: "Home", link: "#" },
    { name: "Work", link: "#work" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export const skillSets = [
    {
        type: "Languages",
        skills: ["Java", "Python", "C++", "SQL", "R", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
        type: "Frameworks",
        skills: ["React", "NextJS", "ExpressJS", "NodeJS", "JUnit", "Tailwind", "RESTful API"]
    },
    {
        type: "Developer Tools",
        skills: ["Git", "Docker", "VS Code", "PyCharm", "IntelliJ", "MongoDB", "Firebase", "Figma"]
    },
    {
        type: "Libraries",
        skills: ["Framer Motion", "GSAP", "OpenCV", "Matplotlib", "Three.js"]
    }
]

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

export const aboutData = {
    img1: studying,
    img2: handstand,
    firstLetter: "A",
    about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum autem, sunt pariatur molestias quisquam dolorum error corporis obcaecati quaerat, magni sapiente minus, ipsum vel officia alias officiis accusamus eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, maiores. Mollitia esse aliquam commodi debitis, vitae fugiat cum libero quibusdam, facilis blanditiis eligendi expedita deleniti, laboriosam reprehenderit laudantium laborum ratione? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quod. Perspiciatis dicta illo corporis voluptates harum sequi, consequatur eos quo ratione veritatis, rem dolores? Hic, atque distinctio. Nostrum, voluptatem. Modi?"
}

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