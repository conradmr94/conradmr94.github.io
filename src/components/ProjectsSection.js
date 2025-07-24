import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Machine Learning-Driven Trading Simulator',
    summary: 'A portfolio backtester and strategy learner for equity trading with Q-Learning and ensemble methods.',
    details: 'Simulates realistic trading constraints, outperforms benchmarks, and analyzes market impact vs. trade frequency.',
    tech: 'Python, Ensemble Learners, Pandas, NumPy',
    tags: ['Finance', 'ML', 'Python'],
    image: process.env.PUBLIC_URL + '/assets/ml_based_trading_simulator.png',
    codeSnippet: `# Q-Learning update\nQ[state, action] += alpha * (reward + gamma * max(Q[next_state]) - Q[state, action])`,
    link: '',
  },
  {
    title: 'Multithreaded Stock Trading Engine',
    summary: 'A high-performance trading engine supporting concurrent order processing and real-time matching.',
    details: 'Implements multithreaded order book management, atomic trade execution, and low-latency matching logic. Designed for scalability and robust error handling in simulated and live environments.',
    tech: 'C++20, Multithreading, Concurrency, STL',
    tags: ['Finance', 'C++', 'Concurrency'],
    codeSnippet: `std::thread t1(&OrderBook::processOrders, &orderBook);\nstd::thread t2(&OrderBook::matchOrders, &orderBook);\nt1.join();\nt2.join();`,
    link: 'https://github.com/conradmr94/multithreaded_stock_trading',
  },
  {
    title: 'Stock Price Movement Prediction',
    summary: 'Classification models using SVMs and KRR, with unsupervised clustering and PCA.',
    details: 'Achieved F1-score of 0.80, clustered equities into 30+ segments, and performed advanced time series analysis.',
    tech: 'SVM, KRR, PCA',
    tags: ['Finance', 'ML', 'Python'],
    image: process.env.PUBLIC_URL + '/assets/stock_price_movement_prediction.png',
    codeSnippet: `from sklearn.svm import SVC\nmodel = SVC(kernel=\"rbf\")\nmodel.fit(X_train, y_train)`,
    link: '',
  },
  {
    title: 'Q-Learning/Dyna-Q Agent',
    summary: 'Tabular Q-learning agent with Dyna-Q planning for RL trading strategies.',
    details: 'Implements Bellman update rules, stochastic exploration, and synthetic experience replay.',
    tech: 'Python, RL, Q-Learning, Dyna-Q',
    tags: ['ML', 'RL', 'Python'],
    image: process.env.PUBLIC_URL + '/assets/qlearning.png',
    codeSnippet: `# Dyna-Q planning\nfor _ in range(n):\n    s, a, r, s_ = sample_experience()\n    Q[s, a] += alpha * (r + gamma * max(Q[s_]) - Q[s, a])`,
    link: '',
  },
  {
    title: 'Market Simulator',
    summary: 'Realistic market simulator for equity portfolio performance.',
    details: 'Implements cash management, transaction costs, and market impact. Vectorized pipeline for portfolio value and returns.',
    tech: 'Python, Pandas, NumPy',
    tags: ['Finance', 'Simulation', 'Python'],
    image: process.env.PUBLIC_URL + '/assets/market_simulator.png',
    codeSnippet: `portfolio_value = cash + (holdings * prices).sum(axis=1)`,
    link: '',
  },
  {
    title: 'Martingale Strategy Simulator',
    summary: 'Monte Carlo simulations of the Martingale betting strategy under various constraints.',
    details: 'Analyzed risk, variance, and success rates across 1,000+ episodes using statistical metrics and graphical summaries.',
    tech: 'Python, NumPy, Matplotlib',
    tags: ['Simulation', 'Python'],
    image: process.env.PUBLIC_URL + '/assets/martingale.png',
    codeSnippet: `for i in range(n_trials):\n    bankroll = initial\n    while bankroll > 0: ...`,
    link: '',
  },
  {
    title: 'Example-Based Machine Learning Explanations',
    summary: 'Explaining CNNs by showing users example inputs/outputs. Pending submission/approval.',
    details: 'Developed question-generation algorithms and pipelines for contrastive explanations in ML.',
    tech: 'Python, Keras, Django',
    tags: ['ML', 'Explainability', 'Python'],
    codeSnippet: `# SHAP explanation\nshap_values = explainer.shap_values(X)`,
    link: '',
  },
  {
    title: 'Order Book',
    summary: 'A lightweight C++ implementation of an order book system supporting basic order types and matching logic.',
    details: 'Simulates core trading mechanisms: placing orders, cancelling, and executing trades.',
    tech: 'C++17',
    tags: ['Finance', 'C++'],
    codeSnippet: `struct Order {\n  double price;\n  int quantity;\n};`,
    link: 'https://github.com/conradmr94/orderbook',
  },
  {
    title: 'Trading Engine Server',
    summary: 'A skeleton of a stock trading engine server, written in C# using .NET.',
    details: 'Implements order matching and trade execution logic.',
    tech: 'C#, .NET',
    tags: ['Finance', 'C#', '.NET'],
    codeSnippet: `public class Order {\n  public decimal Price { get; set; }\n  public int Quantity { get; set; }\n}`,
    link: 'https://github.com/conradmr94/TradingEngineServer',
  },
  {
    title: 'Stock Portfolio Calculator',
    summary: 'A calculator app to generate buy lists and portfolio distributions given a target purchase volume.',
    details: 'Python/Flask app for portfolio allocation and buy list generation.',
    tech: 'Python, Flask, Pandas',
    tags: ['Finance', 'Python', 'Flask'],
    codeSnippet: `def allocate_portfolio(total, weights):\n    return {k: total*v for k, v in weights.items()}`,
    link: 'https://github.com/conradmr94/portfolio_calculator',
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

const ProjectsSection = () => {
  const [open, setOpen] = useState(null);
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" style={{width: '100%', padding: '3rem 0', zIndex: 1, position: 'relative'}}>
      <h2 style={{textAlign: 'center', color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Projects</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
        <button onClick={() => setFilter('All')} style={{background: filter==='All' ? 'var(--accent)' : 'var(--muted)', color: filter==='All' ? '#fff' : 'var(--accent)', border: 'none', borderRadius: 6, padding: '0.5em 1.2em', cursor: 'pointer', fontWeight: 600}}>All</button>
        {allTags.map(tag => (
          <button key={tag} onClick={() => setFilter(tag)} style={{background: filter===tag ? 'var(--accent)' : 'var(--muted)', color: filter===tag ? '#fff' : 'var(--accent)', border: 'none', borderRadius: 6, padding: '0.5em 1.2em', cursor: 'pointer', fontWeight: 600}}>{tag}</button>
        ))}
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
        {filtered.map((proj, idx) => (
          <motion.div
            key={proj.title}
            layout
            initial={{borderRadius: 16}}
            style={{background: 'var(--panel)', boxShadow: '0 2px 12px rgba(94,124,60,0.08)', borderRadius: 16, width: 340, cursor: 'pointer', position: 'relative', border: open === idx ? '2px solid var(--accent)' : 'none'}}
            onClick={() => setOpen(open === idx ? null : idx)}
            whileHover={{scale: 1.03}}
            transition={{type: 'spring', stiffness: 300, damping: 20}}
          >
            <div style={{padding: '1.2rem 1.2rem 0.5rem 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {proj.image && <img src={proj.image} alt={proj.title + ' diagram'} style={{width: 80, height: 54, marginBottom: 12, filter: 'var(--svg-filter, none)'}} />}
              <h3 style={{margin: 0, color: 'var(--accent2)', textAlign: 'center'}}>{proj.title}</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', textAlign: 'center'}}>{proj.summary}</p>
              <span style={{fontSize: '0.95rem', color: 'var(--accent)'}}>{proj.tech}</span>
              <div style={{marginTop: 8, display: 'flex', gap: 6}}>
                {proj.tags.map(tag => <span key={tag} style={{background: 'var(--muted)', color: 'var(--accent)', borderRadius: 4, padding: '2px 8px', fontSize: '0.85em'}}>{tag}</span>)}
              </div>
              {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{marginTop: 8, color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline'}}>View Code</a>}
            </div>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 20}}
                  style={{padding: '1.2rem', borderTop: '1px solid var(--muted)', background: 'var(--panel-alt)', borderRadius: '0 0 16px 16px'}}
                >
                  <p style={{color: 'var(--text-main)', margin: 0, marginBottom: 12}}>{proj.details}</p>
                  <pre style={{background: 'var(--muted)', color: 'var(--text-main)', borderRadius: 6, padding: '0.8em', fontSize: '0.98em', overflowX: 'auto'}}>
                    {proj.codeSnippet}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 