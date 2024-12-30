export default function Sidebar({ onNavigate }) {
    const sections = [
        { id: 'intro', icon: '🏠', label: 'Intro' },
        { id: 'mychat', icon: '💬', label: 'Chat' },
        { id: 'experience', icon: '📚', label: 'Experience' },
        { id: 'projects', icon: '💻', label: 'Projects' },
        { id: 'skills', icon: '🛠️', label: 'Skills' },
        { id: 'about', icon: 'ℹ️', label: 'About' },
        { id: 'footer', icon: '🔗', label: 'Footer' },
    ];

    return (
        <aside className="fixed top-0 left-0 z-40 w-16 h-screen bg-gray-900 flex flex-col items-center py-4 space-y-6">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="relative group cursor-pointer"
                    onClick={() => onNavigate(section.id)}
                >
                    <div className="text-white text-lg">{section.icon}</div>
                    <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        {section.label}
                    </div>
                </div>
            ))}
        </aside>
    );
}
