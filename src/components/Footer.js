import React from 'react';
import { LinkedIn, Email } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/yahvin-gali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            href="https://github.com/Ygali04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="mailto:yahvin@gmail.com"
            className="hover:text-red-500"
          >
            <Email fontSize="large" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <HistoryEduIcon fontSize="large" />
          </a>
        </div>
        {/* Text Section */}
        <p className="text-sm text-gray-400">
        &copy; 2024 yahvingali.com
        </p>
      </div>
    </footer>
  );
}
