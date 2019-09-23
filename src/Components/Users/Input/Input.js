import React from "react";

const InputPage = () => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder ="Search  restaurant"
        style={{width:"70%",float:"left",marginLeft:"30px",marginBottom:"30px",marginTop:"10px",borderColor:"#d70f64"}}
      />
    </div>
  );
}

export default InputPage;