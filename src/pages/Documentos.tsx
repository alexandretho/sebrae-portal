import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Search, FileText, Download, Calendar, HardDrive, ChevronRight, ArrowLeft, Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getDocumentosByVaga, getVagaByCodigo, vagas, documentos,
  tipoDocLabel, tiposDocumento, type Documento
} from '@/data/mockData';

const tipoColors: Record<string, string> = {
  edital: 'bg-primary text-primary-foreground',
  alteracao: 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]',
  resultado: 'bg-[hsl(var(--sebrae-green))] text-white',
  convocacao: 'bg-secondary text-secondary-foreground',
  prova: 'bg-muted text-muted-foreground',
  gabarito: 'bg-muted text-muted-foreground',
};

const DocumentosPage = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const vaga = codigo ? getVagaByCodigo(codigo) : null;
  const allDocs = vaga ? getDocumentosByVaga(vaga.id) : documentos;

  const [search, setSearch] = useState('');
  const [tipoFilter, setTipoFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name'>('date');

  const filtered = useMemo(() => {
    let result = allDocs.filter((d) => {
      const matchSearch = !search || d.nome.toLowerCase().includes(search.toLowerCase());
      const matchTipo = tipoFilter === 'all' || d.tipo === tipoFilter;
      return matchSearch && matchTipo;
    });
    result.sort((a, b) => {
      if (sortBy === 'date') return new Date(b.dataModificacao).getTime() - new Date(a.dataModificacao).getTime();
      return a.nome.localeCompare(b.nome);
    });
    return result;
  }, [allDocs, search, tipoFilter, sortBy]);

  const activeTipos = useMemo(() => {
    const set = new Set(allDocs.map(d => d.tipo));
    return tiposDocumento.filter(t => set.has(t));
  }, [allDocs]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb + Title */}
      <div className="bg-[hsl(var(--sebrae-blue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Vagas</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">Documentação</span>
            {vaga && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white font-medium">{vaga.codigo}</span>
              </>
            )}
          </nav>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                {vaga ? vaga.titulo : 'Todos os Documentos'}
              </h1>
              {vaga && (
                <p className="text-white/70 text-sm">
                  {vaga.codigo} · {vaga.localidade}, {vaga.estado}
                </p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <Download className="w-4 h-4 mr-1.5" />
              Baixar Todos (ZIP)
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 w-full">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar documento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-9"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setTipoFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                tipoFilter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Todos
            </button>
            {activeTipos.map((t) => (
              <button
                key={t}
                onClick={() => setTipoFilter(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  tipoFilter === t
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tipoDocLabel[t]}
              </button>
            ))}
          </div>

          <div className="sm:ml-auto flex items-center gap-2">
            <button
              onClick={() => setSortBy('date')}
              className={`text-xs font-medium transition-colors ${sortBy === 'date' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Recentes
            </button>
            <span className="text-muted-foreground text-xs">|</span>
            <button
              onClick={() => setSortBy('name')}
              className={`text-xs font-medium transition-colors ${sortBy === 'name' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              A–Z
            </button>
          </div>
        </div>

        {/* Counter */}
        <p className="text-sm text-muted-foreground mb-4 tabular-nums">
          {filtered.length} {filtered.length === 1 ? 'documento' : 'documentos'}
        </p>

        {/* Document list */}
        {filtered.length > 0 ? (
          <div className="border border-border rounded-xl overflow-hidden bg-card divide-y divide-border">
            {filtered.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors group"
              >
                {/* PDF Icon */}
                <div className="shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-destructive" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {doc.nome}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(doc.dataModificacao).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3" />
                      {doc.tamanho}
                    </span>
                  </div>
                </div>

                {/* Type badge */}
                <Badge className={`shrink-0 text-[10px] ${tipoColors[doc.tipo] || ''}`}>
                  {tipoDocLabel[doc.tipo]}
                </Badge>

                {/* Download */}
                <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-1">Nenhum documento encontrado</h3>
            <p className="text-sm text-muted-foreground">Tente ajustar sua busca ou filtros.</p>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Voltar para vagas
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DocumentosPage;
