import PropTypes from 'prop-types';
import { NotificationTitle } from './NotificationMessage.styled';
const Notification = ({ message }) => {
  return <NotificationTitle>{message}</NotificationTitle>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
