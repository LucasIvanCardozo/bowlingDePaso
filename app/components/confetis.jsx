export default function Confetis({ direction }) {
  const colors = ['red', 'green', 'blue', 'pink', 'aqua'];

  const getTextAnimation = () => {
    let num = Math.random() * 8;
    return `x${num} 1.3s linear forwards alternate,
    y${num} 1.3s forwards cubic-bezier(0, 1, 1, 1)`;
  };

  const getRandomStyles = () => {
    return {
      backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
      top: `${10 - Math.floor(Math.random() * 4)}em`,
      animation: getTextAnimation(),
    };
  };

  return (
    <div
      className="confetis"
      style={direction ? { transform: 'rotateY(180deg)' } : null}
    >
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
    </div>
  );
}
