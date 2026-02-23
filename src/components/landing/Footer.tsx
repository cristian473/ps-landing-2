export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Puro Software. Todos los derechos reservados.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="/privacidad" className="hover:text-primary transition-colors">Privacidad</a>
        <a href="/terminos" className="hover:text-primary transition-colors">Términos</a>
        <a href="https://www.linkedin.com/company/puro-software" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
    </div>
  );
}
