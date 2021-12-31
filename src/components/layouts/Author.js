import classes from "./Author.module.css";

function Author(props) {
  let active = null;

  return (
    <div className={active} onClick={() => props.handleClick(props.author)}>
      <div className={classes.avatarDiv}>
        <img
          className={classes.avatar}
          src={require("../../images/" + props.image)}
          alt=""
        />
      </div>
      <h1 className={classes.h1}>{props.author}</h1>
      <p className={classes.first}>{props.description}</p>
    </div>
  );
}

export default Author;
