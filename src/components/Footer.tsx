import { Link } from 'react-router-dom';
import sebraeLogo from '@/assets/sebrae-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--sebrae-blue-dark))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={sebraeLogo} alt="Sebrae" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Serviço Brasileiro de Apoio às Micro e Pequenas Empresas. 
              Transformando o Brasil pelo empreendedorismo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Links Úteis</h4>
            <ul className="space-y-2">
              {['Portal Sebrae', 'Cursos Online', 'Consultorias', 'Fale Conosco'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Contato</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Central de Atendimento: 0800 570 0800</li>
              <li>Segunda a Sexta, 8h às 20h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sebrae — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
