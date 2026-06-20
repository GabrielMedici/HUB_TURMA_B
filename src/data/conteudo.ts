export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface Lesson {
  id: string;
  materia: "civil" | "penal" | "constitucional";
  title: string;
  resumo: string;
  baseLegal: string;
  pegadinha: string;
}

export interface SOSItem {
  id: string;
  materia: "civil" | "penal" | "constitucional";
  type: "teoria" | "pegadinha" | "dica";
  title: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  materia: "civil" | "penal" | "constitucional";
  pergunta: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  resposta_correta: 'a' | 'b' | 'c' | 'd';
  explicacao: string;
}

export const glossaryDB: GlossaryItem[] = [
  // PENAL
  { term: "Abolitio Criminis", definition: "Lei penal superveniente benéfica que deixa de considerar determinado ato como crime, retroagindo a favor do réu." },
  { term: "Novatio Legis in Mellius", definition: "Nova lei que traz circunstâncias mais favoráveis ao réu e que, obrigatoriamente, retroage." },
  { term: "Iter Criminis", definition: "O caminho do crime, composto pela cogitação, preparação, execução e consumação." },
  { term: "Preterdolo", definition: "Situação onde ocorre dolo na conduta inicial do agente e culpa quanto ao resultado mais gravoso do que o pretendido." },
  { term: "Sursis", definition: "Suspensão condicional da pena, operando como um período de teste onde o cumprimento de regras evita a prisão." },
  { term: "Bis in idem", definition: "Princípio que proíbe o Estado de punir, julgar ou processar o indivíduo duas vezes pelo mesmo fato criminoso." },
  // CIVIL
  { term: "Pretensão", definition: "O poder amparado pelo Direito de exigir de outrem, coercitivamente, o cumprimento de um dever jurídico de forma subordinada." },
  { term: "Direito Potestativo", definition: "Poder concedido ao titular para impor sua vontade de forma unilateral e influir na esfera jurídica de terceiros, gerando apenas um estado de sujeição para eles." },
  { term: "Obrigação Natural", definition: "Aquela que, embora materialmente existente, perdeu a exigibilidade judicial, mas confere ao credor o direito de reter valores se estes forem pagos de forma espontânea." },
  { term: "Ações Constitutivas", definition: "Medidas processuais direcionadas à criação, modificação ou extinção de um estado jurídico, sendo o meio prático para o exercício dos direitos potestativos sujeitos à decadência." },
  { term: "Preclusão", definition: "Fenômeno estritamente processual que determina a perda da oportunidade de praticar um ato jurídico-processual em decorrência do esgotamento do prazo no calendário da Justiça." },
  { term: "Status Quo Ante", definition: "Expressão latina utilizada na responsabilidade civil que traduz o estado exato de equilíbrio patrimonial e moral da vítima momentos antes de sofrer o dano injusto." },
  { term: "Nexo Causal", definition: "O fio condutor invisível e umbilical que liga juridicamente a conduta (ação ou omissão) do autor ao resultado lesivo experimentado pela vítima." },
  { term: "Vício Redibitório", definition: "Defeito oculto pré-existente em um bem adquirido que diminui severamente o seu valor ou torna a coisa inapropriada ao uso, ensejando prazo decadencial para redibição." },
  // CONSTITUCIONAL
  { term: "Secessão", definition: "É o direito, que não existe no Estado Federal brasileiro, de as unidades federadas se separarem ou romperem o pacto da união." },
  { term: "Quorum", definition: "Número mínimo exigido de membros presentes para a instalação de uma reunião ou para a votação em órgãos colegiados." },
  { term: "Vacatio Legis", definition: "O período de tempo decorrido entre a publicação oficial de uma lei e a sua efetiva entrada em vigor (obrigatoriedade)." },
  { term: "Bicameralismo", definition: "Sistema legislativo no qual a função é exercida por duas Casas, adotado no Brasil apenas na esfera federal (Câmara dos Deputados e Senado Federal)." },
  { term: "Ius Postulandi", definition: "Capacidade postulatória indispensável na administração da justiça, que qualifica o profissional (advogado) para defender interesses das partes em juízo." }
];

