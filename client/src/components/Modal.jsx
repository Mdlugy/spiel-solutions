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
    getSpielByModalID();
  }, [id]);

  const getSpielByModalID = () => {
    axios
      .get(`http://localhost:8000/api/spiels/${id}`)
      .then((res) => setSpiel(res.data))
      .catch((err) => console.log(err));
  };

  const handleClick = (modalID) => {
    setID(modalID);
    console.log(spiel);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        style={buttonStyle}
        onClick={(e) => handleClick(modals.child_id)}
      >
        {modals.child_name}
      </button>
      {spiel && id ? (
        <div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            data-backdrop="false"
            style={{ display: "flex" }}
          >
            <div
              className="modal-dialog modal-dialog-centered container"
              role="document"
              style={{ maxWidth: "25%", marginRight: "0px" }}
            >
              <div
                className="modal-content"
                style={{ borderRadius: "25px", alignSelf: "flex-end" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    {spiel.name}
                  </h5>
                  <span
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{
                      color: "red",
                      fontSize: "1.25em",
                    }}
                    onClick={(e) => {
                      setSpiel(null);
                      setID(null);
                    }}
                  >
                    <i class="bi bi-x-square"></i>
                  </span>
                </div>
                <div className="modal-body">{spiel.snippet}</div>
                <div className="modal-body">{spiel.snippet}</div>
                <div className="modal-body">{spiel.snippet}</div>
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
