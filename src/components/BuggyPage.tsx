import { useEffect, useRef, useState } from "react";

export default function BuggyPage() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showModal) {
      inputRef.current?.focus();
    }
  }, [showModal]);

  return (
    <div>
      <h1>Buggy Accessibility Page</h1>

      {/* ❌ Bug 1: No skip link */}

      {/* ❌ Bug 2: Image without alt */}
      <img src="/logo.png" />

      {/* ❌ Bug 3: Button with no label */}
      <button onClick={() => alert("clicked")}></button>

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

      {/* ❌ Bug 9: Link with no href */}
      <a>Broken Link</a>

      {/* ❌ Bug 10: No focus trap in modal */}
    </div>
  );
}
