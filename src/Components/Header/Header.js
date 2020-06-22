import React from "react";
import "./Header.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import Navigation from "../Navigation/Navigation";
import DropDown from "../DropDown/DropDown";

import { selectDropHidden } from "../../Redux/Drop/drop-selectors";
import { toggleHideDropdown } from "../../Redux/Drop/drop-actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Header = ({ hidden, homepage, projects, toggleHideDropdown, skills }) => {
  return (
    <div className="header">
      {hidden ? null : <DropDown />}
      <div className="home center" onClick={toggleHideDropdown}>
        <Navigation />
      </div>

      {homepage ? (
        <div className="social">
          {" "}
          <SocialIcons />
        </div>
      ) : (
        ""
      )}
      {skills ? <div className="center header-title">My Skills</div> : ""}
      {projects ? <div className="center header-title">My Projects</div> : ""}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectDropHidden
});

const mapDispatchToProps = dispatch => ({
  toggleHideDropdown: () => dispatch(toggleHideDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
