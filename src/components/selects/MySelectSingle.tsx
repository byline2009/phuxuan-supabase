/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const MySelectSingle = (props: any) => {
  return (
    <ReactSelect
      instanceId={"wsad123wqwe"}
      className={props.className}
      {...props}
      isMulti={false}
      options={[...props.options]}
      onChange={(selected: any) => {
        return props.onChange(selected);
      }}
      placeholder={props.placeholder ? props.placeholder : "Chọn ..."}
      onInputChange={(e: any) => {
        props.onInputChange && props.onInputChange(e);
      }}
    />
  );

  return <ReactSelect {...props} />;
};

MySelectSingle.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  components: PropTypes.object,
  hideSelectedOptions: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  className: PropTypes.string,
};


export default MySelectSingle;
