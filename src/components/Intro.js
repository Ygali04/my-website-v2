import '../index.css';
import '../styles/Intro.css';

// Assets & icons
import { LinkedIn, Email } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { OpenInNewTab } from '../helpers/OpenInNewtab.js';

export default function Intro({ chatRef }) {
    const scrollToChat = () => {
        if (chatRef?.current) {
            chatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="intro relative">
            <div className="max-w-4xl bg-slate-900 rounded-xl shadow-md overflow-hidden card metallicss mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="shrink-0">
                        <img
                            className="h-96 w-full object-cover md:h-full md:w-96"
                            src={require('../assets/yahvin.JPG')}
                            alt="Yahvin Gali"
                        />
                    </div>
                    {/* Text and Social Links Section */}
                    <div className="p-11 flex-grow">
                        <h1 className="block mt-4 text-xl leading-tight font-bold text-gray-100">Yahvin Gali</h1>
                        <h2 className="mt-3 text-gray-200">Full Stack + MLE Dev</h2>
                        <h3 className="mt-3 text-gray-300">📍 Los Angeles, CA - USA 🇺🇸</h3>
                        <p className="mt-3 text-gray-200">End-to-End Generalist in Full Stack WebDev & LLM Research</p>
                        <div className="social mt-6 flex space-x-4">
                            <button
                                className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600"
                                onClick={() => window.location.href = 'mailto:yahvin@gmail.com'}
                            >
                                <Email />
                            </button>
                            <button
                                className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600"
                                onClick={() => OpenInNewTab('https://www.linkedin.com/in/yahvin-gali/')}
                            >
                                <LinkedIn />
                            </button>
                            <button
                                className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600"
                                onClick={() => OpenInNewTab('https://github.com/Ygali04')}
                            >
                                <GitHubIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bouncing Arrow Section */}
            <div className="arrow-container text-center mt-4 absolute left-1/2 transform -translate-x-1/2">
                <p
                    className="text-light-blue text-lg font-semibold backlit mb-2 cursor-pointer"
                    onClick={scrollToChat}
                >
                    Chat with me
                </p>
                <div className="bouncing-arrow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-light-blue animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 16l-4-4h8l-4 4z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
