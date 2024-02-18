import { useState, useEffect, useMemo } from "react";
import Search from "./Search";
import Fruits from "./Fruits";

function App() {
  const initialFruits = useMemo(
    () => [
      { id: 1, fruit: "banana" },
      { id: 2, fruit: "apple" },
      { id: 3, fruit: "orange" },
      { id: 4, fruit: "mango" },
      { id: 5, fruit: "pinneapple" },
      { id: 6, fruit: "watermelon" },
    ],
    []
  );

  const [fruits, setFruits] = useState(initialFruits);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredWord = initialFruits.filter(({ fruit }) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );
    setFruits(filteredWord);
  }, [search, initialFruits]);

  return (
    <div className="flex justify-center items-center flex-col capitalize">
      <Search onSearchHandler={searchHandler} />
      <Fruits fruits={fruits} />
    </div>
  );
}

export default App;
