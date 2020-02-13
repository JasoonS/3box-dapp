import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../../assets/3BoxLoading.svg';
import Arrow from '../../../assets/Arrow.svg';

import '../styles/Spaces.scss';

const SpacesList = (props) => {
  const {
    show,
    hideSpacesMobile,
    clearSpacesMobile,
    spaceToDisplay,
    sortData,
    sortBy,
    handleMobileSpaceListView,
    isSpacesLoading,
    list,
  } = props;

  return (
    <section className={`finder 
      ${show ? '' : 'animateCloseList'} 
      ${hideSpacesMobile ? 'animateListLeft--mobile' : ''}
      ${clearSpacesMobile ? 'hideList--mobile' : ''}
    `}
    >
      <div
        className={`space ${spaceToDisplay === 'All Data' ? 'activeSpace' : ''}`}
        onClick={() => {
          sortData(sortBy, false, 'All Data', true);
          handleMobileSpaceListView();
        }}
        role="button"
        onKeyDown={() => {
          sortData(sortBy, false, 'All Data', true);
          handleMobileSpaceListView();
        }}
        tabIndex={0}
      >
        <p className="space__name">All Data</p>
        {isSpacesLoading && <img className="data__space__loading--mobile" src={Loading} alt="info" />}
        <span className="space__arrow">
          <img src={Arrow} alt="arrow" />
        </span>
      </div>

      <div className="space__divider--mobile" />

      <div
        className={`space ${spaceToDisplay === '3Box_app' ? 'activeSpace' : ''}`}
        onClick={() => {
          sortData(sortBy, false, '3Box_app', true);
          handleMobileSpaceListView();
        }}
        role="button"
        onKeyDown={() => {
          sortData(sortBy, false, '3Box_app', true);
          handleMobileSpaceListView();
        }}
        tabIndex={0}
      >
        <p className="space__name">3Box Profile</p>
        <span className="space__arrow">
          <img src={Arrow} alt="arrow" />
        </span>
      </div>

      <div className="space__divider--mobile" />

      {list && list.map((space, i) => space !== '3Box_app' && (
        <React.Fragment key={`${space}-${i}`}>
          <div
            className={`space ${spaceToDisplay === space ? 'activeSpace' : ''}`}
            onClick={() => {
              sortData(sortBy, false, space, true);
              handleMobileSpaceListView();
            }}
            role="button"
            onKeyDown={() => {
              sortData(sortBy, false, space, true);
              handleMobileSpaceListView();
            }}
            title={space}
            tabIndex={0}
          >
            <p className="space__name">{space}</p>
            <span className="space__arrow">
              <img src={Arrow} alt="arrow" />
            </span>
          </div>
          {(i !== list.length - 1) && <div className="space__divider--mobile" />}
        </React.Fragment>
      ))}
    </section>
  );
};

SpacesList.propTypes = {
  sortData: PropTypes.func.isRequired,
  handleMobileSpaceListView: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  spaceToDisplay: PropTypes.string.isRequired,
  hideSpacesMobile: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  isSpacesLoading: PropTypes.bool.isRequired,
  clearSpacesMobile: PropTypes.bool.isRequired,
};

export default SpacesList;