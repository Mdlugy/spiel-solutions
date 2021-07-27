import React, { useState, useEffect } from "react";
import axios from "axios";

const buttonStyle = {
  borderRadius: "35px 35px",
};

const Modals = (props) => {
  const [spiel, setSpiel] = useState("");
  const { modals } = props;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/spiels/${props.id}`)
  //     // .then((res) => setSpiel(res.data[0]))
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleModalClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        style={buttonStyle}
        onClick={(e) => handleModalClick(e)}
      >
        {modals.name}
      </button>

      <div className="">
        <div
          class="modal fade w-100"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div
            class="modal-dialog modal-dialog-centered"
            role="document"
            style={{ marginRight: "5%", width: "23%" }}
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Modal body</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
