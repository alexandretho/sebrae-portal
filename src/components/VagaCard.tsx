import { type Vaga } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusConfig: Record<string, { label: string; className: string }> = {
  aberto: { label: 'Aberto', className: 'bg-[hsl(var(--sebrae-green))] text-white border-transparent hover:bg-[hsl(var(--sebrae-green))]/90' },
  encerrado: { label: 'Encerrado', className: 'bg-muted text-muted-foreground border-transparent hover:bg-muted' },
  em_breve: { label: 'Em breve', className: 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] border-transparent hover:bg-[hsl(var(--accent))]/90' },
};

const VagaCard = ({ vaga }: { vaga: Vaga }) => {
  const status = statusConfig[vaga.status];

  return (
    <div className="group bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs font-mono text-muted-foreground tracking-wide">{vaga.codigo}</span>
        <Badge className={status.className}>{status.label}</Badge>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
        {vaga.titulo}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{vaga.descricao}</p>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          {vaga.localidade}, {vaga.estado}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(vaga.dataEncerramento).toLocaleDateString('pt-BR')}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link to={`/documentos/${vaga.codigo}`}>
            <FileText className="w-3.5 h-3.5 mr-1" />
            Comunicados
          </Link>
        </Button>
        {vaga.status === 'aberto' && (
          <Button size="sm" className="flex-1 bg-[hsl(var(--sebrae-blue))] hover:bg-[hsl(var(--sebrae-blue-dark))]">
            Inscrição
          </Button>
        )}
      </div>
    </div>
  );
};

export default VagaCard;
