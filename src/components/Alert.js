import React from "react";

export default function Alert(props) {
  return (
    <>
      <div style={{ height: "30px", marginTop: "46px" }}>
        {props.alert && (
          <div
            style={{
              backgroundColor:
                props.alert.type === "success"
                  ? "rgb(187 239 187)"
                  : props.alert.type === "warn"
                  ? "#ffffae"
                  : props.mode === "light"
                  ? "white"
                  : "#262323",
            }}
            id="alert_div"
          >
            {props.alert.msg}
          </div>
        )}
      </div>
    </>
  );
}
