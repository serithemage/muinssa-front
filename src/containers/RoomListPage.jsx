import { connect } from 'react-redux';
import RoomListPage from './../components/RoomListPage';

const mapStateToProps = (state) => {
  return {
    nickname: state.user.nickname
  }
}

export default connect(mapStateToProps)(RoomListPage);