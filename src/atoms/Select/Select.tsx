import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Selector, Option } from './styled';

interface Props {
  width: any;
  options: {value: number | string; label: string}[];
  isActive?: boolean;
  onChange: any;
  defaultValue: any;
}

const Select: FC <Props> = ({
  width, options, isActive = true, onChange, defaultValue, ...props
}) => {
  return (
    <Selector width={width} {...props} onChange={onChange}>
      {isActive ? options?.map((option: {value: number | string; label: string}) => 
        <Option key={option.value} 
          selected={defaultValue === option.value}
          value={option.value}
          defaultValue={option.label === defaultValue ? defaultValue : option.value}
        >
          {option.label}</Option>) : <Option>{defaultValue}</Option>}
    </Selector>
  );
};

Select.propTypes = {
  isActive: PropTypes.bool.isRequired
};

Select.defaultProps = {
  isActive: true
};

export default Select;
