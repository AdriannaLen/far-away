export function Stats({ items }) {

  if (!items.length) return <p className="stats"><em>Start adding items to your list</em></p>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return <footer className="stats">
    <em>
      {percentage === 100 ? "You have everything you need to go! " :
        `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}</em>
  </footer>;

}
