import React, { PureComponent } from "react";
import './styles.css';
import Button from '@material-ui/core/Button';
import Dropdown, {
  MenuItem,
  CustomDropdownToggleStyle,
  CustomDropdownMenuStyle
} from "./Components/Dropdown";


class MyDropdown extends PureComponent {
  state = {
    selected: ""
  };
  render() {
    const { selected } = this.state;
    const CustomDropdownToggle = props => (
      <Dropdown.Toggle {...props} style={CustomDropdownToggleStyle} />
    );
    CustomDropdownToggle.propTypes = Dropdown.Toggle.propTypes;
    CustomDropdownToggle.defaultProps = Dropdown.Toggle.defaultProps;

    const CustomDropdownMenu = props => (
      <Dropdown.Menu {...props} style={CustomDropdownMenuStyle} />
    );
    CustomDropdownMenu.propTypes = Dropdown.Menu.propTypes;
    CustomDropdownMenu.defaultProps = Dropdown.Menu.defaultProps;

    return (
      <div>
        
        <h3> Dropdown</h3>
        <Dropdown
          onToggle={() => {}}
          onSelect={(eventKey, event) => {
            this.setState({ selected: eventKey });
          }}
        >
          <CustomDropdownToggle
            btnStyle={"flat"}
            btnSize={"lg"}
            noCaret={false}
            title={selected ? `Level ${selected}` : "Add Filters"}
          />
          <CustomDropdownMenu>
            <MenuItem>
            Request Origin
              <MenuItem eventKey="1.1">
              Own Requests
              </MenuItem>
              <MenuItem eventKey="1.2">
              Organization Requests
              </MenuItem>
              
              
            </MenuItem>

            <MenuItem>
            Designer<MenuItem eventKey="2.1"> A B C</MenuItem>
              
            </MenuItem>
            <MenuItem>
            Status<MenuItem eventKey="3.1">D E F </MenuItem>
              
            </MenuItem>
            <MenuItem>
            Brand<MenuItem eventKey="4.1">G H I</MenuItem>
              
            </MenuItem>
            <button>Apply Filters</button>
          </CustomDropdownMenu>
           
        </Dropdown>
      </div>
      
    );
  }
}

export default MyDropdown;
