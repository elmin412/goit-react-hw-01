import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css"


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
