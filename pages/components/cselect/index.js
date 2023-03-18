import { useEffect, useState } from "react";

const CSelect = (props) => {

  const [payload, setPayload] = useState(props.defaultValue);

  const handleChange = (e) => {
    setPayload(e.target.value)
  };

  useEffect(() => {
    props.handleChange(payload);
  }, [payload, props])

  return (
    <select
        className={`form-control`}
        name={props.name}
        value={payload}
        onChange={handleChange}
      >
        {props.data.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
    </select>
  );
};

export default CSelect;
