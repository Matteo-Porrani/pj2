import { Link } from 'react-router-dom';

/**
 * Import an object from a CSS 'module' file.
 * Every class existing in the CSS file will be available
 * as property of the object
 * 
 */
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>

          <li>
            <Link to='/'>All Meetups</Link>
          </li>

          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>

          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

/**
 * If we use a standard <a> for links, then we'll send a new http request
 * every time we click on one...
 * We'll use the 'Link' component instead
 */

