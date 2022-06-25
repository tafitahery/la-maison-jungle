import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );
  const quantity = {
    1: 'peu',
    2: 'modérement',
    3: 'beaucoup',
  };

  return (
    <div
      onClick={() =>
        alert(
          `Cette Plante requiert ${quantity[scaleValue]} ${
            careType === 'light' ? 'de lumière' : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
