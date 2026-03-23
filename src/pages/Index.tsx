import { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Briefcase, MapPin, Users } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VagaCard from '@/components/VagaCard';
import { vagas, estados, tipos, type VagaStatus } from '@/data/mockData';

const Index = () => {
  const [search, setSearch] = useState('');
  const [estado, setEstado] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  const [tipo, setTipo] = useState<string>('all');

  const filtered = useMemo(() => {
    return vagas.filter((v) => {
      const matchSearch = !search || 
        v.titulo.toLowerCase().includes(search.toLowerCase()) ||
        v.codigo.toLowerCase().includes(search.toLowerCase()) ||
        v.localidade.toLowerCase().includes(search.toLowerCase());
      const matchEstado = estado === 'all' || v.estado === estado;
      const matchStatus = status === 'all' || v.status === status;
      const matchTipo = tipo === 'all' || v.tipo === tipo;
      return matchSearch && matchEstado && matchStatus && matchTipo;
    });
  }, [search, estado, status, tipo]);

  const abertas = vagas.filter(v => v.status === 'aberto').length;
  const hasFilters = search || estado !== 'all' || status !== 'all' || tipo !== 'all';

  const clearFilters = () => {
    setSearch('');
    setEstado('all');
    setStatus('all');
    setTipo('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--sebrae-blue))]">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[hsl(var(--sebrae-blue-dark))] skew-x-[-12deg] translate-x-[10%] origin-top-right" />
        <div className="absolute bottom-0 right-[15%] w-[280px] h-[280px] rounded-full bg-[hsl(var(--accent))]/20" />
        <div className="absolute top-[10%] right-[30%] w-[120px] h-[120px] rounded-full bg-white/5" />
        <div className="absolute bottom-[20%] left-[5%] w-[80px] h-[80px] rounded-full border-2 border-white/10" />
        <div className="absolute top-0 left-[40%] w-[2px] h-full bg-white/5 skew-x-[-12deg]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Left content */}
            <div className="flex-1 max-w-xl pb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Briefcase className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span className="text-sm text-white/90 font-medium">{abertas} vagas abertas</span>
              </div>
              <h1 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] mb-5">
                Faça parte de um time que transforma o Brasil
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">
                Trabalhamos com paixão, coerência, compromisso, excelência e inovação 
                para fortalecer o empreendedorismo brasileiro.
              </p>

              {/* Search bar */}
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por cargo, código ou localidade..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 h-13 text-base bg-white border-0 shadow-lg rounded-xl focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-2"
                />
              </div>

              {/* Stats row */}
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none tabular-nums">2.4K+</p>
                    <p className="text-white/50 text-xs">Colaboradores</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none tabular-nums">27</p>
                    <p className="text-white/50 text-xs">Estados</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none tabular-nums">{abertas}</p>
                    <p className="text-white/50 text-xs">Vagas abertas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="hidden lg:flex flex-1 items-center justify-center relative">
              <img 
                src={heroIllustration} 
                alt="Ilustração de equipe profissional colaborando" 
                className="relative w-full max-w-[560px] xl:max-w-[620px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters + List */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filtros:</span>
          </div>

          <Select value={estado} onValueChange={setEstado}>
            <SelectTrigger className="w-[130px] h-9 text-sm">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos estados</SelectItem>
              {estados.map((e) => (
                <SelectItem key={e} value={e}>{e}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[140px] h-9 text-sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="aberto">Aberto</SelectItem>
              <SelectItem value="encerrado">Encerrado</SelectItem>
              <SelectItem value="em_breve">Em breve</SelectItem>
            </SelectContent>
          </Select>

          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger className="w-[150px] h-9 text-sm">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos tipos</SelectItem>
              {tipos.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-muted-foreground">
              Limpar filtros
            </Button>
          )}

          <span className="ml-auto text-sm text-muted-foreground tabular-nums">
            {filtered.length} {filtered.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
          </span>
        </div>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((vaga) => (
              <VagaCard key={vaga.id} vaga={vaga} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-1">Nenhuma vaga encontrada</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tente ajustar seus filtros ou termos de busca.
            </p>
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Limpar filtros
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
