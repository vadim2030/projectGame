import logo from "../public/vite.svg";
import Time from "./Time.jsx";
import FormRegistr from "./FormRegistr.jsx";
import Login from "./Login.jsx";
import "./scss/style.scss";
import React, { useState } from "react";
import Modal from "react-modal";


const Header = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalFormRegistrOpen, setModalFormRegistrOpen] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt={"Result"} />
      <div>
        <button
          className="modal-show-button header-botton"
          onClick={() => setModalLoginOpen(true)}
        >
          Log In
        </button>
        <Modal
          isOpen={modalLoginOpen}
          overlayClassName={"modal-overlay"}
          className={"modal-content"}
          onRequestClose={() => setModalLoginOpen(false)}
          closeTimeoutMS={300}
          ariaHideApp={false}
        >
          <button className="modal-close-button" onClick={() => setModalLoginOpen(false)}>
            X
          </button>

          <Login />
        </Modal>

        <button
          className="modal-show-button header-botton"
          onClick={() => setModalFormRegistrOpen(true)}
        >
          Sign Up
        </button>
        <Modal
          isOpen={modalFormRegistrOpen}
          overlayClassName={"modal-overlay"}
          className={"modal-content"}
          onRequestClose={() => setModalFormRegistrOpen(false)}
          closeTimeoutMS={300}
          ariaHideApp={false}
        >
          <button className="modal-close-button" onClick={() => setModalFormRegistrOpen(false)}>
            X
          </button>

          <FormRegistr />
        </Modal>
      </div>
      <Time />
    </header>
  );
};

export default Header;
