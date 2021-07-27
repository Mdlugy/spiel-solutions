import React, { useState, useEffect } from "react";
import axios from "axios";

const buttonStyle = {
  borderRadius: "35px 35px",
};

const Modals = (props) => {
  const [spiel, setSpiel] = useState(null);
  const [id, setID] = useState(null);
  const { modals } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spiels/${id}`)
      .then((res) => setSpiel(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        style={buttonStyle}
        onClick={(e) => setID(modals.id)}
      >
        {modals.name}
      </button>
      {spiel ? (
        <div className="">
          <div
            className="modal fade w-100"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              style={{ marginRight: "5%", width: "23%" }}
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {spiel.name}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={(e) => setSpiel(null)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">{spiel ? spiel.snippet : "test"}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modals;
