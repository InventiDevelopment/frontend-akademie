import React from "react";
import styled from "styled-components";

const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: grey;
`

export default class Dropdown extends React.Component {

    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.Dropdown.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }
    
      render() {
        return (
          <div>
            <button onClick={this.showMenu} className="overview-button">
              Daily Overview
            </button>
            
            {
              this.state.showMenu
                ? (
                  <div
                    className="menu"
                    ref={(element) => {
                      this.dropdownMenu = element;
                    }}
                  >
                    <DropdownMenu>
                    <button> Weekly Overview </button>
                    <button> Monthly Overview </button>
                    <button> Overall </button>
                    </DropdownMenu>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
    }    