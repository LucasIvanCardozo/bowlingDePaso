export default function Confetis({ direction }) {
  const colors = ['red', 'green', 'blue', 'orange', 'yellow'];

  const getRandomStyles = () => {
    let num = 1 + Math.floor(Math.random() * 10);
    let time = 1 + Math.random() * 1.5;
    return {
      backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
      top: `${50 + Math.floor(Math.random() * 25)}%`,
      animation: `${time}s ease-out .5s x${num} forwards`,
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
    </div>
  );
}
