import HomePage from './../components/HomePage';
import * as Types from './../actions/Types';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick:function(nickname) {
      dispatch({
        type: Types.SIGN_IN_REQUEST,
        payload: {
          nickname: nickname
        }
      });
    }
  }
}

export default connect(undefined, mapDispatchToProps)(HomePage);