import { useState, useEffect } from 'react'
import './App.css'

// Traducciones
const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    strategy: 'Estrategia',
    about: 'Equipo',
    portfolio: 'Portfolio',
    investors: 'Inversores',
    
    // Strategy section
    ourApproach: 'Nuestro Enfoque',
    coreStrategy: 'ESTRATEGIA CORE+',
    strategyDesc: 'Estructuramos cada inversión como un Club Deal independiente. Los inversores saben exactamente qué activo se adquiere, qué plan de valor se ejecuta y qué retorno se espera.',
    targetIRR: 'TIR Objetivo',
    targetIRRDesc: '7% sin apalancamiento. 10-15% con 25-50% apalancamiento conservador.',
    targetAssets: 'Activos Target',
    targetAssetsDesc: 'Hoteles y apartamentos turísticos 4-5 estrellas operativos con potencial de mejora operativa.',
    locations: 'Ubicaciones',
    locationsDesc: 'Tier 1 y Tier 2 con demanda turística estable y flujos predecibles.',
    operators: 'Operadores',
    operatorsDesc: 'Preferencia por acuerdos de renta garantizada con Meliá, NH y Barceló.',
    esgCommitment: 'Compromiso ESG',
    esgDesc: 'Integración de mejoras ambientales, sociales y de gobernanza en cada activo.',
    exitStrategy: 'Estrategia de Salida',
    exitDesc: 'Estabilizar activo, consolidar flujos y vender a inversor core. Horizonte: 7-10 años.',
    
    // Exit Strategy Section
    exitSectionTitle: 'DESINVERSIÓN',
    exitSectionSubtitle: '3 vías de salida en el año 7',
    exitPath1Title: 'Propietario Operador',
    exitPath1Desc: 'Venta al operador hotelero actual con cláusulas de terminación que garantizan máxima opcionalidad.',
    exitPath2Title: 'Fondos PE',
    exitPath2Desc: 'Protagonistas del mercado español 2015-2019. Interés en cartera completa o activos individuales.',
    exitPath3Title: 'Fondos Core / Core+',
    exitPath3Desc: 'Compradores naturales post-institucionalización. Buscan activos estabilizados con flujos predecibles.',
    potentialBuyers: 'Compradores Potenciales',
    whySpain: '¿Por qué España? ¿Por qué ahora?',
    recordDemand: 'Demanda Récord',
    recordDemandDesc: '116M turistas anuales, 68% ocupación hotelera',
    incompleteRepricing: 'Repricing Incompleto',
    incompleteRepricingDesc: 'NOI en máximos pero valores aún no recuperados',
    financialDistress: 'Distress Financiero',
    financialDistressDesc: 'Activos buenos obligados a vender por refinanciaciones',
    valueCreation: 'Creación de Valor',
    valueCreationDesc: 'Reposicionamiento, eficiencia energética, gestión de canales',
    
    // Team section
    whoWeAre: 'Quiénes Somos',
    ourTeam: 'NUESTRO EQUIPO',
    
    // Deals section
    currentDeals: 'CLUB DEALS ACTUALES',
    features: 'Características',
    location: 'Ubicación',
    units: 'Unidades',
    parking: 'Parking',
    construction: 'Construcción',
    renovation: 'Renovación',
    highlights: 'Highlights',
    investmentStructure: 'Estructura de Inversión',
    equity: 'Equity',
    debt: 'Deuda',
    total: 'Total',
    valueCreationPlan: 'Creación de Valor',
    expectedReturns: 'Retornos Esperados',
    irrUnlevered: 'TIR Unlevered',
    irrLevered: 'TIR Levered',
    multiple: 'Múltiplo',
    exit: 'Exit',
    potentialOperators: 'Operadores Potenciales',
    
    // Analysis section
    investorRelations: 'Investor Relations',
    interactiveAnalysis: 'ANÁLISIS INTERACTIVO',
    asset: 'Activo',
    leverage: 'Apalancamiento',
    projections: 'Proyecciones 2026-2032',
    metric: 'Métrica',
    occupancy: 'Ocupación (%)',
    revenues: 'Ingresos (M€)',
    gopMargin: 'Margen GOP (%)',
    cashFlow: 'Cash Flow (M€)',
    exitAnalysis: 'Análisis de Salida',
    exitNOI: 'NOI Exit',
    capRate: 'Cap Rate',
    grossValue: 'Valor Bruto',
    netProceeds: 'Producto Neto',
    distributions: 'Distribuciones',
    totalReturn: 'Retorno Total',
    assetComparison: 'Comparativa de Activos',
    totalInvestment: 'Inversión Total',
    exitHorizon: 'Horizonte Exit',
    years: 'años',
    
    // Footer
    investmentClub: 'Hospitality Investment Club',
    confidential: 'Información confidencial para inversores cualificados',
    
    // Team roles
    ceo: 'CEO',
    coo: 'Directora de Operaciones',
    assetMgmt: 'Director Asset Management',
    expansion: 'Directora de Expansión',
    financial: 'Análisis Financiero',
    ir: 'Relaciones con Inversores',
    pm: 'Project Manager',
    ceoDesc: 'Liderazgo estratégico y visión de inversión',
    cooDesc: 'Gestión operativa y eficiencia',
    assetDesc: 'Maximización del valor',
    expansionDesc: 'Sourcing de oportunidades',
    financialDesc: 'Modelización y due diligence',
    irDesc: 'Comunicación y reporting',
    pmDesc: 'Due diligence y ejecución',
    
    // Operators
    pvType: 'Líder europeo en apartamentos turísticos',
    pvFit: 'Ideal para Benidorm - mercado costero',
    sonderType: 'Apartamentos premium urbanos',
    sonderFit: 'Ideal para Madrid - tecnología y diseño',
    numaType: 'Design-focused extended stay',
    numaFit: 'Madrid - segmento premium',
    limehomeType: 'Apartamentos urbanos tech-enabled',
    limehomeFit: 'Ambos mercados',
    
    // Property Tags
    tagBeachfront: 'Primera línea de playa',
    tagConsolidated: 'Zona turística consolidada',
    tagEnergy: 'Eficiencia energética',
    tagSeasonality: 'Demanda desestacionalizada',
    tagUrban: 'Ubicación prime urbana',
    tagRepositioning: 'Potencial reposicionamiento',
    tagBusiness: 'Turismo negocios + ocio',
    
    // Transparency section
    transparencyTitle: 'TRANSPARENCIA TOTAL',
    transparencySubtitle: 'Reporting y comunicación',
    quarterlyReports: 'Reporting trimestral detallado',
    quarterlyReportsDesc: 'Estados financieros, KPIs operativos, ocupación, ADR y comparativa con budget.',
    investorPortal: 'Portal del inversor',
    investorPortalDesc: 'Acceso 24/7 a documentación, informes y evolución de tu inversión.',
    directAccess: 'Acceso directo al equipo',
    directAccessDesc: 'Línea directa con el equipo gestor para cualquier consulta.',
    annualMeeting: 'Reunión anual de inversores',
    annualMeetingDesc: 'Presentación presencial de resultados y estrategia.',
    
    // Contact form
    contactTitle: 'SOLICITAR INFORMACIÓN',
    contactSubtitle: '¿Interesado en invertir?',
    contactName: 'Nombre completo',
    contactEmail: 'Email',
    contactPhone: 'Teléfono',
    contactAmount: 'Importe aproximado de inversión',
    contactMessage: 'Mensaje (opcional)',
    contactSubmit: 'Solicitar información',
    contactDisclaimer: 'Al enviar acepta nuestra política de privacidad. Información exclusiva para inversores cualificados.',
    
    // Exit paths detailed
    exitRefinancing: 'Refinanciación y dividendos',
    exitRefinancingDesc: 'Distribución de dividendos extraordinarios mediante refinanciación del activo estabilizado.',
    exitIndividual: 'Venta individual',
    exitIndividualDesc: 'Venta del activo a operadores hoteleros o fondos institucionales.',
    exitPortfolio: 'Venta de portfolio',
    exitPortfolioDesc: 'Venta del portfolio completo a inversores institucionales tipo Core.',
    
    // Assets
    benidormName: 'Apartamentos Turísticos Benidorm',
    benidormLocation: 'Primera línea Playa Poniente, Benidorm',
    benidormType: 'Apartamentos Turísticos 3 Llaves',
    benidormParking: '200 plazas incluidas',
    benidormRenovated: '2015',
    benidormHighlight1: '50% con vistas al mar',
    benidormHighlight2: 'Primera línea de playa',
    benidormHighlight3: 'Centro histórico a 500m',
    benidormValue1: 'Reposicionamiento de TT.OO a canales directos',
    benidormValue2: 'Nueva marca especializada en apartamentos premium',
    benidormValue3: 'Revenue management profesionalizado',
    benidormValue4: 'Mejoras ESG y certificación sostenibilidad',
    benidormExit: 'Venta a inversor Core año 2032',
    
    fuencarralName: 'Apartamentos Turísticos Madrid',
    fuencarralLocation: 'Calle Fuencarral, 150m de Gran Vía',
    fuencarralType: 'Apartamentos Turísticos 3 Llaves',
    fuencarralParking: 'No incluido',
    fuencarralRenovated: 'Obra nueva (conversión)',
    fuencarralHighlight1: 'Ubicación prime Madrid',
    fuencarralHighlight2: 'A 150m de Gran Vía',
    fuencarralHighlight3: 'Zona comercial premium',
    fuencarralValue1: 'Sustitución de operador actual',
    fuencarralValue2: 'Incremento ADR por gestión profesional',
    fuencarralValue3: 'Optimización de canales digitales',
    fuencarralValue4: 'Posicionamiento como apartamentos boutique',
    fuencarralExit: 'Venta a inversor Core año 2032',
  },
  en: {
    // Navigation
    home: 'Home',
    strategy: 'Strategy',
    about: 'Team',
    portfolio: 'Portfolio',
    investors: 'Investors',
    
    // Strategy section
    ourApproach: 'Our Approach',
    coreStrategy: 'CORE+ STRATEGY',
    strategyDesc: 'We structure each investment as an independent Club Deal. Investors know exactly which asset is acquired, what value creation plan is executed, and what return is expected.',
    targetIRR: 'Target IRR',
    targetIRRDesc: '7% unlevered. 10-15% with 25-50% conservative leverage.',
    targetAssets: 'Target Assets',
    targetAssetsDesc: '4-5 star operational hotels and tourist apartments with operational improvement potential.',
    locations: 'Locations',
    locationsDesc: 'Tier 1 and Tier 2 with stable tourist demand and predictable cash flows.',
    operators: 'Operators',
    operatorsDesc: 'Preference for guaranteed rent agreements with Meliá, NH and Barceló.',
    esgCommitment: 'ESG Commitment',
    esgDesc: 'Integration of environmental, social and governance improvements in each asset.',
    exitStrategy: 'Exit Strategy',
    exitDesc: 'Stabilize asset, consolidate cash flows and sell to core investor. Horizon: 7-10 years.',
    
    // Exit Strategy Section
    exitSectionTitle: 'EXIT STRATEGY',
    exitSectionSubtitle: '3 exit paths in year 7',
    exitPath1Title: 'Owner Operator',
    exitPath1Desc: 'Sale to current hotel operator with termination clauses guaranteeing maximum optionality.',
    exitPath2Title: 'PE Funds',
    exitPath2Desc: 'Key players in Spanish market 2015-2019. Interest in complete portfolio or individual assets.',
    exitPath3Title: 'Core / Core+ Funds',
    exitPath3Desc: 'Natural buyers post-institutionalization. Seeking stabilized assets with predictable cash flows.',
    potentialBuyers: 'Potential Buyers',
    whySpain: 'Why Spain? Why Now?',
    recordDemand: 'Record Demand',
    recordDemandDesc: '116M annual tourists, 68% hotel occupancy',
    incompleteRepricing: 'Incomplete Repricing',
    incompleteRepricingDesc: 'NOI at highs but values not yet recovered',
    financialDistress: 'Financial Distress',
    financialDistressDesc: 'Good assets forced to sell due to refinancing',
    valueCreation: 'Value Creation',
    valueCreationDesc: 'Repositioning, energy efficiency, channel management',
    
    // Team section
    whoWeAre: 'Who We Are',
    ourTeam: 'OUR TEAM',
    
    // Deals section
    currentDeals: 'CURRENT CLUB DEALS',
    features: 'Features',
    location: 'Location',
    units: 'Units',
    parking: 'Parking',
    construction: 'Construction',
    renovation: 'Renovation',
    highlights: 'Highlights',
    investmentStructure: 'Investment Structure',
    equity: 'Equity',
    debt: 'Debt',
    total: 'Total',
    valueCreationPlan: 'Value Creation',
    expectedReturns: 'Expected Returns',
    irrUnlevered: 'Unlevered IRR',
    irrLevered: 'Levered IRR',
    multiple: 'Multiple',
    exit: 'Exit',
    potentialOperators: 'Potential Operators',
    
    // Analysis section
    investorRelations: 'Investor Relations',
    interactiveAnalysis: 'INTERACTIVE ANALYSIS',
    asset: 'Asset',
    leverage: 'Leverage',
    projections: 'Projections 2026-2032',
    metric: 'Metric',
    occupancy: 'Occupancy (%)',
    revenues: 'Revenues (M€)',
    gopMargin: 'GOP Margin (%)',
    cashFlow: 'Cash Flow (M€)',
    exitAnalysis: 'Exit Analysis',
    exitNOI: 'Exit NOI',
    capRate: 'Cap Rate',
    grossValue: 'Gross Value',
    netProceeds: 'Net Proceeds',
    distributions: 'Distributions',
    totalReturn: 'Total Return',
    assetComparison: 'Asset Comparison',
    totalInvestment: 'Total Investment',
    exitHorizon: 'Exit Horizon',
    years: 'years',
    
    // Footer
    investmentClub: 'Hospitality Investment Club',
    confidential: 'Confidential information for qualified investors',
    
    // Team roles
    ceo: 'CEO',
    coo: 'Chief Operating Officer',
    assetMgmt: 'Asset Management Director',
    expansion: 'Expansion Director',
    financial: 'Financial Analysis',
    ir: 'Investor Relations',
    pm: 'Project Manager',
    ceoDesc: 'Strategic leadership and investment vision',
    cooDesc: 'Operational management and efficiency',
    assetDesc: 'Value maximization',
    expansionDesc: 'Opportunity sourcing',
    financialDesc: 'Modeling and due diligence',
    irDesc: 'Communication and reporting',
    pmDesc: 'Due diligence and execution',
    
    // Operators
    pvType: 'European leader in tourist apartments',
    pvFit: 'Ideal for Benidorm - coastal market',
    sonderType: 'Premium urban apartments',
    sonderFit: 'Ideal for Madrid - technology and design',
    numaType: 'Design-focused extended stay',
    numaFit: 'Madrid - premium segment',
    limehomeType: 'Tech-enabled urban apartments',
    limehomeFit: 'Both markets',
    
    // Property Tags
    tagBeachfront: 'Beachfront',
    tagConsolidated: 'Consolidated tourist zone',
    tagEnergy: 'Energy efficiency',
    tagSeasonality: 'Year-round demand',
    tagUrban: 'Prime urban location',
    tagRepositioning: 'Repositioning potential',
    tagBusiness: 'Business + leisure',
    
    // Transparency section
    transparencyTitle: 'FULL TRANSPARENCY',
    transparencySubtitle: 'Reporting and communication',
    quarterlyReports: 'Quarterly detailed reporting',
    quarterlyReportsDesc: 'Financial statements, operational KPIs, occupancy, ADR and budget comparison.',
    investorPortal: 'Investor portal',
    investorPortalDesc: '24/7 access to documentation, reports and investment evolution.',
    directAccess: 'Direct team access',
    directAccessDesc: 'Direct line with management team for any queries.',
    annualMeeting: 'Annual investor meeting',
    annualMeetingDesc: 'In-person presentation of results and strategy.',
    
    // Contact form
    contactTitle: 'REQUEST INFORMATION',
    contactSubtitle: 'Interested in investing?',
    contactName: 'Full name',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactAmount: 'Approximate investment amount',
    contactMessage: 'Message (optional)',
    contactSubmit: 'Request information',
    contactDisclaimer: 'By submitting you accept our privacy policy. Information exclusively for qualified investors.',
    
    // Exit paths detailed
    exitRefinancing: 'Refinancing and dividends',
    exitRefinancingDesc: 'Extraordinary dividend distribution through refinancing of stabilized asset.',
    exitIndividual: 'Individual sale',
    exitIndividualDesc: 'Asset sale to hotel operators or institutional funds.',
    exitPortfolio: 'Portfolio sale',
    exitPortfolioDesc: 'Complete portfolio sale to Core-type institutional investors.',
    
    // Assets
    benidormName: 'Benidorm Tourist Apartments',
    benidormLocation: 'Beachfront Playa Poniente, Benidorm',
    benidormType: '3-Key Tourist Apartments',
    benidormParking: '200 spaces included',
    benidormRenovated: '2015',
    benidormHighlight1: '50% with sea views',
    benidormHighlight2: 'Beachfront location',
    benidormHighlight3: 'Historic center 500m away',
    benidormValue1: 'Repositioning from tour operators to direct channels',
    benidormValue2: 'New brand specialized in premium apartments',
    benidormValue3: 'Professionalized revenue management',
    benidormValue4: 'ESG improvements and sustainability certification',
    benidormExit: 'Sale to Core investor in 2032',
    
    fuencarralName: 'Madrid Tourist Apartments',
    fuencarralLocation: 'Calle Fuencarral, 150m from Gran Vía',
    fuencarralType: '3-Key Tourist Apartments',
    fuencarralParking: 'Not included',
    fuencarralRenovated: 'New construction (conversion)',
    fuencarralHighlight1: 'Prime Madrid location',
    fuencarralHighlight2: '150m from Gran Vía',
    fuencarralHighlight3: 'Premium retail zone',
    fuencarralValue1: 'Current operator replacement',
    fuencarralValue2: 'ADR increase through professional management',
    fuencarralValue3: 'Digital channel optimization',
    fuencarralValue4: 'Positioning as boutique apartments',
    fuencarralExit: 'Sale to Core investor in 2032',
  }
}

