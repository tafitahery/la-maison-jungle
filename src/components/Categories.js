import React from 'react';

const Categories = ({ categories, category, setCategory }) => {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setCategory('')}>Réinitialiser</button>
    </div>
  );
};

export default Categories;