export const sosDB: SOSItem[] = [
  // PENAL
  {
    id: "penal-sos-1",
    materia: "penal",
    type: "teoria",
    title: "Teoria Analítica do Crime",
    content: "O crime é estruturado como um fato típico, ilícito e culpável. Para o fato ser típico, ele exige a presença obrigatória de conduta, resultado, nexo causal e tipicidade."
  },
  {
    id: "penal-sos-2",
    materia: "penal",
    type: "dica",
    title: "A Linha Tênue do Elemento Subjetivo",
    content: "No dolo eventual, o agente prevê o resultado e assume o risco de produzi-lo, agindo com indiferença. Na culpa consciente, o agente prevê o resultado, mas confia sinceramente em suas habilidades para evitar que ele aconteça. (Art. 18, I e II, do CP)."
  },
  {
    id: "penal-sos-3",
    materia: "penal",
    type: "pegadinha",
    title: "Omissão Penalmente Relevante",
    content: "No crime omissivo próprio, a infração se consuma com o simples 'deixar de fazer' descrito na lei, independente de resultado. No crime omissivo impróprio, o agente (garantidor) tinha o dever jurídico e a possibilidade concreta de agir para evitar o resultado, mas se omitiu. (Art. 13, § 2º, do CP)."
  },
  // CIVIL
  {
    id: "civil-sos-1",
    materia: "civil",
    type: "teoria",
    title: "Prescrição vs. Decadência",
    content: "A prescrição extingue apenas a pretensão (o poder de exigir coercitivamente o cumprimento de um dever), preservando o direito material como obrigação natural (Art. 189 do CC). Já a decadência é a aniquilação fatal do próprio direito potestativo pelo seu não exercício no prazo determinado legal ou convencionalmente."
  },
  {
    id: "civil-sos-2",
    materia: "civil",
    type: "dica",
    title: "A Anatomia da Ilicitude",
    content: "O ilícito tradicional exige dolo ou culpa, rompendo a fronteira do lícito e gerando dano (Art. 186 do CC). O abuso de direito, por sua vez, é de aferição puramente objetiva: o ato nasce lícito, mas o titular excede manifestamente os limites da boa-fé, dos bons costumes ou de seu fim econômico e social (Art. 187 do CC)."
  },
  {
    id: "civil-sos-3",
    materia: "civil",
    type: "pegadinha",
    title: "O Paradoxo do Ato Lícito Indenizável",
    content: "A legítima defesa, o exercício regular de direito e o estado de necessidade excluem a ilicitude do ato (Art. 188 do CC). Porém, se no estado de necessidade você destruir patrimônio de um terceiro inocente para se salvar, a conduta continua sendo lícita, mas a lei determina o pagamento de indenização a esse terceiro, garantindo a você o direito de regresso contra o verdadeiro causador do perigo (Arts. 929 e 930 do CC)."
  },
  // CONSTITUCIONAL
  {
    id: "const-sos-1",
    materia: "constitucional",
    type: "teoria",
    title: "Repartição de Competências",
    content: "O sistema baseia-se na predominância de interesses, onde o interesse nacional é da União (Arts. 21 e 22, CF), o regional é dos Estados (competência remanescente, Art. 25, § 1º, CF) e o local é dos Municípios (Art. 30, CF)."
  },
  {
    id: "const-sos-2",
    materia: "constitucional",
    type: "dica",
    title: "Intervenção Federal",
    content: "A regra é a não-intervenção para garantir o pacto federativo. A União só invade a autonomia dos Estados ou DF nas hipóteses taxativas e excepcionais (Art. 34, CF), como para manter a integridade nacional ou reorganizar finanças estaduais."
  },
  {
    id: "const-sos-3",
    materia: "constitucional",
    type: "pegadinha",
    title: "Medidas Provisórias e Veto",
    content: "Editadas pelo Presidente com força de lei por 60 dias (prorrogáveis uma vez), a MP não pode dispor sobre matéria de lei complementar (Art. 62, CF). O Presidente veta o projeto de lei, não a lei, de forma fundamentada e insuscetível de veto a palavras soltas (Art. 66, § 2º, CF)."
  }
];

