import React, { useState } from "react";
import LinkCard from "./LinkCard";
import LinkForm from "./LinkForm";
import InputPage from "./InputPage";
import InputModal from "./InputModal";
const LinkedFrom = (props) => {
  const { add, setAdd } = props;
  // const [modalHidden, setModalHidden] = useState(true);
  // const [pageHidden, setPageHidden] = useState(true);

  // const togglepages = (e) => {
  //   e.preventDefault();
  //   setPageHidden(!pageHidden);
  // };
  // const togglemodals = (e) => {
  //   e.preventDefault();
  //   setModalHidden(!modalHidden);
  //   console.log(props.spiel.modalArr);
  // };

  return (
    <div className="linked-from">
      <div className="LinkForm">
        <div className="d-flex align-items-center justify-content-between">
          <u>Pages</u>
          <InputPage
            add={add}
            setAdd={setAdd}
            element={"Page"}
            spiel={props.spiel}
          />
        </div>
        {props.spiel.pageArr.map((link, i) => {
          return (
            <LinkCard
              add={add}
              setAdd={setAdd}
              element={"Page"}
              parent={props.spiel}
              link={link}
            />
          );
        })}

        {/* <button className="m-3">link/create page</button> */}
        <LinkForm
          add={add}
          setAdd={setAdd}
          className="LinkForm"
          // isHidden={pageHidden}
          element={"Page"}
          spiel={props.spiel}
        />

        <br />
        <br />
        {props.spiel.element === "Modal" ? (
          ""
        ) : (
          <div className="LinkForm">
            <div className="d-flex align-items-center justify-content-between">
              <u>Modals</u>
              <InputModal
                element={"Modal"}
                spiel={props.spiel}
                add={add}
                setAdd={setAdd}
              />
            </div>
            {props.spiel.modalArr.map((link, i) => {
              return (
                <LinkCard element={"Modal"} parent={props.spiel} link={link} />
              );
            })}
            {/* <button className="m-3">link/create modal</button> */}
            <LinkForm
              add={add}
              setAdd={setAdd}
              className="LinkForm"
              // isHidden={modalHidden}
              element={"Modal"}
              spiel={props.spiel}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default LinkedFrom;
