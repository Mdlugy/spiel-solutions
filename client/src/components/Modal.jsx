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
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        style={buttonStyle}
        onClick={(e) => handleClick(modals.id)}
      >
        {modals.name}
      </button>
      {spiel && id ? (
        <div>
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
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
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
                    onClick={(e) => {
                      setSpiel(null);
                      setID(null);
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
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
