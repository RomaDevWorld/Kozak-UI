import { StylesConfig } from 'react-select'

export const darkSelectStyles: StylesConfig<{ value: string; label: string }> = {
  container: (provided) => ({
    ...provided,
    background: 'inherit',
    color: 'white',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'inherit',
    color: 'black',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'white' : 'inherit',
    color: 'black',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'gray',
    color: 'white',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    borderRadius: '5px',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
}
