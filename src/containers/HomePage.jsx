import HomePage from './../components/HomePage';
import { connect } from 'react-redux';
import { signIn } from './../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (nickname) => {
      dispatch(signIn(nickname));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(HomePage);