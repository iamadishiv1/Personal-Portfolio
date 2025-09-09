import React from 'react'

const education = [
  {
    degree: "Bachelor of Technology (BTech)",
    institution: "Lovely Professional University",
    year: "2021 - 2025",
    description: "Graduated with a strong foundation in critical thinking and problem-solving.",
    icon: "🎓",
  },
  {
    degree: "Senior Secondary (11th-12th) ",
    institution: "Laxmi Rajdeo +2 School",
    year: "2018 - 2020",
    description: "Completed my Senior Secondary education with a focus on Science and Mathematics",
    icon: "🎓",
  },
  {
    degree: "Secondary (10th)",
    institution: "High Cross Public School",
    year: "2017",
    description: "Completed my Secondary education with a focus on Science, Englishand Mathematics.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Research Intern",
    company: "Tata Consultancy Services",
    year: "Feb 2025 - May 2025",
    description: "Researched Android Automotive OS components: Instrument Cluster (Speedometer) & IVI (Infotainment).",
    icon: "💼",
  },
  {
    role: "Android Developer",
    company: "Google Developer Student Club - LPU",
    year: "Jun 2023 - Sep 2024",
    description: "Developed and optimized Android Applications, enhancing user experience.",
    icon: "💻",
  },
];

export const Education = () => {
  return (
    <section id="education" className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education Section  */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {
              education.map((edu, index) => (
                <div className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6">
                  <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                    <p className='text-gray-300'>{edu.institution}</p>
                    <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                    <p className='text-gray-300 mt-2'>{edu.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* Experience Section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                  <p className='text-gray-300'>{exp.company}</p>
                  <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                  <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
