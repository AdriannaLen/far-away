import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import Modal from "./Modal"; // Import the Modal component

export default function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems() {
    setShowModal(true); // Show the modal instead of window.confirm
  }

  function confirmDeleteItems() {
    setItems([]);
    setShowModal(false); // Hide the modal
  }

  function cancelDeleteItems() {
    setShowModal(false); // Hide the modal
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
      />
      <Stats items={items} />

      {showModal && (
        <Modal
          message="Are you sure you want to clear the list?"
          onConfirm={confirmDeleteItems}
          onCancel={cancelDeleteItems}
        />
      )}
    </div>
  );
}