import classes from './Card.module.css';

function Card(props) {
  return <div className={classes.card}>{props.children}</div>
}

export default Card;

/**
 * A 'wrapper component' doesn't know what it wraps... unless we tell it.
 * 
 * 'props.children' is a SPECIAL PROP that every component receives by default,
 * and that we can pass between opening & clmosing tags to make the component 'aware'
 * of what it contains.
 * 
 * In this case the property .children contains this JSX code :
 * 
 *<div>
    <img className={classes.image} src={props.image} alt={props.title} />
  </div>

  <div className={classes.content}>
    <h3>{props.title}</h3>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </div>

  <div className={classes.actions}>
    <button>To Favorites</button>
  </div>
 * 
 */