function App() {
  const [activeAsset, setActiveAsset] = useState('benidorm')
  const [leverage, setLeverage] = useState(40)
  const [section, setSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState('es')

  // Detectar idioma del navegador
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2)
    if (browserLang === 'en') setLang('en')
  }, [])

  const t = translations[lang]

  const navigateTo = (s) => {
    setSection(s)
    setMobileMenuOpen(false)
  }

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }

  const operators = [
    { name: 'Pierre & Vacances', type: t.pvType, fit: t.pvFit, terms: '65% GOP, 15-20 ' + t.years },
    { name: 'Sonder', type: t.sonderType, fit: t.sonderFit, terms: '60-65% GOP, 10-15 ' + t.years },
    { name: 'Numa', type: t.numaType, fit: t.numaFit, terms: '62-68% GOP, 12-15 ' + t.years },
    { name: 'Limehome', type: t.limehomeType, fit: t.limehomeFit, terms: '60-65% GOP, 10-15 ' + t.years },
  ]

  const team = [
    { name: 'Celso Luis Fernández', role: t.ceo, desc: t.ceoDesc },
    { name: 'Mónica Munar', role: t.coo, desc: t.cooDesc },
    { name: 'Carlos Pereira', role: t.assetMgmt, desc: t.assetDesc },
    { name: 'Yeranni Brea', role: t.expansion, desc: t.expansionDesc },
    { name: 'Guillem Cabot', role: t.financial, desc: t.financialDesc },
    { name: 'Laura Lospennato', role: t.ir, desc: t.irDesc },
    { name: 'Nacho de La Fuente', role: t.pm, desc: t.pmDesc },
  ]

  const assets = [
    {
      id: 'benidorm',
      name: t.benidormName,
      location: t.benidormLocation,
      type: t.benidormType,
      units: 225,
      distribution: '200 (1 hab) + 25 (2 hab)',
      parking: t.benidormParking,
      built: 1980,
      renovated: t.benidormRenovated,
      highlights: [t.benidormHighlight1, t.benidormHighlight2, t.benidormHighlight3],
      tags: [t.tagBeachfront, t.tagConsolidated, t.tagSeasonality, t.tagEnergy],
      investment: { total: 45, equity: 27, debt: 18 },
      projections: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
        occupancy: [65, 70, 74, 77, 79, 80, 80],
        adr: [82, 89, 95, 101, 106, 110, 114],
        revpar: [53, 62, 70, 78, 84, 88, 91],
        revenues: [4.4, 5.1, 5.8, 6.4, 6.9, 7.2, 7.5],
        gop: [1.8, 2.1, 2.5, 2.8, 3.1, 3.3, 3.4],
        gopMargin: [41, 42, 43, 44, 45, 46, 46],
        noi: [1.5, 1.8, 2.2, 2.5, 2.8, 3.0, 3.1],
        cashFlow: [-27, 0.9, 1.3, 1.6, 1.9, 2.1, 2.2]
      },
      exitAnalysis: {
        year: 2032,
        exitNOI: 3.1,
        capRate: 6.0,
        grossValue: 51.7,
        netProceeds: 49.5,
        totalDistributions: 10.0,
        totalReturn: 59.5,
        equityInvested: 27
      },
      valueCreation: [t.benidormValue1, t.benidormValue2, t.benidormValue3, t.benidormValue4],
      irr: { unlevered: 8.5, levered: 14.2 },
      multiple: 2.2,
      exit: t.benidormExit
    },
    {
      id: 'fuencarral',
      name: t.fuencarralName,
      location: t.fuencarralLocation,
      type: t.fuencarralType,
      units: 70,
      distribution: '30 (1 hab) + 40 (2 hab)',
      parking: t.fuencarralParking,
      built: 2017,
      renovated: t.fuencarralRenovated,
      highlights: [t.fuencarralHighlight1, t.fuencarralHighlight2, t.fuencarralHighlight3],
      tags: [t.tagUrban, t.tagBusiness, t.tagRepositioning, t.tagEnergy],
      investment: { total: 28, equity: 17, debt: 11 },
      projections: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
        occupancy: [70, 75, 78, 81, 83, 84, 85],
        adr: [120, 132, 142, 150, 157, 163, 168],
        revpar: [84, 99, 111, 122, 130, 137, 143],
        revenues: [2.1, 2.5, 2.8, 3.1, 3.3, 3.5, 3.6],
        gop: [0.95, 1.15, 1.35, 1.50, 1.65, 1.75, 1.80],
        gopMargin: [45, 46, 48, 49, 50, 50, 50],
        noi: [0.8, 1.0, 1.2, 1.35, 1.5, 1.6, 1.65],
        cashFlow: [-17, 0.5, 0.7, 0.9, 1.1, 1.2, 1.3]
      },
      exitAnalysis: {
        year: 2032,
        exitNOI: 1.65,
        capRate: 5.5,
        grossValue: 30.0,
        netProceeds: 28.5,
        totalDistributions: 5.7,
        totalReturn: 34.2,
        equityInvested: 17
      },
      valueCreation: [t.fuencarralValue1, t.fuencarralValue2, t.fuencarralValue3, t.fuencarralValue4],
      irr: { unlevered: 9.2, levered: 15.8 },
      multiple: 2.0,
      exit: t.fuencarralExit
    }
  ]

  const asset = assets.find(a => a.id === activeAsset)
  const years = asset.projections.years || ['2026', '2027', '2028', '2029', '2030', '2031', '2032']

  const calculateIRR = (base, lev) => {
    const adjustment = (lev - 40) * 0.15
    return Math.max(base + adjustment, base * 0.7).toFixed(1)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <img src={import.meta.env.BASE_URL + "logo-nav.svg"} alt="HOS Capital" className="nav-logo" />
        <div className="nav-links">
          <a onClick={() => setSection('hero')}>{t.home}</a>
          <a onClick={() => setSection('strategy')}>{t.strategy}</a>
          <a onClick={() => setSection('team')}>{t.about}</a>
          <a onClick={() => setSection('deals')}>{t.portfolio}</a>
          <a onClick={() => setSection('analysis')}>{t.investors}</a>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
          </button>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a onClick={() => navigateTo('hero')}>{t.home}</a>
          <a onClick={() => navigateTo('strategy')}>{t.strategy}</a>
          <a onClick={() => navigateTo('team')}>{t.about}</a>
          <a onClick={() => navigateTo('deals')}>{t.portfolio}</a>
          <a onClick={() => navigateTo('analysis')}>{t.investors}</a>
          <button className="lang-toggle-mobile" onClick={toggleLang}>
            {lang === 'es' ? '🇬🇧 English' : '🇪🇸 Español'}
          </button>
        </div>
      )}

      {/* Hero Section - Full Image */}
      {section === 'hero' && (
        <section className="hero">
          <div className="hero-image-full">
          </div>
        </section>
      )}

      {/* Strategy Section */}
      {section === 'strategy' && (
        <section className="strategy">
          <div className="strategy-header">
            <span className="section-label">{t.ourApproach}</span>
            <h2>{t.coreStrategy}</h2>
            <p>{t.strategyDesc}</p>
          </div>
          <div className="strategy-grid">
            <div className="strategy-card">
              <div className="icon">📊</div>
              <h3>{t.targetIRR}</h3>
              <p>{t.targetIRRDesc}</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🏨</div>
              <h3>{t.targetAssets}</h3>
              <p>{t.targetAssetsDesc}</p>
            </div>
            <div className="strategy-card">
              <div className="icon">📍</div>
              <h3>{t.locations}</h3>
              <p>{t.locationsDesc}</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🤝</div>
              <h3>{t.operators}</h3>
              <p>{t.operatorsDesc}</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🌱</div>
              <h3>{t.esgCommitment}</h3>
              <p>{t.esgDesc}</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🚪</div>
              <h3>{t.exitStrategy}</h3>
              <p>{t.exitDesc}</p>
            </div>
          </div>
          <div className="spain-context">
            <h3>{t.whySpain}</h3>
            <div className="context-points">
              <div className="point">
                <span className="point-icon">📈</span>
                <strong>{t.recordDemand}</strong>
                <p>{t.recordDemandDesc}</p>
              </div>
              <div className="point">
                <span className="point-icon">💰</span>
                <strong>{t.incompleteRepricing}</strong>
                <p>{t.incompleteRepricingDesc}</p>
              </div>
              <div className="point">
                <span className="point-icon">🏦</span>
                <strong>{t.financialDistress}</strong>
                <p>{t.financialDistressDesc}</p>
              </div>
              <div className="point">
                <span className="point-icon">⚡</span>
                <strong>{t.valueCreation}</strong>
                <p>{t.valueCreationDesc}</p>
              </div>
            </div>
          </div>
          
          {/* Exit Strategy / Desinversión */}
          <div className="exit-paths">
            <div className="exit-paths-header">
              <span className="section-label">{t.exitSectionSubtitle}</span>
              <h2>{t.exitSectionTitle}</h2>
            </div>
            <div className="exit-paths-grid">
              <div className="exit-path-card">
                <div className="exit-path-number">1</div>
                <h3>{t.exitPath1Title}</h3>
                <p>{t.exitPath1Desc}</p>
              </div>
              <div className="exit-path-card">
                <div className="exit-path-number">2</div>
                <h3>{t.exitPath2Title}</h3>
                <p>{t.exitPath2Desc}</p>
              </div>
              <div className="exit-path-card">
                <div className="exit-path-number">3</div>
                <h3>{t.exitPath3Title}</h3>
                <p>{t.exitPath3Desc}</p>
              </div>
            </div>
            <div className="potential-buyers">
              <h4>{t.potentialBuyers}</h4>
              <div className="buyers-logos">
                <span className="buyer-name">Blackstone</span>
                <span className="buyer-name">KKR</span>
                <span className="buyer-name">Apollo</span>
                <span className="buyer-name">Brookfield</span>
                <span className="buyer-name">Carlyle</span>
                <span className="buyer-name">Bain Capital</span>
                <span className="buyer-name">Covivio</span>
                <span className="buyer-name">AXA IM</span>
                <span className="buyer-name">Invesco</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {section === 'team' && (
        <section className="team">
          <div className="team-header">
            <span className="section-label">{t.whoWeAre}</span>
            <h2>{t.ourTeam}</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{member.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Deals Section */}
      {section === 'deals' && (
        <section className="deals">
          <div className="deals-header">
            <span className="section-label">{t.portfolio}</span>
            <h2>{t.currentDeals}</h2>
          </div>
          
          {/* Two Assets Side by Side */}
          <div className="assets-side-by-side">
            {/* Madrid Fuencarral */}
            <div className="asset-column">
              <div className="asset-card">
                <h3>{assets[1].name}</h3>
                <span className="deal-type">{assets[1].type}</span>
                <div className="asset-info-compact">
                  <p><strong>{t.location}:</strong> {assets[1].location}</p>
                  <p><strong>{t.units}:</strong> {assets[1].units}</p>
                  <p><strong>{t.totalInvestment}:</strong> {assets[1].investment.total}M€</p>
                </div>
                <div className="asset-returns-compact">
                  <div className="return-item">
                    <span className="return-val">{assets[1].irr.levered}%</span>
                    <span className="return-lbl">{t.irrLevered}</span>
                  </div>
                  <div className="return-item">
                    <span className="return-val">{assets[1].multiple}x</span>
                    <span className="return-lbl">{t.multiple}</span>
                  </div>
                </div>
                <div className="deal-tags-compact">
                  {assets[1].tags && assets[1].tags.slice(0,3).map((tag, i) => (
                    <span key={i} className="deal-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="asset-location-image">
                <img src={import.meta.env.BASE_URL + "granvia.jpg"} alt="Gran Vía Madrid" />
                <div className="image-caption">Gran Vía, Madrid</div>
              </div>
            </div>

            {/* Benidorm Playa Poniente */}
            <div className="asset-column">
              <div className="asset-card">
                <h3>{assets[0].name}</h3>
                <span className="deal-type">{assets[0].type}</span>
                <div className="asset-info-compact">
                  <p><strong>{t.location}:</strong> {assets[0].location}</p>
                  <p><strong>{t.units}:</strong> {assets[0].units}</p>
                  <p><strong>{t.totalInvestment}:</strong> {assets[0].investment.total}M€</p>
                </div>
                <div className="asset-returns-compact">
                  <div className="return-item">
                    <span className="return-val">{assets[0].irr.levered}%</span>
                    <span className="return-lbl">{t.irrLevered}</span>
                  </div>
                  <div className="return-item">
                    <span className="return-val">{assets[0].multiple}x</span>
                    <span className="return-lbl">{t.multiple}</span>
                  </div>
                </div>
                <div className="deal-tags-compact">
                  {assets[0].tags && assets[0].tags.slice(0,3).map((tag, i) => (
                    <span key={i} className="deal-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="asset-location-image">
                <img src={import.meta.env.BASE_URL + "benidorm-beach.jpg"} alt="Playa Poniente Benidorm" />
                <div className="image-caption">Playa Poniente, Benidorm</div>
              </div>
            </div>
          </div>

          {/* Investment Strategy Section - Enhanced */}
          <div className="investment-strategy-section">
            <div className="strategy-section-header">
              <h2>{lang === 'es' ? 'NUESTRA ESTRATEGIA DE INVERSIÓN' : 'OUR INVESTMENT STRATEGY'}</h2>
              <p className="strategy-subtitle">{lang === 'es' ? 'Club Deals con activos prime y operadores institucionales' : 'Club Deals with prime assets and institutional operators'}</p>
            </div>
            
            <div className="strategy-pillars">
              <div className="strategy-pillar">
                <div className="pillar-icon">🎯</div>
                <h4>{lang === 'es' ? 'Activos Core+' : 'Core+ Assets'}</h4>
                <p>{lang === 'es' ? 'Hoteles y apartamentos 4-5★ operativos con potencial de mejora en ubicaciones prime de España' : '4-5★ operating hotels and apartments with improvement potential in prime Spanish locations'}</p>
              </div>
              <div className="strategy-pillar">
                <div className="pillar-icon">📈</div>
                <h4>{lang === 'es' ? 'Creación de Valor' : 'Value Creation'}</h4>
                <p>{lang === 'es' ? 'Reposicionamiento de canales, revenue management profesional y mejoras ESG' : 'Channel repositioning, professional revenue management and ESG improvements'}</p>
              </div>
              <div className="strategy-pillar">
                <div className="pillar-icon">🤝</div>
                <h4>{lang === 'es' ? 'Operadores Premium' : 'Premium Operators'}</h4>
                <p>{lang === 'es' ? 'Acuerdos con Pierre & Vacances, Sonder, Numa y Limehome' : 'Agreements with Pierre & Vacances, Sonder, Numa and Limehome'}</p>
              </div>
              <div className="strategy-pillar">
                <div className="pillar-icon">🚪</div>
                <h4>{lang === 'es' ? 'Exit Año 7-10' : 'Exit Year 7-10'}</h4>
                <p>{lang === 'es' ? 'Venta a fondos Core/Core+ tras estabilización. Múltiplo objetivo 2.0-2.2x' : 'Sale to Core/Core+ funds after stabilization. Target multiple 2.0-2.2x'}</p>
              </div>
            </div>

            <div className="strategy-metrics">
              <div className="metric-box">
                <span className="metric-value">€73M</span>
                <span className="metric-label">{lang === 'es' ? 'Inversión Total' : 'Total Investment'}</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">€44M</span>
                <span className="metric-label">{lang === 'es' ? 'Equity' : 'Equity'}</span>
              </div>
              <div className="metric-box highlight">
                <span className="metric-value">15%</span>
                <span className="metric-label">{lang === 'es' ? 'TIR Objetivo' : 'Target IRR'}</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">2.1x</span>
                <span className="metric-label">{lang === 'es' ? 'Múltiplo' : 'Multiple'}</span>
              </div>
            </div>
          </div>

          {/* Operators Section */}
          <div className="operators-section">
            <h4>{t.potentialOperators}</h4>
            <div className="operators-grid">
              {operators.map((op, i) => (
                <div key={i} className="operator-card">
                  <h5>{op.name}</h5>
                  <p className="op-type">{op.type}</p>
                  <p className="op-fit">{op.fit}</p>
                  <p className="op-terms">{op.terms}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Analysis Section */}
      {section === 'analysis' && (
        <section className="analysis">
          <div className="analysis-header">
            <span className="section-label">{t.investorRelations}</span>
            <h2>{t.interactiveAnalysis}</h2>
          </div>
          <div className="analysis-controls">
            <div className="control-group">
              <label>{t.asset}:</label>
              <select value={activeAsset} onChange={e => setActiveAsset(e.target.value)}>
                {assets.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div className="control-group">
              <label>{t.leverage}: {leverage}%</label>
              <input 
                type="range" 
                min="0" 
                max="60" 
                value={leverage} 
                onChange={e => setLeverage(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="analysis-results">
            <div className="irr-display">
              <div className="irr-card">
                <span className="irr-label">{t.irrUnlevered}</span>
                <span className="irr-value">{asset.irr.unlevered}%</span>
              </div>
              <div className="irr-card primary">
                <span className="irr-label">{t.irrLevered} ({leverage}%)</span>
                <span className="irr-value">{calculateIRR(asset.irr.levered, leverage)}%</span>
              </div>
            </div>
            <div className="projections-table">
              <h4>{t.projections}</h4>
              <table>
                <thead>
                  <tr>
                    <th>{t.metric}</th>
                    {years.map(y => <th key={y}>{y}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t.occupancy}</td>
                    {asset.projections.occupancy.map((v, i) => <td key={i}>{v}%</td>)}
                  </tr>
                  <tr>
                    <td>ADR (€)</td>
                    {asset.projections.adr.map((v, i) => <td key={i}>{v}€</td>)}
                  </tr>
                  <tr>
                    <td>RevPAR (€)</td>
                    {asset.projections.revpar.map((v, i) => <td key={i}>{v}€</td>)}
                  </tr>
                  <tr>
                    <td>{t.revenues}</td>
                    {asset.projections.revenues.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>GOP (M€)</td>
                    {asset.projections.gop.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>{t.gopMargin}</td>
                    {asset.projections.gopMargin.map((v, i) => <td key={i}>{v}%</td>)}
                  </tr>
                  <tr className="highlight-row">
                    <td>NOI (M€)</td>
                    {asset.projections.noi.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>{t.cashFlow}</td>
                    {asset.projections.cashFlow.map((v, i) => <td key={i} className={v < 0 ? 'negative' : ''}>{v}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            
            {asset.exitAnalysis && (
              <div className="exit-analysis">
                <h4>{t.exitAnalysis} — {asset.exitAnalysis.year}</h4>
                <div className="exit-grid">
                  <div className="exit-item">
                    <span className="exit-label">{t.exitNOI}</span>
                    <span className="exit-value">{asset.exitAnalysis.exitNOI}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">{t.capRate}</span>
                    <span className="exit-value">{asset.exitAnalysis.capRate}%</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">{t.grossValue}</span>
                    <span className="exit-value">{asset.exitAnalysis.grossValue}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">{t.netProceeds}</span>
                    <span className="exit-value">{asset.exitAnalysis.netProceeds}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">{t.distributions}</span>
                    <span className="exit-value">{asset.exitAnalysis.totalDistributions}M€</span>
                  </div>
                  <div className="exit-item highlight">
                    <span className="exit-label">{t.totalReturn}</span>
                    <span className="exit-value">{asset.exitAnalysis.totalReturn}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">{t.equity}</span>
                    <span className="exit-value">{asset.exitAnalysis.equityInvested}M€</span>
                  </div>
                  <div className="exit-item highlight">
                    <span className="exit-label">{t.multiple}</span>
                    <span className="exit-value">{(asset.exitAnalysis.totalReturn / asset.exitAnalysis.equityInvested).toFixed(2)}x</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="comparison" style={{marginTop: '3rem', maxWidth: '800px', width: '100%'}}>
            <h4>{t.assetComparison}</h4>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{t.metric}</th>
                  <th>Benidorm</th>
                  <th>Fuencarral</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>{t.units}</td><td>225</td><td>70</td></tr>
                <tr><td>{t.totalInvestment}</td><td>45M€</td><td>28M€</td></tr>
                <tr><td>{t.irrUnlevered}</td><td>8.5%</td><td>9.2%</td></tr>
                <tr><td>{t.irrLevered}</td><td>14.2%</td><td>15.8%</td></tr>
                <tr><td>{t.multiple}</td><td>2.2x</td><td>2.0x</td></tr>
                <tr><td>{t.exitHorizon}</td><td>7-8 {t.years}</td><td>6-7 {t.years}</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Transparency Section - shown in analysis */}
      {section === 'analysis' && (
        <div className="transparency-section">
          <div className="transparency-header">
            <span className="section-label">{t.transparencySubtitle}</span>
            <h2>{t.transparencyTitle}</h2>
          </div>
          <div className="transparency-grid">
            <div className="transparency-card">
              <div className="transparency-icon">📊</div>
              <h3>{t.quarterlyReports}</h3>
              <p>{t.quarterlyReportsDesc}</p>
            </div>
            <div className="transparency-card">
              <div className="transparency-icon">💻</div>
              <h3>{t.investorPortal}</h3>
              <p>{t.investorPortalDesc}</p>
            </div>
            <div className="transparency-card">
              <div className="transparency-icon">📞</div>
              <h3>{t.directAccess}</h3>
              <p>{t.directAccessDesc}</p>
            </div>
            <div className="transparency-card">
              <div className="transparency-icon">🤝</div>
              <h3>{t.annualMeeting}</h3>
              <p>{t.annualMeetingDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form - shown in analysis */}
      {section === 'analysis' && (
        <div className="contact-section">
          <div className="contact-header">
            <span className="section-label">{t.contactSubtitle}</span>
            <h2>{t.contactTitle}</h2>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert(lang === 'es' ? 'Gracias por tu interés. Te contactaremos pronto.' : 'Thank you for your interest. We will contact you soon.'); }}>
            <div className="form-row">
              <input type="text" placeholder={t.contactName} required />
              <input type="email" placeholder={t.contactEmail} required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder={t.contactPhone} />
              <select defaultValue="">
                <option value="" disabled>{t.contactAmount}</option>
                <option value="100-250">€100.000 - €250.000</option>
                <option value="250-500">€250.000 - €500.000</option>
                <option value="500-1m">€500.000 - €1M</option>
                <option value="1m+">€1M+</option>
              </select>
            </div>
            <textarea placeholder={t.contactMessage} rows={4}></textarea>
            <button type="submit" className="submit-btn">{t.contactSubmit}</button>
            <p className="form-disclaimer">{t.contactDisclaimer}</p>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '2px', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)'}}>HOS CAPITAL</p>
        <p>{t.investmentClub}</p>
        <p style={{marginTop: '1rem'}}>{t.confidential}</p>
      </footer>
    </div>
  )
}

export default App
