import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as routes from '../utils/routes';
import ThreeBoxLogoBlack from '../assets/ThreeBoxLogoBlack.svg';
import '../views/styles/Landing.css';
import './styles/Nav.css';

class NavLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retractNav: false,
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  hideBar = () => {
    if (window.scrollY < 1) {
      this.setState({ retractNav: false });
    } else {
      this.setState({ retractNav: true });
    }
  }

  render() {
    const { retractNav } = this.state;
    const {
      handleSignInUp,
      showInfoBanner,
      landing,
      pathname,
      onOtherProfilePage,
      showSignInBanner,
    } = this.props;

    const classHide = retractNav ? 'hide' : '';

    return (
      <nav
        id="landing__nav"
        className={`
            ${showSignInBanner ? 'showSignInBanner' : ''} 
            ${(showInfoBanner || showSignInBanner) ? 'bannerMargin' : ''} 
            ${classHide} 
            ${onOtherProfilePage && 'hide'} 
            ${landing}`}
      >
        <div id="landing__nav__logo--marginLeft">
          <Link to={routes.LANDING}>
            <img src={ThreeBoxLogoBlack} alt="3Box Logo" className="landing__nav__logo" />
          </Link>
          <a href="https://github.com/3box/3box" target="_blank" rel="noopener noreferrer">
            API Products
          </a>
          <a href="https://github.com/3box/3box" target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <Link to="/partners">
            Partners
          </Link>
          <Link to="/partners">
            Chat
          </Link>
          <a href="https://medium.com/3box" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </div>
        <div id="actionButtons">
          <button onClick={handleSignInUp} type="button">
            Sign in to Hub
          </button>
        </div>
      </nav>
    );
  }
}

NavLanding.propTypes = {
  isLoggedIn: PropTypes.bool,
  showInfoBanner: PropTypes.bool,
  showSignInBanner: PropTypes.bool,
  onOtherProfilePage: PropTypes.bool,
  classHide: PropTypes.string,
  landing: PropTypes.string,
  normalizedPath: PropTypes.string,
  pathname: PropTypes.string,
  handleSignInUp: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

NavLanding.defaultProps = {
  isLoggedIn: false,
  showInfoBanner: false,
  onOtherProfilePage: false,
  showSignInBanner: false,
  classHide: '',
  landing: '',
  pathname: '',
  normalizedPath: '',
};

function mapState(state) {
  return {
    isLoggedIn: state.userState.isLoggedIn,

    showInfoBanner: state.uiState.showInfoBanner,
    showSignInBanner: state.uiState.showSignInBanner,
  };
}

export default withRouter(connect(mapState)(NavLanding));