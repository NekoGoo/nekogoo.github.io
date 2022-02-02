import React, { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe, // ES7 Object spread example
  leather: 1,
  refinedMoonstone: 1,
};

function Recipes() {
  const [recipe, setRecipe] = useState(elvenShieldRecipe);

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button type="button" onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield
      </button>
      <button type="button" onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlets
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
