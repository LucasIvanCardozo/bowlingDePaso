export default function Confetis({ direction }) {
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gold'];

  const getRandomStyles = () => {
    let num = 1 + Math.floor(Math.random() * 10);
    let time = 1 + Math.random() * 1.5;
    let iter = 0.5 + Math.random() * 0.5;
    return {
      backgroundColor:
        colors[Math.floor(Math.random().toFixed(2) * colors.length)],
      top: `${20 + Math.floor(Math.random().toFixed(2) * 40)}%`,
      animation: `${time}s ease-out .5s x${num} forwards, balanceo${num} ease-in-out ${iter}s 12 alternate forwards 2s`,
    };
  };

  return (
    <div className={direction ? 'confetis2' : 'confetis1'}>
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
