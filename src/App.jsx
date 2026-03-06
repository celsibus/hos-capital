import { useState } from 'react'
import './App.css'

const operators = [
  { name: 'Pierre & Vacances', type: 'Líder europeo en apartamentos turísticos', fit: 'Ideal para Benidorm - mercado costero', terms: '65% GOP, 15-20 años' },
  { name: 'Sonder', type: 'Apartamentos premium urbanos', fit: 'Ideal para Madrid - tecnología y diseño', terms: '60-65% GOP, 10-15 años' },
  { name: 'Numa', type: 'Design-focused extended stay', fit: 'Madrid - segmento premium', terms: '62-68% GOP, 12-15 años' },
  { name: 'Limehome', type: 'Apartamentos urbanos tech-enabled', fit: 'Ambos mercados', terms: '60-65% GOP, 10-15 años' },
]

const team = [
  { name: 'Celso Luis Fernández', role: 'CEO', desc: 'Liderazgo estratégico y visión de inversión' },
  { name: 'Mónica Munar', role: 'Directora de Operaciones', desc: 'Gestión operativa y eficiencia' },
  { name: 'Carlos Pereira', role: 'Director Asset Management', desc: 'Maximización del valor' },
  { name: 'Yeranni Brea', role: 'Directora de Expansión', desc: 'Sourcing de oportunidades' },
  { name: 'Guillem Cabot', role: 'Análisis Financiero', desc: 'Modelización y due diligence' },
  { name: 'Laura Lospennato', role: 'Relaciones con Inversores', desc: 'Comunicación y reporting' },
  { name: 'Nacho de La Fuente', role: 'Project Manager', desc: 'Due diligence y ejecución' },
]

const assets = [
  {
    id: 'benidorm',
    name: 'Apartamentos Turísticos Benidorm',
    location: 'Primera línea Playa Poniente, Benidorm',
    type: 'Apartamentos Turísticos 3 Llaves',
    units: 225,
    distribution: '200 (1 hab) + 25 (2 hab)',
    parking: '200 plazas incluidas',
    built: 1980,
    renovated: 2015,
    highlights: ['50% con vistas al mar', 'Primera línea de playa', 'Centro histórico a 500m'],
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
    valueCreation: [
      'Reposicionamiento de TT.OO a canales directos',
      'Nueva marca especializada en apartamentos premium',
      'Revenue management profesionalizado',
      'Mejoras ESG y certificación sostenibilidad'
    ],
    irr: { unlevered: 8.5, levered: 14.2 },
    multiple: 2.2,
    exit: 'Venta a inversor Core año 2032'
  },
  {
    id: 'fuencarral',
    name: 'Apartamentos Turísticos Madrid',
    location: 'Calle Fuencarral, 150m de Gran Vía',
    type: 'Apartamentos Turísticos 3 Llaves',
    units: 70,
    distribution: '30 (1 hab) + 40 (2 hab)',
    parking: 'No incluido',
    built: 2017,
    renovated: 'Obra nueva (conversión)',
    highlights: ['Ubicación prime Madrid', 'A 150m de Gran Vía', 'Zona comercial premium'],
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
    valueCreation: [
      'Sustitución de operador actual',
      'Incremento ADR por gestión profesional',
      'Optimización de canales digitales',
      'Posicionamiento como apartamentos boutique'
    ],
    irr: { unlevered: 9.2, levered: 15.8 },
    multiple: 2.0,
    exit: 'Venta a inversor Core año 2032'
  }
]

