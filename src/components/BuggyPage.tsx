import { useEffect, useRef, useState } from "react";
import giveAcessImage from "../assets/give-access.png";
export default function BuggyPage() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showModal) {
      inputRef.current?.focus();
    }
  }, [showModal]);

  return (
    <div className="buggy-page">
      <h1>Buggy Accessibility Page</h1>

      {/* ❌ Bug 1: No skip link */}

      {/* ❌ Bug 3: Button with no label */}
      <button className="icon-btn" onClick={() => alert("clicked")}>🔔</button>

      {/* ❌ Bug 2: Image without alt */}
      <img src={giveAcessImage} />

    <div className="page-content">


      {/* ❌ Bug 4: Skipped heading levels */}
      <h2>Page Content</h2>

      {/* ❌ Bug 5: Input without label */}
      <form>
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>

      {/* ❌ Bug 6: Clickable div */}
      <div onClick={() => alert("clicked")}>Click me</div>

      {/* ❌ Bug 7: Modal with no ARIA */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <h2>Modal Title</h2>
          <input ref={inputRef} placeholder="Type here..." />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}

      {/* ❌ Bug 8: Low contrast */}
      <p style={{ color: "#aaa", backgroundColor: "#fff" }}>
        Low contrast text
      </p>



      {/* ❌ Bug 10: No focus trap in modal */}
    </div>
          {/* ❌ Bug 9: Link with no href */}
      <a className="bk-link">Back to content</a>
    </div>
  );
}
