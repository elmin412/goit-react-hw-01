import FriendListItem from "./FriendListItem";
import css from "../Friends/FriendList.module.css"


export default function FriendsList({friends}) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li className={css.friends} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
