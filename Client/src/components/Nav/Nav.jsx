import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { BiSolidHome } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import styles from "./Nav.module.css";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav className={styles.navbar}>
      <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button className={styles.navBtn}>
          <BiSolidHome />
          Home
        </button>
      </Link>

      <Link to="/favorites">
        <button className={styles.navBtn}>
          <MdFavorite />
          Favorites
        </button>
      </Link>

      <Link to="/about">
        <button className={styles.navBtn}>
          <FaUser />
          About
        </button>
      </Link>

      <button className={styles.navBtn} onClick={handleLogOut}>
        <RiLogoutBoxRFill />
        Log Out
      </button>
    </nav>
  );
};

export default Nav;
