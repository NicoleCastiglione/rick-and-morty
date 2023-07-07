import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./Card.module.css";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      if (!isFav) {
        setIsFav(true);
        addFav({ id, name, species, gender, image, onClose });
      }
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      <button className={styles.favorite} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>

      <AiFillCloseCircle className={styles.close} onClick={() => onClose(id)} />

      <img className={styles.image} src={image} alt={name} />

      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <Link to={`/detail/${id}`}>
          <button className={styles.button}>Ver más</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
