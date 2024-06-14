import css from "./Profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({
  tag,
  image,
  username,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css['avatar-block']}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};


export default Profile;