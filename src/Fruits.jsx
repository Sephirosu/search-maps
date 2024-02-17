const Fruits = ({ fruits }) => {
  return (
    <ul>
      {fruits.map(({ fruit, id }) => (
        <li key={id}>{fruit}</li>
      ))}
    </ul>
  );
};

export default Fruits;
