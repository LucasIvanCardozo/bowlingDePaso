export default function Confetis({ direction }) {
  const colors = ['red', 'green', 'blue', 'orange', 'yellow'];

  const getRandomStyles = () => {
    let num = 1 + Math.floor(Math.random().toFixed(2) * 10);
    let time = 1 + Math.random().toFixed(2) * 1.5;
    let iter = 0.5 + Math.random().toFixed(2) * 0.5;
    return {
      backgroundColor:
        colors[Math.floor(Math.random().toFixed(2) * colors.length)],
      top: `${30 + Math.floor(Math.random().toFixed(2) * 35)}%`,
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
      <div className="confeti" style={getRandomStyles()}></div>{' '}
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
    </div>
  );
}
