import { BookOpen, Mail, MapPin } from 'lucide-react';

const publications = [
  { venue: 'NeurIPS 2026', image: 'papers/neurips-2026.png', title: 'Fast Algorithms for the Label Propagation Operator on Signed Graphs', authors: 'Yubo Sun, Zhongzhi Zhang', journal: 'Conference on Neural Information Processing Systems (NeurIPS), 2026', links: [] },
  { venue: 'TKDE 2026', image: 'papers/tkde-2026.png', title: 'Efficient Approximation Algorithms for Resolvent Subgraph Centrality on Signed Graphs', authors: 'Yubo Sun, Haoxin Sun, Ahad N. Zehmakan, Zhongzhi Zhang', journal: 'IEEE Transactions on Knowledge and Data Engineering (TKDE), 2026', links: [{ label: 'Paper', href: 'https://doi.org/10.1109/TKDE.2026.3730450' }, { label: 'Code', href: 'https://github.com/SunYubo23/SignedRSC' }] },
  { venue: 'KDD 2026', image: 'papers/kdd-2026.png', title: 'SigFJProp: Lightweight and Scalable Signed Graph Learning via Opinion Dynamics', authors: 'Yubo Sun, Haoxin Sun, Zhongzhi Zhang', journal: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2026', links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3770855.3817624' }, { label: 'Code', href: 'https://github.com/SunYubo23/SigFJProp' }, { label: 'Poster', href: 'posters/kdd-2026-poster.pdf' }] },
  { venue: 'WWW 2025', image: 'papers/www-2025.png', title: 'Scalable Algorithms for Forest-Based Centrality on Large Graphs', authors: 'Yubo Sun, Haoxin Sun, Zhongzhi Zhang', journal: 'The ACM Web Conference (WWW), 2025 · Oral Presentation', links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3696410.3714566' }, { label: 'Code', href: 'https://github.com/SunYubo23/Forest-Based-Centrality' }, { label: 'Poster', href: 'posters/www-2025-poster.pdf' }] },
  { venue: 'TKDE 2026', image: null, title: 'Behavior and Sublinear Algorithm for Opinion Disagreement on Noisy Social Networks', authors: 'Wanyue Xu, Yubo Sun, Mingzhe Zhu, Zuobai Zhang, Zhongzhi Zhang', journal: 'IEEE Transactions on Knowledge and Data Engineering (TKDE), 38(9): 5650–5663, 2026', links: [{ label: 'Paper', href: 'https://doi.org/10.1109/TKDE.2026.3680940' }, { label: 'arXiv', href: 'https://arxiv.org/abs/2604.01890' }] },
  { venue: 'NeurIPS 2025', image: null, title: 'Fast Computation and Optimization for Opinion-Based Quantities of Friedkin-Johnsen Model', authors: 'Haoxin Sun, Yubo Sun, Xiaotian Zhou, Zhongzhi Zhang', journal: 'Conference on Neural Information Processing Systems (NeurIPS), 2025', links: [{ label: 'Paper', href: 'https://openreview.net/forum?id=lCsVtkMusN' }, { label: 'Code', href: 'https://github.com/HaoxinSun98/FJ-PF' }] },
  { venue: 'TCAS-I 2025', image: null, title: 'Fast Algorithms for Resistance Distances on Signed Graphs', authors: 'Yuze Dong, Yubo Sun, Zhongzhi Zhang', journal: 'IEEE Transactions on Circuits and Systems I (TCAS-I), 2025', links: [{ label: 'Paper', href: 'https://doi.org/10.1109/TCSI.2025.3566515' }] },
];

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split('Yubo Sun');
  return parts.map((part, index) => <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <strong>Yubo Sun</strong>}</span>);
}

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#top">HomePage</a><a href="#about">About Me</a><a href="#publications">Publications</a><a href="#education">Education</a>
      </nav>
      <div className="page-grid" id="top">
        <aside className="profile-column">
          <img className="profile-photo" src="avatar.jpg" alt="Yubo Sun by the sea" />
          <h1>Yubo Sun</h1>
          <p className="affiliation">Research Institute of Intelligent Complex Systems<br />Fudan University</p>
          <div className="sidebar-block">
            <p className="sidebar-title">Research interests:</p>
            <ul><li>Efficient Graph Algorithms</li><li>Graph Representation Learning</li><li>Signed Graphs</li><li>Opinion Dynamics</li></ul>
          </div>
          <ul className="contact-list">
            <li><MapPin size={15} aria-hidden="true" /><span>Shanghai, China</span></li>
            <li><Mail size={15} aria-hidden="true" /><a href="mailto:25110890019@m.fudan.edu.cn">Email</a></li>
            <li><span className="contact-mark">G</span><a href="https://github.com/SunYubo23" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><span className="contact-mark">GS</span><a href="https://scholar.google.com/citations?user=yuFVuLgAAAAJ&amp;hl=zh-CN" target="_blank" rel="noreferrer">Google Scholar</a></li>
            <li><BookOpen size={15} aria-hidden="true" /><a href="https://dblp.org/pid/195/9056-2" target="_blank" rel="noreferrer">DBLP</a></li>
            <li><span className="contact-mark">iD</span><a href="https://orcid.org/0009-0008-8207-8122" target="_blank" rel="noreferrer">ORCID</a></li>
          </ul>
        </aside>
        <div className="content-column">
          <section id="about">
            <h2><span aria-hidden="true">🌟</span> About Me</h2>
            <p>I am a Ph.D. student in the <strong>Research Institute of Intelligent Complex Systems (IICS)</strong> at Fudan University.</p>
            <p>My research lies at the intersection of <strong>graph algorithms</strong>, <strong>network science</strong>, and <strong>graph learning</strong>. I develop theoretically grounded methods for graph centrality, signed networks, and opinion dynamics that remain practical on large-scale data.</p>
          </section>
          <section id="publications">
            <h2><span aria-hidden="true">📝</span> Publications</h2>
            <div className="publication-list">{publications.map((paper) => (
              <article className={`publication ${paper.image ? 'has-figure' : 'no-figure'}`} key={paper.title}>
                {paper.image && <figure className="paper-figure-wrap">
                  <img className="paper-figure" src={paper.image} alt={`Figure from ${paper.title}`} />
                  <figcaption>{paper.venue}</figcaption>
                </figure>}
                <div><h3>{paper.title}</h3><p className="authors"><HighlightedAuthors authors={paper.authors} /></p><p className="journal">{paper.journal}</p>
                  {paper.links.length > 0 && <p className="paper-links">{paper.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">[{link.label}]</a>)}</p>}
                </div>
              </article>
            ))}</div>
          </section>
          <section id="education">
            <h2><span aria-hidden="true">📖</span> Education</h2>
            <ul className="dated-list"><li><span>2023 — Present</span><p><strong>Ph.D. in IICS</strong>, Fudan University, China.<br />Advisor: Prof. Zhongzhi Zhang.</p></li><li><span>2019 — 2023</span><p><strong>B.Eng. in Software Engineering</strong>, East China Normal University, China.</p></li></ul>
          </section>
          <section id="service">
            <h2><span aria-hidden="true">💻</span> Academic Service</h2><p>Reviewer for WWW, KDD, NeurIPS, IJCAI, and ICML.</p>
          </section>
          <footer><p>© 2026 Yubo Sun</p><a href="mailto:25110890019@m.fudan.edu.cn">25110890019@m.fudan.edu.cn</a></footer>
        </div>
      </div>
    </main>
  );
}
