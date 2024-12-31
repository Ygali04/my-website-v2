import '../styles/About.css'

export default function About() {
    const funFacts = [
      'Aspiring AI Engineer',
      'Ardent environmentalist',
      'Believer in upliftment through service',
      'Thalassophile',
      'Rookie food experimentalist who brews a mean Chai',
      'Loves to play Piano',
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">About Me</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-slate-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg text-center">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  