export const lessonsDB: Lesson[] = [
  // PENAL
  {
    id: "penal-aula-1",
    materia: "penal",
    title: "Aula 1: Princípios e a Base da Teoria do Crime",
    resumo: `O Direito Penal é subsidiário, atuando apenas sobre bens de maior relevância jurídica. Para que exista punição, é necessária uma conduta humana voluntária que ofenda um bem jurídico.
O princípio da anterioridade exige que a lei exista e seja válida antes da ocorrência do delito.
A lei penal não retroage, exceto para beneficiar o réu, podendo extinguir o crime ou diminuir a pena.
O princípio da insignificância afasta a tipicidade material quando a conduta apresenta mínima ofensividade e inexpressividade da lesão.
A conduta penalmente relevante é um comportamento humano voluntário, sendo irrelevantes os atos reflexos ou estados de inconsciência.`,
    baseLegal: "Art. 1º do CP (Anterioridade/Reserva Legal); Art. 5º, XL da CF (Retroatividade Benéfica).",
    pegadinha: "Confundir excludentes de conduta com justificativas do crime. Coação física irresistível, atos reflexos e sonambulismo excluem a própria conduta (o fato deixa de ser típico logo no primeiro elemento), pois não há vontade na ação."
  },
  {
    id: "penal-aula-2",
    materia: "penal",
    title: "Aula 2: Elemento Subjetivo (Dolo, Culpa e Preterdolo)",
    resumo: `A responsabilidade penal objetiva não é aceita como regra geral; o agente precisa atuar com dolo ou culpa.
O dolo direto ocorre quando o agente pratica a conduta querendo exatamente o resultado pretendido.
A culpa ocorre por imprudência (ação precipitada), negligência (omissão de cautela) ou imperícia (falta de capacidade técnica).
O Preterdolo é uma estrutura mista, caracterizada pelo dolo na conduta antecedente e culpa no resultado consequente.`,
    baseLegal: "Art. 18, I (Dolo) e II (Culpa), do CP; Art. 19 do CP (Preterdolo).",
    pegadinha: "O Latrocínio (Art. 157, § 3º) NÃO é considerado um crime preterdoloso. Ele é tratado legalmente como crime doloso complexo, e não sob a lógica estrita de 'dolo + culpa' do Art. 19."
  },
  {
    id: "penal-aula-3",
    materia: "penal",
    title: "Aula 3: O Caminho do Crime (Iter Criminis)",
    resumo: `O crime doloso possui fases cronológicas até sua consumação, nem todas puníveis pelo Estado.
A cogitação e a preparação são, via de regra, fases impuníveis.
A tentativa ocorre quando a execução é iniciada, mas o crime não se consuma por circunstâncias alheias à vontade do agente.
A tentativa perfeita (crime falho) acontece quando o agente esgota todos os meios de execução, mas o resultado não ocorre.
Crimes de atentado possuem a mesma pena tanto na modalidade consumada quanto na tentada.`,
    baseLegal: "Art. 14, I (Consumado) e II (Tentado), do CP.",
    pegadinha: "Afirmar que a tentativa se aplica a qualquer infração. A tentativa é punível nos crimes, mas, por regra geral, não se pune tentativa de contravenção penal."
  },
  {
    id: "penal-aula-4",
    materia: "penal",
    title: "Aula 4: Classificação Doutrinária Exigida",
    resumo: `A tipificação correta depende do entendimento da mecânica de execução descrita no artigo penal.
Crimes formais se consumam antecipadamente no momento da conduta, sendo o resultado naturalístico um mero exaurimento.
Crimes de ação múltipla (ou plurinuclear) contêm vários verbos no tipo penal, e a prática de mais de um deles no mesmo contexto configura crime único.
Crimes habituais exigem a reiteração da conduta para sua consumação, não sendo puníveis atos isolados.
Crimes vagos possuem a coletividade ou entidades sem personalidade jurídica como sujeito passivo direto.`,
    baseLegal: "Art. 210, 211 e 212 do CP (Crimes Vagos); Art. 11.343/06 (Tráfico como ação múltipla).",
    pegadinha: "A confusão entre crime formal e crime de mera conduta. No crime formal, existe a previsão de um resultado, mas ele não é necessário para consumar o delito. No crime de mera conduta, sequer existe a previsão de resultado material no tipo penal, a atividade física esgota o crime."
  },
  // CIVIL
  {
    id: "civil-aula-1",
    materia: "civil",
    title: "Aula 1: Prescrição e Decadência - A Marcha do Tempo no Direito",
    resumo: `O Alvo da Prescrição: É imperativo compreender que a prescrição jamais fulmina o direito constitucional de ação, que é público e indisponível. A prescrição ataca unicamente a pretensão, que nasce no exato momento da violação do direito material.
A Obrigação Natural: Consumada a prescrição extintiva, a dívida não desaparece do universo fático, mas se degrada em uma obrigação natural. O credor perde o poder de cobrança judicial, mas se o devedor pagar espontaneamente, a lei blinda o credor, autorizando a retenção do valor pago e rechaçando qualquer pedido de devolução.
A Ruptura da Decadência: Em oposição, a decadência é fatal e atinge direitos potestativos (o poder unilateral de influir na esfera jurídica alheia, gerando mera sujeição da contraparte). Se o titular inerte perder o prazo decadencial, não resta sombra de direito; ele é extinto na origem.
Ações e Efeitos: A prescrição opera exclusivamente sobre ações condenatórias, que buscam impor uma prestação. A decadência opera sobre ações constitutivas.`,
    baseLegal: "Art. 189 (nascimento e extinção da pretensão); Arts. 205 e 206 (prazos prescricionais geral e especiais) do Código Civil.",
    pegadinha: "Confundir suspensão com impedimento. O rol dos artigos 197 a 200 serve para ambos, mas a mecânica difere. O impedimento ocorre antes do relógio prescricional ligar (o tempo nem inicia). A suspensão ocorre com o relógio já rodando (o tempo congela e, superada a causa, volta a correr apenas pelo saldo restante)."
  },
  {
    id: "civil-aula-2",
    materia: "civil",
    title: "Aula 2: O Esqueleto da Responsabilidade Civil e a Conduta",
    resumo: `O Filtro Subjetivo: A espinha dorsal do ato ilícito repousa em quatro blocos: conduta (ação ou omissão), culpa lato sensu (dolo ou culpa stricto sensu), nexo causal e dano. Não existe responsabilidade civil clássica sem o comportamento humano voluntário.
Dano e Nexo: O ordenamento civil não pune intenções ou danos puramente virtuais; a lesão patrimonial ou moral (consagrada na CF/88) deve ser palpável. O nexo causal é o cordão umbilical, a relação de causa e efeito imediata que amarra a conduta imprudente ao prejuízo efetivo.
A Restauração: Diferente da esfera penal, o propósito da responsabilidade civil não é punir a sociedade, mas promover o reencontro com o equilíbrio patrimonial da vítima. O objetivo é restaurar o status quo ante; se inviável faticamente, a reparação converte-se em indenização pecuniária.`,
    baseLegal: "Art. 186 (elementos do ato ilícito); Art. 187 (abuso de direito); Art. 927 (obrigação de reparar) do Código Civil.",
    pegadinha: "O aluno mediano acha que para configurar o 'abuso de direito' é preciso provar que o agente agiu de má-fé ou quis prejudicar. Mentira. A natureza dogmática do Art. 187 é puramente objetiva-finalística; a aferição da culpa é acidental e não essencial."
  },
  {
    id: "civil-aula-3",
    materia: "civil",
    title: "Aula 3: Os Escudos Protetores e as Fronteiras da Ilicitude",
    resumo: `A Tríade de Excludentes: A lei fornece escudos que limpam a antijuridicidade de uma conduta que normalmente seria ilícita. São eles: a legítima defesa (reação moderada contra agressão humana injusta), o exercício regular de direito (estrito cumprimento legal) e o estado de necessidade.
A Dinâmica da Necessidade: O estado de necessidade configura-se pela atuação deliberada contra um perigo iminente não provocado pelo agente, focando em preservar a vida ou um bem superior mediante a destruição de patrimônio alheio, sendo esta destruição absolutamente indispensável.`,
    baseLegal: "Art. 188 (excludentes de ilicitude); Arts. 929 e 930 (indenização por ato lícito e direito de regresso) do Código Civil.",
    pegadinha: "A regra de ouro da Legítima Defesa é a moderação. O sistema avisa: se a sua reação ultrapassar a linha de corte da razoabilidade (excesso), seu escudo de proteção quebra instantaneamente e sua conduta migra para o campo do Abuso de Direito (Art. 187), fazendo nascer o dever de indenizar pelo que sobressalente ao necessário."
  },
  // CONSTITUCIONAL
  {
    id: "const-aula-1",
    materia: "constitucional",
    title: "Aula 1: Organização do Estado Federal Brasileiro",
    resumo: `O Brasil adotou o modelo de Federação por desagregação, partindo de um Estado unitário na Monarquia para um Estado Federal.
A nossa organização político-administrativa compreende a União, os Estados, o Distrito Federal e os Municípios.
Todos os entes são dotados de autonomia (política, administrativa e financeira), enquanto a soberania pertence exclusivamente ao Estado Federal (República Federativa do Brasil).
A união é indissolúvel, o que significa que inexiste o direito de secessão (separação) no federalismo brasileiro.`,
    baseLegal: "Art. 1º e Art. 18, caput, da CF.",
    pegadinha: "A principal confusão é achar que Territórios Federais são entes federativos. Eles não possuem autonomia política, sendo meras autarquias territoriais (descentralizações administrativas) que integram a União (Art. 18, § 2º, CF)."
  },
  {
    id: "const-aula-2",
    materia: "constitucional",
    title: "Aula 2: Repartição de Competências e Espécies",
    resumo: `A regra de ouro é a predominância do interesse.
A União atua em temas de interesse geral e nacional.
Os Municípios atuam no interesse local.
Os Estados ficam com o "que sobra", ou seja, a competência reservada ou remanescente.
As competências se dividem em materiais (prática de atos administrativos) e legislativas (elaboração de leis).`,
    baseLegal: "Art. 21 e 22 (União), Art. 25, § 1º (Estados), Art. 30 (Municípios) e Art. 24 (Concorrente), da CF.",
    pegadinha: "O examinador sempre troca 'competência comum' por 'competência concorrente'. Competência comum (Art. 23, CF) é material e não tem hierarquia entre os entes. Competência concorrente (Art. 24, CF) é legislativa e possui hierarquia: a União edita normas gerais, e os Estados suplementam com normas específicas."
  },
  {
    id: "const-aula-3",
    materia: "constitucional",
    title: "Aula 3: Intervenção Estatal",
    resumo: `O federalismo exige autonomia, logo, a intervenção é a negação dessa autonomia e atua como exceção absolutíssima.
A União só pode intervir nos Estados, no Distrito Federal e nos Municípios localizados em Territórios Federais.
Os Estados só podem intervir em seus próprios Municípios.
Pode ocorrer de forma espontânea (discricionariedade do Presidente) ou provocada (requisição de tribunais superiores).`,
    baseLegal: "Art. 34 (Intervenção Federal) e Art. 35 (Intervenção Estadual), da CF.",
    pegadinha: "Muitos alunos marcam que a União intervirá num Município do interior de um Estado para salvar a ordem. Falso! A União não pode intervir diretamente em Municípios situados em Estados-Membros por falta de previsão constitucional. Apenas o Estado intervém em seus Municípios."
  },
  {
    id: "const-aula-4",
    materia: "constitucional",
    title: "Aula 4: O Processo Legislativo e a Deliberação",
    resumo: `A atividade-fim do Poder Legislativo gera emendas à Constituição, leis (complementares, ordinárias, delegadas), medidas provisórias, decretos legislativos e resoluções.
A aprovação de uma lei complementar exige a maioria absoluta (mais da metade do total de membros), enquanto a lei ordinária exige apenas a maioria simples (maioria dos presentes).
O veto presidencial atinge o projeto de lei, é relativo (pode ser derrubado pelo Congresso) e não se admite veto de palavras isoladas, apenas de textos integrais de artigo, parágrafo, inciso ou alínea.`,
    baseLegal: "Arts. 47, 59, 66 (§ 1º, § 2º e § 4º) e 69, da CF.",
    pegadinha: "Confundir quórum de aprovação. Emenda Constitucional não é lei complementar. Emendas exigem 3/5 dos votos, em dois turnos, nas duas Casas. Lei complementar exige maioria absoluta em um turno."
  },
  {
    id: "const-aula-5",
    materia: "constitucional",
    title: "Aula 5: O Poder Judiciário e o Ministério Público",
    resumo: `O Judiciário atua regido pelo princípio da inércia: só se manifesta quando provocado.
O Supremo Tribunal Federal (STF) atua precipuamente como o guarda da Constituição.
O Superior Tribunal de Justiça (STJ) garante a uniformidade da interpretação de leis federais.
O Ministério Público não pertence a nenhum dos Três Poderes, atuando de forma autônoma como defensor da ordem jurídica, do regime democrático e dos interesses indisponíveis.`,
    baseLegal: "Arts. 95 (Garantias), 102 (STF), 105 (STJ) e 127 (Ministério Público), da CF.",
    pegadinha: "A vitaliciedade do juiz não ocorre sempre no momento da posse. Magistrados de primeira instância (juízes substitutos/de direito) só adquirem a vitaliciedade após 2 anos de estágio probatório. Membros dos tribunais (desembargadores e ministros) sim, tornam-se vitalícios na posse."
  }
];

