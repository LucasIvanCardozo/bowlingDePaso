export default function Confetis() {
  const colors = [
    'red',
    'green',
    'blue',
    'blueviolet',
    'pink',
    'aqua',
    'gold',
    'green',
  ];

  const getTextAnimation = () => {
    let num = Math.random() * 8;
    return `x${num} .7s linear forwards alternate,
    y${num} .7s forwards cubic-bezier(0, 1, 1, 1)`;
  };

  const getRandomStyles = () => {
    return {
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      top: 100 - Math.floor(Math.random() * 60),
      animation: getTextAnimation(),
    };
  };

  return (
    <div className="confetis">
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
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
      <div className="confeti" style={getRandomStyles()}></div>
    </div>
  );
}
