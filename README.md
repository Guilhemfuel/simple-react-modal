## Simple React Modal

Simple react modal with Hooks (Class CSS works with Bootstrap !)

````
import React from 'react';
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const { open, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Click on me</button>

        <Modal open={open} close={closeModal}>
          Hello !
        </Modal>
    </div>
  );
}

export default App;
````

