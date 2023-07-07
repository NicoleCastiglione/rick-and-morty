import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="search"
          onChange={handleChange}
          value={id}
        />
        <button type="submit" className={styles.searchButton}>
          <FiSearch />
        </button>
      </form>
    </div>
  );
}
