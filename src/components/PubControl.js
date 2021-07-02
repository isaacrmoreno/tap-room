import React from 'react';

class PubControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterKegMenu: [],
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddNewKegToMenu = (newKeg) => {
    const newMasterKegMenu = this.state.masterKegMenu.concat(newKeg);
    this.setState({masterKegMenu: newMasterKegMenu, formVisibleOnPage: false});
  }





} 