import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'bubbles', text: 'BUBBLES', value: 'bubbles' },
  { key: 'burger', text: 'BURGER', value: 'burger' },
  { key: 'chines', text: 'CHINESE', value: 'chines' },
  { key: 'pizza', text: 'PIZZA', value: 'pizza' },
  { key: 'roll', text: 'SHAWARMA ROLL', value: 'roll' },
  
]

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder='Select Category' fluid multiple selection options={options} />
)

export default DropdownExampleMultipleSelection
