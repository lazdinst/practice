import { useState } from "react";
import "./App.css";

interface item {
  id: number;
  name: string;
}

const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },
  { id: 4, name: "grape" },
  { id: 5, name: "strawberry" },
  { id: 6, name: "kiwi" },
  { id: 7, name: "mango" },
  { id: 8, name: "watermelon" },
  { id: 9, name: "blueberry" },
  { id: 10, name: "cherry" },
];

function App() {
  const [search, setSearchResults] = useState<item[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchResults([]);
      return;
    }

    const value = e.target.value.toLowerCase();
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setSearchResults(results);
  };

  return (
    <>
      <input type="text" onChange={handleSearch} />
      <div>
        {search.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
