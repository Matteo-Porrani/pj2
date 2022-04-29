import { createContext, useState } from 'react';

/**
 * The object FavoritesContext will contain a React component
 */
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => { },
  removeFavorite: (meetupId) => { },
  itemIsFavorite: (meetupId) => { },
});

/**
 * This special component will provide the context to the components that need it
 * and also be responsible for updating the values
 */
export function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    /**
     * This is a case in which the NEW state depends on the LATEST state,
     * so we use a f. that automatically receives the LATEST state as argument
     */
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;

