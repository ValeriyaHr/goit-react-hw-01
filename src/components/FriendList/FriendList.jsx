import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css["list-item"]} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;