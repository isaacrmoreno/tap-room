import React from 'react';
import NewKegForm from './NewKegForm';
import Menu from './Menu';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

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
    const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg})
  }

  handleDeleteKeg = (id) => {
    const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== id);
    this.setState({
      masterKegMenu: newMasterKegMenu,
      selectedKeg: null,
    });
  }



  // decrementPint = (id) => {
  //   const sellPint = this.state.pint.filter(keg => keg.id ===id)[0];
  //   this.setState({
  //     pints: sellPint - 1
  // })
  //   console.log(this.state.pints)
  // }


//   const sellPint = (pints -1)
//   console.log(pints)
//   return sellPint;
// }

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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

      if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditKegInMenu}/>
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
      onClickDelete = {this.handleDeleteKeg} 
      onClickEdit = {this.handleEditClick}
      onClickSellPint = {this.decrementPint}/>
      buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddNewKegToMenu}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu menu={this.state.masterKegMenu} onKegSelection={this.handleChangeSelectedKeg}/>
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        
      </React.Fragment>
    )
  }
} 

export default PubControl;