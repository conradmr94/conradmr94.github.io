import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TradingGame = () => {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'gameOver'
  const [portfolio, setPortfolio] = useState({ cash: 10000, shares: 0, totalValue: 10000 });
  const [currentPrice, setCurrentPrice] = useState(100);
  const [priceHistory, setPriceHistory] = useState([100]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  // Generate realistic price movements
  const generatePrice = useCallback((lastPrice) => {
    const volatility = 0.04; // Increased from 0.02 for more volatility
    const drift = 0.001;
    const change = (Math.random() - 0.5) * volatility + drift;
    return Math.max(1, lastPrice * (1 + change));
  }, []);

  // Update price every second
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentPrice(prev => {
        const newPrice = generatePrice(prev);
        setPriceHistory(hist => [...hist.slice(-19), newPrice]);
        return newPrice;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, generatePrice]);

  // Game timer
  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          setGameState('gameOver');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Update portfolio value
  useEffect(() => {
    const totalValue = portfolio.cash + (portfolio.shares * currentPrice);
    setPortfolio(prev => ({ ...prev, totalValue }));
    setScore(Math.floor((totalValue - 10000) / 100));
  }, [currentPrice, portfolio.cash, portfolio.shares]);

  const startGame = () => {
    setGameState('playing');
    setIsPlaying(true);
    setPortfolio({ cash: 10000, shares: 0, totalValue: 10000 });
    setCurrentPrice(100);
    setPriceHistory([100]);
    setTimeLeft(60);
    setScore(0);
    setTransactions([]);
  };

  const buyShares = () => {
    if (portfolio.cash >= currentPrice) {
      const sharesToBuy = Math.floor(portfolio.cash / currentPrice);
      const cost = sharesToBuy * currentPrice;
      
      setPortfolio(prev => ({
        ...prev,
        cash: prev.cash - cost,
        shares: prev.shares + sharesToBuy
      }));
      
      setTransactions(prev => [...prev, {
        type: 'buy',
        shares: sharesToBuy,
        price: currentPrice,
        time: Date.now()
      }]);
    }
  };

  const sellShares = () => {
    if (portfolio.shares > 0) {
      const sharesToSell = Math.min(portfolio.shares, 10); // Sell up to 10 shares at a time
      const revenue = sharesToSell * currentPrice;
      
      setPortfolio(prev => ({
        ...prev,
        cash: prev.cash + revenue,
        shares: prev.shares - sharesToSell
      }));
      
      setTransactions(prev => [...prev, {
        type: 'sell',
        shares: sharesToSell,
        price: currentPrice,
        time: Date.now()
      }]);
    }
  };

  const sellAllShares = () => {
    if (portfolio.shares > 0) {
      const revenue = portfolio.shares * currentPrice;
      
      setPortfolio(prev => ({
        ...prev,
        cash: prev.cash + revenue,
        shares: 0
      }));
      
      setTransactions(prev => [...prev, {
        type: 'sell',
        shares: portfolio.shares,
        price: currentPrice,
        time: Date.now()
      }]);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getPriceColor = () => {
    if (priceHistory.length < 2) return 'var(--text-main)';
    const prevPrice = priceHistory[priceHistory.length - 2];
    return currentPrice > prevPrice ? '#4caf50' : currentPrice < prevPrice ? '#f44336' : 'var(--text-main)';
  };

  if (gameState === 'menu') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'var(--panel)',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(94,124,60,0.15)',
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto'
        }}
      >
        <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>🎮 Trading Simulator</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Test your trading instincts! Buy and sell shares in real-time. 
          Make the most profit in 60 seconds.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={startGame}
            style={{
              background: 'var(--accent)',
              color: 'var(--panel)',
              border: 'none',
              borderRadius: 8,
              padding: '0.8em 1.5em',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Start Game
          </button>
          
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            style={{
              background: 'var(--muted)',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: 8,
              padding: '0.8em 1.5em',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            How to Play
          </button>
        </div>

        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'var(--panel-alt)',
                borderRadius: 8,
                textAlign: 'left'
              }}
            >
              <h4 style={{ color: 'var(--accent2)', marginBottom: '0.5rem' }}>How to Play:</h4>
              <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem' }}>
                <li>Start with $10,000 cash</li>
                <li>Buy shares when you think the price will go up</li>
                <li>Sell shares when you think the price will go down</li>
                <li>Try to maximize your portfolio value in 60 seconds</li>
                <li>Watch the price chart for trends!</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  if (gameState === 'gameOver') {
    const profit = portfolio.totalValue - 10000;
    const profitPercent = ((portfolio.totalValue / 10000) - 1) * 100;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: 'var(--panel)',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(94,124,60,0.15)',
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto'
        }}
      >
        <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Game Over!</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: profit >= 0 ? '#4caf50' : '#f44336' }}>
            {formatCurrency(portfolio.totalValue)}
          </div>
          <div style={{ color: 'var(--text-muted)' }}>
            {profit >= 0 ? '+' : ''}{formatCurrency(profit)} ({profitPercent >= 0 ? '+' : ''}{profitPercent.toFixed(1)}%)
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={startGame}
            style={{
              background: 'var(--accent)',
              color: 'var(--panel)',
              border: 'none',
              borderRadius: 8,
              padding: '0.8em 1.5em',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Play Again
          </button>
          
          <button
            onClick={() => setGameState('menu')}
            style={{
              background: 'var(--muted)',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: 8,
              padding: '0.8em 1.5em',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Main Menu
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'var(--panel)',
        borderRadius: 16,
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(94,124,60,0.15)',
        maxWidth: 600,
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--accent)', margin: 0 }}>Trading Simulator</h3>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
            {timeLeft}s
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Score: {score}
          </div>
        </div>
      </div>

      {/* Price Chart */}
      <div style={{ 
        background: 'var(--panel-alt)', 
        borderRadius: 8, 
        padding: '1rem', 
        marginBottom: '1.5rem',
        height: 120,
        position: 'relative'
      }}>
        <div style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: getPriceColor(),
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}>
          {formatCurrency(currentPrice)}
        </div>
        
        {/* Simple price chart */}
        <svg width="100%" height="60" style={{ overflow: 'visible' }}>
          <polyline
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            points={priceHistory.map((price, i) => `${(i / (priceHistory.length - 1)) * 100},${60 - ((price - Math.min(...priceHistory)) / (Math.max(...priceHistory) - Math.min(...priceHistory))) * 50}`).join(' ')}
          />
        </svg>
      </div>

      {/* Portfolio */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '1rem', 
        marginBottom: '1.5rem' 
      }}>
        <div style={{ background: 'var(--panel-alt)', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Cash</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
            {formatCurrency(portfolio.cash)}
          </div>
        </div>
        
        <div style={{ background: 'var(--panel-alt)', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Shares</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
            {portfolio.shares}
          </div>
        </div>
        
        <div style={{ background: 'var(--panel-alt)', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Total Value</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
            {formatCurrency(portfolio.totalValue)}
          </div>
        </div>
      </div>

      {/* Trading Controls */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={buyShares}
          disabled={portfolio.cash < currentPrice}
          style={{
            background: portfolio.cash >= currentPrice ? '#4caf50' : 'var(--muted)',
            color: portfolio.cash >= currentPrice ? 'white' : 'var(--text-muted)',
            border: 'none',
            borderRadius: 8,
            padding: '0.8em 1.5em',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: portfolio.cash >= currentPrice ? 'pointer' : 'not-allowed',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => {
            if (portfolio.cash >= currentPrice) e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Buy Shares
        </button>
        
        <button
          onClick={sellShares}
          disabled={portfolio.shares === 0}
          style={{
            background: portfolio.shares > 0 ? '#f44336' : 'var(--muted)',
            color: portfolio.shares > 0 ? 'white' : 'var(--text-muted)',
            border: 'none',
            borderRadius: 8,
            padding: '0.8em 1.5em',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: portfolio.shares > 0 ? 'pointer' : 'not-allowed',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => {
            if (portfolio.shares > 0) e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Sell Shares
        </button>
        
        <button
          onClick={sellAllShares}
          disabled={portfolio.shares === 0}
          style={{
            background: portfolio.shares > 0 ? '#ff9800' : 'var(--muted)',
            color: portfolio.shares > 0 ? 'white' : 'var(--text-muted)',
            border: 'none',
            borderRadius: 8,
            padding: '0.8em 1.5em',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: portfolio.shares > 0 ? 'pointer' : 'not-allowed'
          }}
        >
          Sell All
        </button>
      </div>

      {/* Recent Transactions */}
      {transactions.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ color: 'var(--accent2)', marginBottom: '0.5rem' }}>Recent Transactions</h4>
          <div style={{ maxHeight: 120, overflowY: 'auto' }}>
            {transactions.slice(-5).reverse().map((tx, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0.3rem 0',
                borderBottom: i < transactions.slice(-5).length - 1 ? '1px solid var(--muted)' : 'none'
              }}>
                <span style={{ color: tx.type === 'buy' ? '#4caf50' : '#f44336', fontWeight: 600 }}>
                  {tx.type.toUpperCase()}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                  {tx.shares} shares @ {formatCurrency(tx.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TradingGame; 