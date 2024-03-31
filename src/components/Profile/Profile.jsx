import css from "../Profile/Profile.module.css"

export default function Profile({
  name,
  tag,
  image,
  location,
  stats: { followers, views, likes }
}) {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img className={css.photo} src={image} alt="avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.info}>
        <li className={css.list}>
          <span>Followers: </span>
          <span className={css.infoCount}>{followers}</span>
        </li>
        <li className={css.list}>
          <span>Views: </span>
          <span className={css.infoCount} >{views}</span>
        </li>
        <li className={css.list}>
          <span>Likes: </span>
          <span className={css.infoCount} >{likes}</span>
          </li>
      </ul>
    </div>
  );
}