export const quizDB: QuizQuestion[] = [
  // PENAL
  {
    id: "penal-q1",
    materia: "penal",
    pergunta: "João, no meio de uma praça vazia durante a madrugada, é abordado por policiais portando uma arma de fogo de uso permitido sem autorização legal. Considerando a teoria dos crimes, qual é a correta classificação desta conduta?",
    alternativa_a: "Trata-se de um crime de perigo concreto, pois o Ministério Público precisará provar quem estava em risco na praça vazia.",
    alternativa_b: "Trata-se de um crime material, pois a consumação depende do disparo da arma de fogo contra o bem jurídico tutelado.",
    alternativa_c: "Trata-se de um crime de perigo abstrato e de mera conduta, pois a lei presume o risco inerente e a mera atividade física de portar a arma já consuma o delito.",
    alternativa_d: "Trata-se de um crime habitual, pois exige-se a demonstração de que João porta a arma reiteradamente em seu dia a dia.",
    resposta_correta: "c",
    explicacao: "Correta (C). O porte de arma (Art. 14 da Lei 10.826/03) dispensa prova de risco real (perigo abstrato) e se consuma sem exigência de resultado naturalístico posterior (mera conduta)."
  },
  {
    id: "penal-q2",
    materia: "penal",
    pergunta: "Marcos é salva-vidas de um clube e estava em seu horário de plantão conversando no celular. Ao ver uma criança se afogando, decide intencionalmente continuar no telefone, resultando na morte do menor. Como o Direito Penal avalia a conduta de Marcos?",
    alternativa_a: "Marcos comete um crime omissivo próprio, tipificado no Art. 135 do CP (Omissão de Socorro).",
    alternativa_b: "Marcos comete um crime comissivo por omissão (omissivo impróprio), respondendo pelo homicídio, pois possuía posição de garantidor.",
    alternativa_c: "Marcos não pode ser punido por homicídio, pois a norma proibitiva deste crime exige uma ação física ('matar'), havendo apenas infração administrativa.",
    alternativa_d: "Marcos responderá por preterdolo, havendo dolo de se omitir e culpa na morte da criança.",
    resposta_correta: "b",
    explicacao: "Correta (B). Segundo o Art. 13, § 2º, do CP, crimes omissivos impróprios ocorrem quando a pessoa não age, mas possui o dever jurídico de agir (garantidor), respondendo pelo mesmo crime que seria cometido por ação."
  },
  {
    id: "penal-q3",
    materia: "penal",
    pergunta: "Durante a madrugada, vândalos invadem um cemitério local e realizam a destruição sistemática de cadáveres para um ritual. Ao tipificar a conduta com base nos artigos 210 e 211 do CP, quem é o sujeito passivo imediato da infração?",
    alternativa_a: "O próprio morto, pois seus direitos da personalidade são estendidos após a morte pela via penal.",
    alternativa_b: "O Estado, atuando exclusivamente como titular e vítima direta nos crimes contra o patrimônio do cemitério.",
    alternativa_c: "Não há sujeito passivo, tornando o crime de impossível punição material.",
    alternativa_d: "A coletividade e o sentimento difuso de respeito aos mortos, configurando um crime vago.",
    resposta_correta: "d",
    explicacao: "Correta (D). Mortos não podem ser sujeitos passivos. Esses crimes são 'vagos', pois a vítima não é individualizada fisicamente, recaindo sobre a coletividade ou sentimento difuso de respeito aos mortos."
  },
  {
    id: "penal-q4",
    materia: "penal",
    pergunta: "Após discutir no trânsito, um motorista decide acelerar seu veículo bruscamente para assustar um pedestre. Ele reconhece a alta chance de atropelamento, mas, por orgulho, prossegue com a manobra indiferente ao que venha a ocorrer, acabando por vitimar gravemente o pedestre. Qual o elemento subjetivo de sua conduta?",
    alternativa_a: "Dolo direto de primeiro grau, pois os meios escolhidos garantiam o fim proposto.",
    alternativa_b: "Culpa consciente, pois ele possuía certeza de que conseguiria frear a tempo.",
    alternativa_c: "Dolo eventual, pois ele previu o resultado e, mesmo sem tê-lo como objetivo principal, assumiu o risco e seguiu indiferente.",
    alternativa_d: "Imperícia, decorrente de sua falta de habilitação técnica para conduzir o veículo.",
    resposta_correta: "c",
    explicacao: "Correta (C). Ocorre dolo eventual quando o indivíduo prevê o resultado e segue em frente indiferente se ele ocorrerá ou não ('assume o risco'), nos termos do Art. 18, I, do CP."
  },
  {
    id: "penal-q5",
    materia: "penal",
    pergunta: "Uma quadrilha planeja minuciosamente e executa o roubo a uma residência. Após subtrair as joias (consumação), são cercados e presos três quarteirões adiante. Qual é a denominação correta para a obtenção de vantagem posterior ao momento de consumação estrita do tipo penal?",
    alternativa_a: "Crime exaurido.",
    alternativa_b: "Crime plurissubsistente.",
    alternativa_c: "Crime remetido.",
    alternativa_d: "Tentativa incruenta.",
    resposta_correta: "a",
    explicacao: "Correta (A). Ocorre o crime exaurido quando, após a consumação estrita do crime, o agente consegue alcançar a consequência ou vantagem material posterior que buscava inicialmente."
  },
  // CIVIL
  {
    id: "civil-q1",
    materia: "civil",
    pergunta: "Durante a constância do casamento sob o regime de separação total de bens, Augusto descobre que sua esposa, Helena, causou danos patrimoniais aos seus bens particulares. Sabendo que eles continuam casados e dividindo o mesmo teto, o prazo prescricional para a cobrança da reparação civil:",
    alternativa_a: "Está sofrendo o fenômeno da preclusão temporal.",
    alternativa_b: "Encontra-se em estado de decadência.",
    alternativa_c: "Não tem o seu curso iniciado (impedido) ou encontra-se congelado (suspenso).",
    alternativa_d: "Corre normalmente, dado o regime de bens firmado no matrimônio.",
    resposta_correta: "c",
    explicacao: "Correta (C). O Art. 197, inciso I do Código Civil determina taxativamente que não corre a prescrição entre os cônjuges na constância da sociedade conjugal, configurando hipótese legal de impedimento ou suspensão, a depender de quando ocorreu a lesão."
  },
  {
    id: "civil-q2",
    materia: "civil",
    pergunta: "João adquire uma motocicleta usada e, passados seis meses, descobre um grave defeito oculto no motor. Frustrado com o negócio, e sem que a lei lhe conferisse a possibilidade jurídica de invocar este direito potestativo a qualquer tempo, ele aciona seu advogado. Sobre o prazo para pleitear o desfazimento do negócio, é correto afirmar:",
    alternativa_a: "O direito em questão submete-se ao prazo prescricional, atingindo o direito de ação de João.",
    alternativa_b: "Trata-se de um prazo puramente processual, configurando hipótese de preclusão de calendário.",
    alternativa_c: "O direito potestativo de enjeitar o negócio extingue-se através da decadência (ou caducidade).",
    alternativa_d: "O prazo será prescricional residual de dez anos constante no Artigo 205.",
    resposta_correta: "c",
    explicacao: "Correta (C). Os prazos referentes a vícios redibitórios impõem uma sujeição à contraparte (direito potestativo de desfazer o contrato), possuindo, portanto, estrita natureza decadencial e, se esgotado o prazo fixado, extingue-se o próprio direito."
  },
  {
    id: "civil-q3",
    materia: "civil",
    pergunta: "Uma loja credora de Pedro deixou esgotar o prazo legal, estipulado no Código Civil, para ingressar com a ação judicial de cobrança. Cinco anos depois desse esgotamento, tomado por um súbito arrependimento moral, Pedro comparece à loja e realiza o pagamento integral. No dia seguinte, orientado por um amigo incauto, exige o dinheiro de volta sob o argumento judicial de enriquecimento sem causa da loja. Qual será o destino jurídico deste pleito?",
    alternativa_a: "O pedido de devolução é procedente, visto que uma dívida prescrita rompe totalmente o vínculo material com o credor.",
    alternativa_b: "Pedro não tem direito à devolução, pois a obrigação jurídica convertida em obrigação natural autoriza legalmente a retenção por parte do credor.",
    alternativa_c: "O pagamento ensejará devolução pela metade, dado o estado de abuso de direito da loja credora.",
    alternativa_d: "Trata-se de preclusão material.",
    resposta_correta: "b",
    explicacao: "Correta (B). A consumação da prescrição não destrói o direito material, mas extingue a sua pretensão, convertendo a dívida em obrigação natural que resguarda e autoriza o credor a reter as parcelas adimplidas de forma voluntária e espontânea pelo devedor."
  },
  {
    id: "civil-q4",
    materia: "civil",
    pergunta: "Em uma estrada interiorana, um motorista percebe uma árvore despencando em direção ao asfalto. Para salvar a própria vida, num manobra brusca e absolutamente necessária, ele desvia o veículo em direção ao acostamento (invadindo-o), o que acaba por destruir violentamente as barracas comerciais de um feirante inocente. Nesse contexto normativo de ilicitude, a conduta do motorista foi:",
    alternativa_a: "Um ato jurídico ilícito (Art. 186), gerando direta responsabilidade penal.",
    alternativa_b: "Abuso de direito (Art. 187), visto que excedeu manifestamente sua função social, devendo reparar a barraca.",
    alternativa_c: "Um ato escudado pela legítima defesa estrita em face do dono das barracas.",
    alternativa_d: "Um ato amparado pelas excludentes de ilicitude (estado de necessidade) que, paradoxalmente, gera o dever de indenizar a vítima inocente.",
    resposta_correta: "d",
    explicacao: "Correta (D). A conduta subsume-se perfeitamente aos requisitos rígidos do estado de necessidade, retirando sua antijuridicidade (Art. 188, II). Contudo, por ter atingido terceiro totalmente não provocador daquele perigo letal, persiste a anomalia jurídica de obrigar o agente que agiu licitamente a indenizar os danos sofridos pela barraca (Arts. 929 e 930)."
  },
  {
    id: "civil-q5",
    materia: "civil",
    pergunta: "A prescrição figura no ordenamento jurídico como um elemento fundamental para a pacificação social e segurança jurídica ao impedir a perenidade dos conflitos. Em relação à prescrição e o acesso ao Judiciário, conclui-se dogmaticamente que:",
    alternativa_a: "O direito de acionar a máquina estatal jurisdicional está visceralmente condicionado e limitado pelo prazo prescricional.",
    alternativa_b: "Uma vez consumada a prescrição, restará fulminado não apenas o direito em si, mas também o direito processual constitucional de postular uma ação.",
    alternativa_c: "É defeso ao juiz receber uma ação prescrita, pois a prescrição suprime fatalmente o direito de ação.",
    alternativa_d: "A prescrição alcança estritamente a pretensão material, permanecendo invulnerável o direito de ação do autor.",
    resposta_correta: "d",
    explicacao: "Correta (D). Segundo a tradição civilista, consubstanciada nos Arts. 189 do CC e na leitura constitucional, o direito de ação (público e abstrato de ter o provimento jurisdicional estatal) jamais pode ser retirado, servindo a prescrição extintiva para aniquilar estritamente a pretensão coercitiva inerente ao direito lesionado."
  },
  // CONSTITUCIONAL
  {
    id: "const-q1",
    materia: "constitucional",
    pergunta: "No que tange à organização do federalismo brasileiro, caso a União verifique um grave colapso na ordem constitucional na cidade de Campinas (Município localizado no Estado de São Paulo), de quem será a competência para decretar a intervenção direta no município?",
    alternativa_a: "Da União, por meio do Presidente da República.",
    alternativa_b: "Do Estado de São Paulo, por meio do Governador do Estado.",
    alternativa_c: "Do Congresso Nacional, por decreto legislativo.",
    alternativa_d: "Do Supremo Tribunal Federal, de ofício.",
    resposta_correta: "b",
    explicacao: "Correta (B). A União não tem competência para intervir em Municípios localizados em Estados-Membros. A intervenção em Município situado em Estado-Membro é de competência privativa do Estado, via Governador (Art. 35 da CF)."
  },
  {
    id: "const-q2",
    materia: "constitucional",
    pergunta: "O Governador do Estado de Santa Catarina questiona qual a natureza de sua competência legislativa diante da partilha instituída pela Constituição Federal de 1988. É correto afirmar que a competência do Estado-Membro é:",
    alternativa_a: "Enumerada e expressa.",
    alternativa_b: "Exclusiva para temas de interesse local.",
    alternativa_c: "Reservada ou remanescente.",
    alternativa_d: "Originária absoluta.",
    resposta_correta: "c",
    explicacao: "Correta (C). Na repartição de competências, a Constituição enumerou as atribuições da União e dos Municípios, reservando aos Estados a competência remanescente, ou seja, tudo que não foi atribuído aos outros (Art. 25, § 1º, CF)."
  },
  {
    id: "const-q3",
    materia: "constitucional",
    pergunta: "O Presidente da República discorda de três palavras específicas inseridas no artigo 2º de um projeto de lei aprovado pelo Congresso Nacional. Ele decide vetar unicamente essas três palavras para adequar o texto ao interesse público. Esse ato do Presidente é:",
    alternativa_a: "Constitucional, pois o veto pode ser parcial e o Presidente atua como Chefe de Governo.",
    alternativa_b: "Inconstitucional, pois é vedado expressamente o veto de palavras isoladas.",
    alternativa_c: "Constitucional, desde que justificado pelo veto jurídico.",
    alternativa_d: "Inconstitucional, pois o veto incide sobre a lei pronta e deve ser total.",
    resposta_correta: "b",
    explicacao: "Correta (B). O veto parcial deve necessariamente incidir sobre o texto integral de artigo, parágrafo, inciso ou alínea. O texto constitucional proíbe o veto de palavras isoladas para evitar que o Executivo inverta o sentido do projeto legislativo (Art. 66, § 2º, CF)."
  },
  {
    id: "const-q4",
    materia: "constitucional",
    pergunta: "Para aprovar um projeto que discipline novas diretrizes de arrecadação reservadas constitucionalmente a uma Lei Complementar, qual é o requisito de deliberação nas Casas do Congresso Nacional?",
    alternativa_a: "Aprovação por maioria simples.",
    alternativa_b: "Aprovação por 3/5 dos membros.",
    alternativa_c: "Aprovação por 2/3 dos membros.",
    alternativa_d: "Aprovação por maioria absoluta.",
    resposta_correta: "d",
    explicacao: "Correta (D). As leis complementares distinguem-se das ordinárias (maioria simples) justamente pelo quórum qualificado, exigindo a aprovação da maioria absoluta para não serem fruto de maiorias ocasionais (Art. 69, CF)."
  },
  {
    id: "const-q5",
    materia: "constitucional",
    pergunta: "Um Promotor de Justiça sofre grave ameaça em um processo envolvendo crime organizado e o tribunal estuda sua transferência de comarca para protegê-lo contra sua vontade, bem como a retenção de parte de seu subsídio para um fundo de escolta de emergência. À luz das garantias constitucionais do Ministério Público:",
    alternativa_a: "Ambas as medidas são constitucionais, pois o interesse público prevalece sobre as garantias funcionais.",
    alternativa_b: "A inamovibilidade impede qualquer transferência compulsória, sem exceção, e o subsídio é irredutível.",
    alternativa_c: "A transferência compulsória exige decisão colegiada por maioria absoluta por motivo de interesse público, mas o subsídio é irredutível.",
    alternativa_d: "O Promotor não possui inamovibilidade na primeira instância, logo a transferência é discricionária do Procurador-Geral.",
    resposta_correta: "c",
    explicacao: "Correta (C). Membros do Ministério Público possuem a garantia da inamovibilidade, mas ela não é absoluta: podem ser removidos por motivo de interesse público via decisão colegiada por maioria absoluta. Contudo, a irredutibilidade do subsídio é expressa, vedando retenções que não obedeçam ao limite constitucional (Art. 128, § 5º, CF)."
  }
];