function App() {
  const [activeAsset, setActiveAsset] = useState('benidorm')
  const [leverage, setLeverage] = useState(40)
  const [section, setSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigateTo = (s) => {
    setSection(s)
    setMobileMenuOpen(false)
  }

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
        <img src="/logo-nav.svg" alt="HOS Capital" className="nav-logo" />
        <div className="nav-links">
          <a onClick={() => setSection('hero')}>Home</a>
          <a onClick={() => setSection('strategy')}>Investment Strategy</a>
          <a onClick={() => setSection('team')}>About</a>
          <a onClick={() => setSection('deals')}>Portfolio</a>
          <a onClick={() => setSection('analysis')}>Investor Relations</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a onClick={() => navigateTo('hero')}>Home</a>
          <a onClick={() => navigateTo('strategy')}>Investment Strategy</a>
          <a onClick={() => navigateTo('team')}>About</a>
          <a onClick={() => navigateTo('deals')}>Portfolio</a>
          <a onClick={() => navigateTo('analysis')}>Investor Relations</a>
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
            <span className="section-label">Nuestro Enfoque</span>
            <h2>ESTRATEGIA CORE+</h2>
            <p>
              Estructuramos cada inversión como un Club Deal independiente. 
              Los inversores saben exactamente qué activo se adquiere, qué plan de valor se ejecuta y qué retorno se espera.
            </p>
          </div>
          <div className="strategy-grid">
            <div className="strategy-card">
              <div className="icon">📊</div>
              <h3>TIR Objetivo</h3>
              <p>7% sin apalancamiento. 10-15% con 25-50% apalancamiento conservador.</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🏨</div>
              <h3>Activos Target</h3>
              <p>Hoteles y apartamentos turísticos 4-5 estrellas operativos con potencial de mejora operativa.</p>
            </div>
            <div className="strategy-card">
              <div className="icon">📍</div>
              <h3>Ubicaciones</h3>
              <p>Tier 1 y Tier 2 con demanda turística estable y flujos predecibles.</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🤝</div>
              <h3>Operadores</h3>
              <p>Preferencia por acuerdos de renta garantizada con Meliá, NH y Barceló.</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🌱</div>
              <h3>Compromiso ESG</h3>
              <p>Integración de mejoras ambientales, sociales y de gobernanza en cada activo.</p>
            </div>
            <div className="strategy-card">
              <div className="icon">🚪</div>
              <h3>Estrategia de Salida</h3>
              <p>Estabilizar activo, consolidar flujos y vender a inversor core. Horizonte: 7-10 años.</p>
            </div>
          </div>
          <div className="spain-context">
            <h3>¿Por qué España? ¿Por qué ahora?</h3>
            <div className="context-points">
              <div className="point">
                <span className="point-icon">📈</span>
                <strong>Demanda Récord</strong>
                <p>116M turistas anuales, 68% ocupación hotelera</p>
              </div>
              <div className="point">
                <span className="point-icon">💰</span>
                <strong>Repricing Incompleto</strong>
                <p>NOI en máximos pero valores aún no recuperados</p>
              </div>
              <div className="point">
                <span className="point-icon">🏦</span>
                <strong>Distress Financiero</strong>
                <p>Activos buenos obligados a vender por refinanciaciones</p>
              </div>
              <div className="point">
                <span className="point-icon">⚡</span>
                <strong>Creación de Valor</strong>
                <p>Reposicionamiento, eficiencia energética, gestión de canales</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {section === 'team' && (
        <section className="team">
          <div className="team-header">
            <span className="section-label">Quiénes Somos</span>
            <h2>NUESTRO EQUIPO</h2>
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
            <span className="section-label">Portfolio</span>
            <h2>CLUB DEALS ACTUALES</h2>
          </div>
          <div className="deals-tabs">
            {assets.map(a => (
              <button 
                key={a.id}
                className={`deal-tab ${activeAsset === a.id ? 'active' : ''}`}
                onClick={() => setActiveAsset(a.id)}
              >
                {a.name}
              </button>
            ))}
          </div>
          <div className="deal-detail">
            <div className="deal-header">
              <h3>{asset.name}</h3>
              <span className="deal-type">{asset.type}</span>
            </div>
            <div className="deal-grid">
              <div className="deal-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Ubicación:</strong> {asset.location}</li>
                  <li><strong>Unidades:</strong> {asset.units} ({asset.distribution})</li>
                  <li><strong>Parking:</strong> {asset.parking}</li>
                  <li><strong>Construcción:</strong> {asset.built}</li>
                  <li><strong>Renovación:</strong> {asset.renovated}</li>
                </ul>
                <h4 style={{marginTop: '2rem'}}>Highlights</h4>
                <ul>
                  {asset.highlights.map((h, i) => <li key={i}>✓ {h}</li>)}
                </ul>
              </div>
              <div className="deal-investment">
                <h4>Estructura de Inversión</h4>
                <div className="investment-bar">
                  <div className="equity-bar" style={{width: `${(asset.investment.equity/asset.investment.total)*100}%`}}>
                    Equity: {asset.investment.equity}M€
                  </div>
                  <div className="debt-bar" style={{width: `${(asset.investment.debt/asset.investment.total)*100}%`}}>
                    Deuda: {asset.investment.debt}M€
                  </div>
                </div>
                <p className="total-inv">Total: {asset.investment.total}M€</p>
                <h4>Creación de Valor</h4>
                <ul>
                  {asset.valueCreation.map((v, i) => <li key={i}>→ {v}</li>)}
                </ul>
              </div>
              <div className="deal-returns">
                <h4>Retornos Esperados</h4>
                <div className="return-metrics">
                  <div className="return-metric">
                    <span className="return-value">{asset.irr.unlevered}%</span>
                    <span className="return-label">TIR Unlevered</span>
                  </div>
                  <div className="return-metric highlight">
                    <span className="return-value">{asset.irr.levered}%</span>
                    <span className="return-label">TIR Levered</span>
                  </div>
                  <div className="return-metric">
                    <span className="return-value">{asset.multiple}x</span>
                    <span className="return-label">Múltiplo</span>
                  </div>
                </div>
                <div className="exit-strategy"><strong>Exit:</strong> {asset.exit}</div>
              </div>
            </div>
            <div className="operators-section">
              <h4>Operadores Potenciales</h4>
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
          </div>
        </section>
      )}

      {/* Analysis Section */}
      {section === 'analysis' && (
        <section className="analysis">
          <div className="analysis-header">
            <span className="section-label">Investor Relations</span>
            <h2>ANÁLISIS INTERACTIVO</h2>
          </div>
          <div className="analysis-controls">
            <div className="control-group">
              <label>Activo:</label>
              <select value={activeAsset} onChange={e => setActiveAsset(e.target.value)}>
                {assets.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div className="control-group">
              <label>Apalancamiento: {leverage}%</label>
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
                <span className="irr-label">TIR Unlevered</span>
                <span className="irr-value">{asset.irr.unlevered}%</span>
              </div>
              <div className="irr-card primary">
                <span className="irr-label">TIR Levered ({leverage}%)</span>
                <span className="irr-value">{calculateIRR(asset.irr.levered, leverage)}%</span>
              </div>
            </div>
            <div className="projections-table">
              <h4>Proyecciones 2026-2032</h4>
              <table>
                <thead>
                  <tr>
                    <th>Métrica</th>
                    {years.map(y => <th key={y}>{y}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ocupación (%)</td>
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
                    <td>Ingresos (M€)</td>
                    {asset.projections.revenues.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>GOP (M€)</td>
                    {asset.projections.gop.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>Margen GOP (%)</td>
                    {asset.projections.gopMargin.map((v, i) => <td key={i}>{v}%</td>)}
                  </tr>
                  <tr className="highlight-row">
                    <td>NOI (M€)</td>
                    {asset.projections.noi.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                  <tr>
                    <td>Cash Flow (M€)</td>
                    {asset.projections.cashFlow.map((v, i) => <td key={i} className={v < 0 ? 'negative' : ''}>{v}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            
            {asset.exitAnalysis && (
              <div className="exit-analysis">
                <h4>Análisis de Salida — {asset.exitAnalysis.year}</h4>
                <div className="exit-grid">
                  <div className="exit-item">
                    <span className="exit-label">NOI Exit</span>
                    <span className="exit-value">{asset.exitAnalysis.exitNOI}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">Cap Rate</span>
                    <span className="exit-value">{asset.exitAnalysis.capRate}%</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">Valor Bruto</span>
                    <span className="exit-value">{asset.exitAnalysis.grossValue}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">Producto Neto</span>
                    <span className="exit-value">{asset.exitAnalysis.netProceeds}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">Distribuciones</span>
                    <span className="exit-value">{asset.exitAnalysis.totalDistributions}M€</span>
                  </div>
                  <div className="exit-item highlight">
                    <span className="exit-label">Retorno Total</span>
                    <span className="exit-value">{asset.exitAnalysis.totalReturn}M€</span>
                  </div>
                  <div className="exit-item">
                    <span className="exit-label">Equity</span>
                    <span className="exit-value">{asset.exitAnalysis.equityInvested}M€</span>
                  </div>
                  <div className="exit-item highlight">
                    <span className="exit-label">Múltiplo</span>
                    <span className="exit-value">{(asset.exitAnalysis.totalReturn / asset.exitAnalysis.equityInvested).toFixed(2)}x</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="comparison" style={{marginTop: '3rem', maxWidth: '800px', width: '100%'}}>
            <h4>Comparativa de Activos</h4>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Benidorm</th>
                  <th>Fuencarral</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Unidades</td><td>225</td><td>70</td></tr>
                <tr><td>Inversión Total</td><td>45M€</td><td>28M€</td></tr>
                <tr><td>TIR Unlevered</td><td>8.5%</td><td>9.2%</td></tr>
                <tr><td>TIR Levered</td><td>14.2%</td><td>15.8%</td></tr>
                <tr><td>Múltiplo</td><td>2.2x</td><td>2.0x</td></tr>
                <tr><td>Horizonte Exit</td><td>7-8 años</td><td>6-7 años</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '2px', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)'}}>HOS CAPITAL</p>
        <p>Hospitality Investment Club</p>
        <p style={{marginTop: '1rem'}}>Información confidencial para inversores cualificados</p>
      </footer>
    </div>
  )
}

export default App
