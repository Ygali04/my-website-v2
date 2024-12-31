import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import 'devicon/devicon.min.css';

import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Front-End',
    skills: [
      { name: 'C', icon: 'devicon-c-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'Typescript', icon: 'devicon-typescript-plain colored' },
      { name: 'Swift', icon: 'devicon-swift-plain colored' },
      { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
    ],
  },
  {
    category: 'Back-End',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
    ],
  },
  {
    category: 'AI & ML',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
      { name: 'Pandas', icon: 'devicon-pandas-plain' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'Langchain', icon: 'devicon-langchain-plain colored' },       //FIND
      { name: 'Huggingface', icon: 'devicon-huggingface-plain colored' },   //FIND
      { name: 'Ollama', icon: 'devicon-ollama-plain colored' },             //FIND
    ],
  },
  {
    category: 'Cloud & Distributed',
    skills: [
      { name: 'Google Cloud', icon: 'devicon-googlecloud-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Digital Ocean', icon: 'devicon-digitalocean-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'Golang', icon: 'devicon-go-plain colored' },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills-container py-20 px-6">
      <h1 className="text-3xl font-bold text-center text-white mb-10">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">{category.category}</h2>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="group relative">
                  <i className={`${skill.icon} text-4xl`} data-tooltip-id={skill.name}></i>
                  <span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-slate-600 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
