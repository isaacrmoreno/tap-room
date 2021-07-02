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

  handleChangeSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id[0]);
    this.setState({selectedKeg: selectedKeg})
  }

  handleDeleteKeg = (id) => {
    const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== id);
    this.setState({
      masterKegMenu: newMasterKegMenu,
      selectedKeg: null
    });
  }

  handleEditKegInMenu = (kegToEdit) => {
    const editedMasterKegMenu = this.state.masterKegMenu
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
    this.setState({
      masterKegMenu: editedMasterKegMenu,
      editing: false,
      selectedKeg: null
    })
  }








} 