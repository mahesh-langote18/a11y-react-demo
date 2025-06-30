import { useEffect, useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import giveAcessImage from "../assets/give-access.png";


export default function FixedPage() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showModal) {
      inputRef.current?.focus();
    }
  }, [showModal]);

  return (
    <div className="fixed-page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <h1>Accessibility Page 2</h1>
      <button className="icon-btn" aria-label="Trigger alert" onClick={() => alert("clicked")}>
        🔔
      </button>
      <img src={giveAcessImage} alt="Man 3d image" />

<div className="page-content">

      <h2 id="main-content">Page Content</h2>

      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => alert("clicked")}>Click me</button>

      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <FocusLock returnFocus>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2 id="modal-title">Modal Title</h2>
            <input ref={inputRef} placeholder="Type here..." />
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </FocusLock>
      )}

      <p style={{ color: "#333", backgroundColor: "#fff" }}>
        Accessible contrast text
      </p>
      </div>
      <a href="#main-content" className="bk-link">Back to content</a>

    </div>
  );
}
