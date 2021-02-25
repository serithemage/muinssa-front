import { connect } from 'react-redux';
import RoomPage from './../components/RoomPage';

const mapStateToProps = (state) => {
  return {
    nickname: state.user.nickname
  }
}

export default connect(mapStateToProps)(RoomPage);