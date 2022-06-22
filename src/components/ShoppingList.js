import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, name, cover, water, light }) => (
          <PlantItem
            id={id}
            name={name}
            cover={cover}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
