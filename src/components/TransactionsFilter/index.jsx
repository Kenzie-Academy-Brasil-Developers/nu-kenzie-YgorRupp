import React from 'react'

const RecipeCategories = ({ categoryList }) => {
  return (

    <ul>
        {categoryList.map(category => (
          <li>{category.label}</li>
        ))}
    </ul>

  )
}

export default RecipeCategories