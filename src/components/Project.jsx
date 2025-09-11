import React from 'react'
import bharatmeet from '../assets/bharatMeet.png'
import portfolio from '../assets/portfolio.png'

const projects = [
    {
        title: "BharatMeet",
        description:
            "A full-stack web application that allows users to create and join public or private real-time meetings with messaging, video chat, screen sharing, and file sharing.",
        techStack: ["ReactJS", "MongoDB", "WebSocket", "WebRTC", "Tailwind CSS"],
        link: "https://github.com/iamadishiv1/BharatMeet",
        github: 'https://github.com/iamadishiv1/BharatMeet',
        image: bharatmeet,
    },
    {
        title: "Portfolio",
        description:
            "About This portfolio website is built using Tailwind CSS for sleek and responsive design, combined with Framer Motion for smooth animations and modern UI transitions.",
        techStack: ["React", "TailwindCSS", "Framer Motion", "Vite"],
        link: "https://iamadishiv1.github.io/Personal-Portfolio/",
        github: 'https://github.com/iamadishiv1/Personal-Portfolio',
        image: portfolio,
    },
    {
        title: "Language Learning Platform",
        description:
            "An online language learning platform is needed that offers courses, exercises, and quizzes to help users learn new languages. The system should support tracking progress and provide feedback on performance.",
        techStack: ["HTML", "Python", "Django", "SQLite"],
        link: "https://github.com/iamadishiv1/Language_Learning_Platform",
        github: 'https://github.com/iamadishiv1/Language_Learning_Platform',
        image: portfolio,
    },
    {
        title: "NewsAlexa",
        description:
            "Self-contained document scanning and matching system with a built-in credit system. Each user has a daily limit of 20 free scans, and additional scans require requesting more credits.",
        techStack: ["HTML", "CSS", "JavaScript", "NodeJS", "SQLite"],
        link: "https://github.com/iamadishiv1/CreditBasedDocScanner",
        github: 'https://github.com/iamadishiv1/CreditBasedDocScanner',
        image: portfolio,
    },
    {
        title: "TextUtils",
        description:
            "TextUtils is a handy text tool offering case conversion, copy, clear, and extra space removal, along with word and character counts and reading time estimates.",
        techStack: ["React.js", "Text Manipulation"],
        link: "https://github.com/iamadishiv1/TextUtils",
        github: 'https://github.com/iamadishiv1/TextUtils',
        image: portfolio,
    },
];

export const Project = () => {
    return (
        <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        projects.map((project, index) => (
                            <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                                <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl' />
                                <div className="p-6">
                                    <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                                    <p className='text-gray-300 mb-4'>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                                        ))}
                                    </div>
                                    <div className='flex gap-3'>
                                        <a href={project.link} target='_blank' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Projects</a>
                                        <a href={project.github} className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'>GitHub</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
