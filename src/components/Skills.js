import React, { useState } from 'react';
import 'devicon/devicon.min.css';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Front-End',
    skills: [
      { name: 'C#', icon: 'devicon-csharp-plain colored', level: 'general' },
      { name: 'Java', icon: 'devicon-java-plain colored', level: 'proficient' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 'proficient' },
      { name: 'React', icon: 'devicon-react-original colored', level: 'proficient' },
      { name: 'Express', icon: 'devicon-express-original', level: 'proficient' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 'proficient' },
      { name: 'HTML', icon: 'devicon-html5-plain colored', level: 'proficient' },
      { name: 'CSS', icon: 'devicon-css3-plain colored', level: 'proficient' },
      { name: 'Typescript', icon: 'devicon-typescript-plain colored', level: 'general' },
      { name: 'Swift', icon: 'devicon-swift-plain colored', level: 'general' },
      { name: 'Flutter', icon: 'devicon-flutter-plain colored', level: 'general' },
    ],
  },
  {
    category: 'Back-End',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', level: 'proficient' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 'proficient' },
      { name: 'Redis', icon: 'devicon-redis-plain colored', level: 'general' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'general' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored', level: 'proficient' },
      { name: 'C', icon: 'devicon-c-plain colored', level: 'proficient' },
    ],
  },
  {
    category: 'AI & ML',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored', level: 'proficient' },
      { name: 'NumPy', icon: 'devicon-numpy-plain colored', level: 'proficient' },
      { name: 'Pandas', icon: 'devicon-pandas-plain', level: 'proficient' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored', level: 'proficient' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored', level: 'general' },
      { name: 'Langchain', icon: 'devicon-langchain-plain colored', level: 'general' },
      { name: 'Huggingface', icon: 'devicon-huggingface-plain colored', level: 'general' },
      { name: 'Ollama', icon: 'devicon-ollama-plain colored', level: 'general' },
    ],
  },
  {
    category: 'Cloud & Distributed',
    skills: [
      { name: 'Google Cloud', icon: 'devicon-googlecloud-plain colored', level: 'proficient' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'general' },
      { name: 'Digital Ocean', icon: 'devicon-digitalocean-plain colored', level: 'proficient' },
      { name: 'Docker', icon: 'devicon-docker-plain colored', level: 'proficient' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored', level: 'general' },
      { name: 'Golang', icon: 'devicon-go-plain colored', level: 'general' },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain colored', level: 'proficient' },
    ],
  },
];

export default function Skills() {
  const [showGeneral, setShowGeneral] = useState(false);

  const toggleSkills = () => setShowGeneral(!showGeneral);

  return (
    <div className="skills-container py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-white mb-10">Skills</h1>
      
      {/* Slider */}
      <div className="flex justify-center mb-10">
        <label className="flex items-center cursor-pointer">
          <span className="text-white mr-2">Proficient</span>
          <input
            type="checkbox"
            className="sr-only"
            checked={showGeneral}
            onChange={toggleSkills}
          />
          <div className="relative">
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                showGeneral ? 'transform translate-x-full bg-blue-500' : ''
              }`}
            ></div>
          </div>
          <span className="text-white ml-2">General</span>
        </label>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">{category.category}</h2>
            <div className="flex flex-wrap gap-4">
              {category.skills
                .filter(skill => showGeneral || skill.level === 'proficient')
                .map((skill, idx) => (
                  <div key={idx} className="group relative">
                    <i className={`${skill.icon} text-4xl`}></i>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-slate-600 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
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
