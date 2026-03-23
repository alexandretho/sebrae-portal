export type VagaStatus = 'aberto' | 'encerrado' | 'em_breve';

export interface Vaga {
  id: string;
  codigo: string;
  titulo: string;
  localidade: string;
  estado: string;
  tipo: string;
  status: VagaStatus;
  dataAbertura: string;
  dataEncerramento: string;
  descricao: string;
}

export interface Documento {
  id: string;
  vagaId: string;
  nome: string;
  tipo: 'edital' | 'alteracao' | 'resultado' | 'convocacao' | 'prova' | 'gabarito';
  dataModificacao: string;
  tamanho: string;
  url: string;
}

export const estados = ['ES', 'MG', 'PR', 'RJ', 'RS', 'SC', 'SP'] as const;
export const tipos = ['Analista', 'Assistente', 'Consultor', 'Coordenador', 'Estágio', 'Gerente'] as const;
export const tiposDocumento = ['edital', 'alteracao', 'resultado', 'convocacao', 'prova', 'gabarito'] as const;

export const tipoDocLabel: Record<string, string> = {
  edital: 'Edital',
  alteracao: 'Alteração',
  resultado: 'Resultado',
  convocacao: 'Convocação',
  prova: 'Prova',
  gabarito: 'Gabarito',
};

export const vagas: Vaga[] = [
  { id: '1', codigo: 'PS-7750', titulo: 'Analista de Projetos Pleno', localidade: 'Rio de Janeiro', estado: 'RJ', tipo: 'Analista', status: 'aberto', dataAbertura: '2025-03-01', dataEncerramento: '2025-04-15', descricao: 'Atuar na gestão de projetos de desenvolvimento empresarial.' },
  { id: '2', codigo: 'PS-7748', titulo: 'Assistente Administrativo', localidade: 'Vitória', estado: 'ES', tipo: 'Assistente', status: 'aberto', dataAbertura: '2025-02-20', dataEncerramento: '2025-04-10', descricao: 'Suporte administrativo às unidades regionais.' },
  { id: '3', codigo: 'PS-7745', titulo: 'Consultor de Inovação', localidade: 'Curitiba', estado: 'PR', tipo: 'Consultor', status: 'aberto', dataAbertura: '2025-03-05', dataEncerramento: '2025-04-20', descricao: 'Consultoria em inovação para micro e pequenas empresas.' },
  { id: '4', codigo: 'PS-7742', titulo: 'Coordenador de Programas', localidade: 'São Paulo', estado: 'SP', tipo: 'Coordenador', status: 'encerrado', dataAbertura: '2025-01-10', dataEncerramento: '2025-02-28', descricao: 'Coordenação de programas de capacitação empresarial.' },
  { id: '5', codigo: 'PS-7740', titulo: 'Estagiário de Comunicação', localidade: 'Porto Alegre', estado: 'RS', tipo: 'Estágio', status: 'aberto', dataAbertura: '2025-03-10', dataEncerramento: '2025-04-25', descricao: 'Apoio na produção de conteúdo institucional.' },
  { id: '6', codigo: 'PS-7738', titulo: 'Analista de TI Sênior', localidade: 'Belo Horizonte', estado: 'MG', tipo: 'Analista', status: 'encerrado', dataAbertura: '2024-12-01', dataEncerramento: '2025-01-15', descricao: 'Desenvolvimento e manutenção de sistemas internos.' },
  { id: '7', codigo: 'PS-7735', titulo: 'Gerente Regional', localidade: 'Florianópolis', estado: 'SC', tipo: 'Gerente', status: 'encerrado', dataAbertura: '2024-11-15', dataEncerramento: '2025-01-10', descricao: 'Gestão da unidade regional do Sebrae.' },
  { id: '8', codigo: 'PS-7733', titulo: 'Assistente de Atendimento', localidade: 'Niterói', estado: 'RJ', tipo: 'Assistente', status: 'aberto', dataAbertura: '2025-03-12', dataEncerramento: '2025-04-30', descricao: 'Atendimento ao público e orientação empresarial.' },
  { id: '9', codigo: 'PS-7730', titulo: 'Consultor de Finanças', localidade: 'Campinas', estado: 'SP', tipo: 'Consultor', status: 'aberto', dataAbertura: '2025-03-08', dataEncerramento: '2025-04-22', descricao: 'Consultoria financeira para pequenos negócios.' },
  { id: '10', codigo: 'PS-7728', titulo: 'Analista de Marketing', localidade: 'Vila Velha', estado: 'ES', tipo: 'Analista', status: 'encerrado', dataAbertura: '2024-10-01', dataEncerramento: '2024-11-15', descricao: 'Planejamento e execução de campanhas de marketing.' },
  { id: '11', codigo: 'PS-7725', titulo: 'Estagiário de Design', localidade: 'Curitiba', estado: 'PR', tipo: 'Estágio', status: 'aberto', dataAbertura: '2025-03-15', dataEncerramento: '2025-05-01', descricao: 'Criação de peças gráficas e materiais visuais.' },
  { id: '12', codigo: 'PS-7722', titulo: 'Coordenador de Eventos', localidade: 'Rio de Janeiro', estado: 'RJ', tipo: 'Coordenador', status: 'em_breve', dataAbertura: '2025-04-01', dataEncerramento: '2025-05-15', descricao: 'Organização de eventos e feiras empresariais.' },
  { id: '13', codigo: 'PS-7720', titulo: 'Analista Contábil', localidade: 'São Paulo', estado: 'SP', tipo: 'Analista', status: 'encerrado', dataAbertura: '2024-09-01', dataEncerramento: '2024-10-20', descricao: 'Análise e gestão contábil institucional.' },
  { id: '14', codigo: 'PS-7718', titulo: 'Assistente de RH', localidade: 'Belo Horizonte', estado: 'MG', tipo: 'Assistente', status: 'aberto', dataAbertura: '2025-03-18', dataEncerramento: '2025-05-02', descricao: 'Apoio nos processos de recrutamento e seleção.' },
  { id: '15', codigo: 'PS-7715', titulo: 'Consultor de Tecnologia', localidade: 'Porto Alegre', estado: 'RS', tipo: 'Consultor', status: 'encerrado', dataAbertura: '2024-08-15', dataEncerramento: '2024-09-30', descricao: 'Consultoria em transformação digital.' },
  { id: '16', codigo: 'PS-7712', titulo: 'Gerente de Operações', localidade: 'Florianópolis', estado: 'SC', tipo: 'Gerente', status: 'em_breve', dataAbertura: '2025-04-10', dataEncerramento: '2025-05-25', descricao: 'Gestão operacional de projetos estratégicos.' },
  { id: '17', codigo: 'PS-7710', titulo: 'Estagiário Jurídico', localidade: 'Vitória', estado: 'ES', tipo: 'Estágio', status: 'aberto', dataAbertura: '2025-03-20', dataEncerramento: '2025-05-05', descricao: 'Apoio jurídico e análise documental.' },
  { id: '18', codigo: 'PS-7708', titulo: 'Analista de Dados', localidade: 'Curitiba', estado: 'PR', tipo: 'Analista', status: 'aberto', dataAbertura: '2025-03-22', dataEncerramento: '2025-05-10', descricao: 'Análise de dados e business intelligence.' },
  { id: '19', codigo: 'PS-7705', titulo: 'Assistente de Logística', localidade: 'São Paulo', estado: 'SP', tipo: 'Assistente', status: 'encerrado', dataAbertura: '2024-07-01', dataEncerramento: '2024-08-15', descricao: 'Apoio logístico em eventos e capacitações.' },
  { id: '20', codigo: 'PS-7702', titulo: 'Coordenador Pedagógico', localidade: 'Rio de Janeiro', estado: 'RJ', tipo: 'Coordenador', status: 'aberto', dataAbertura: '2025-03-25', dataEncerramento: '2025-05-12', descricao: 'Coordenação pedagógica de programas educacionais.' },
];

