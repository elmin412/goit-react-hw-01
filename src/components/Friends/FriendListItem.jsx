import css from "./FriendListItem.module.css";
import clsx from "clsx";


export default function FriendListItem({
  friend: {
    avatar,
    name,
    isOnline
  }
}) {

  return (
    <div className={css.info}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.textName}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
        </p>
    </div>
  );
}
