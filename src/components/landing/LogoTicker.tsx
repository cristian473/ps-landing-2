export default function LogoTicker() {
  const logos = [
    { name: 'FinCorp', icon: 'savings' },
    { name: 'TechBoost', icon: 'rocket_launch' },
    { name: 'NetScale', icon: 'hub' },
    { name: 'PowerSys', icon: 'bolt' },
    { name: 'Infinita', icon: 'all_inclusive' },
    { name: 'StackFlow', icon: 'layers' },
  ];

  return (
    <section className="bg-navy-dark py-12 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Empresas que ya escalan con nuestra tecnología
        </p>
      </div>
      
      <div className="relative w-full">
        {/* Fog Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-dark to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-dark to-transparent" />
        
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex animate-scroll gap-16 min-w-full items-center pl-16">
            {/* Original Set */}
            {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center gap-2"
              >
                <span className="material-icons text-4xl text-white">{logo.icon}</span>
                <span className="text-xl font-bold text-white">{logo.name}</span>
              </div>
            ))}
            
            {/* Duplicated Set for Seamless Loop */}
            {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-duplicate-${index}`}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center gap-2"
              >
                <span className="material-icons text-4xl text-white">{logo.icon}</span>
                <span className="text-xl font-bold text-white">{logo.name}</span>
              </div>
            ))}

             {/* Triplicated Set for Seamless Loop on large screens */}
             {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-triplicate-${index}`}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center gap-2"
              >
                <span className="material-icons text-4xl text-white">{logo.icon}</span>
                <span className="text-xl font-bold text-white">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