export const documentos: Documento[] = [
  { id: 'd1', vagaId: '1', nome: 'Edital PS-7750 — Analista de Projetos Pleno', tipo: 'edital', dataModificacao: '2025-03-01', tamanho: '2.4 MB', url: '#' },
  { id: 'd2', vagaId: '1', nome: 'Alteração nº 01 — Retificação de cronograma', tipo: 'alteracao', dataModificacao: '2025-03-10', tamanho: '156 KB', url: '#' },
  { id: 'd3', vagaId: '1', nome: 'Alteração nº 02 — Inclusão de vagas PCD', tipo: 'alteracao', dataModificacao: '2025-03-15', tamanho: '198 KB', url: '#' },
  { id: 'd4', vagaId: '1', nome: 'Resultado Preliminar — Análise Curricular', tipo: 'resultado', dataModificacao: '2025-03-22', tamanho: '384 KB', url: '#' },
  { id: 'd5', vagaId: '1', nome: 'Convocação para Prova Objetiva', tipo: 'convocacao', dataModificacao: '2025-03-25', tamanho: '220 KB', url: '#' },
  { id: 'd6', vagaId: '1', nome: 'Prova Objetiva — Conhecimentos Gerais', tipo: 'prova', dataModificacao: '2025-03-28', tamanho: '1.1 MB', url: '#' },
  { id: 'd7', vagaId: '1', nome: 'Gabarito Oficial — Prova Objetiva', tipo: 'gabarito', dataModificacao: '2025-03-29', tamanho: '89 KB', url: '#' },
  { id: 'd8', vagaId: '1', nome: 'Resultado Final — Classificação Geral', tipo: 'resultado', dataModificacao: '2025-04-02', tamanho: '512 KB', url: '#' },
  { id: 'd9', vagaId: '1', nome: 'Convocação para Entrevista Comportamental', tipo: 'convocacao', dataModificacao: '2025-04-05', tamanho: '175 KB', url: '#' },
  { id: 'd10', vagaId: '2', nome: 'Edital PS-7748 — Assistente Administrativo', tipo: 'edital', dataModificacao: '2025-02-20', tamanho: '1.8 MB', url: '#' },
  { id: 'd11', vagaId: '2', nome: 'Resultado Preliminar — Triagem', tipo: 'resultado', dataModificacao: '2025-03-15', tamanho: '290 KB', url: '#' },
  { id: 'd12', vagaId: '3', nome: 'Edital PS-7745 — Consultor de Inovação', tipo: 'edital', dataModificacao: '2025-03-05', tamanho: '2.1 MB', url: '#' },
];

export function getDocumentosByVaga(vagaId: string): Documento[] {
  return documentos.filter(d => d.vagaId === vagaId);
}

export function getVagaByCodigo(codigo: string): Vaga | undefined {
  return vagas.find(v => v.codigo === codigo);
}
