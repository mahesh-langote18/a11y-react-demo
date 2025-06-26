# ♿️ Accessibility Demo: React + TypeScript + Vite

This project is a live demonstration of **web accessibility best practices and common pitfalls**. It includes two pages — one intentionally buggy (`/buggy`) and another fully fixed (`/fixed`) — for use in workshops or audits.

---

## 🔀 Pages

### 🐞 `/buggy`
- Includes 10 common accessibility issues (e.g., missing labels, focus traps, low contrast, ARIA misuse).
- Useful for demonstrating Axe, Lighthouse, and manual testing failures.

### ✅ `/fixed`
- Proper use of semantic HTML, focus management, ARIA roles, and color contrast.
- Implements a fully accessible modal using `react-focus-lock`.

---

## 🧰 Tools Used

### 🔍 Testing Tools
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- Native **keyboard testing** (Tab, Shift+Tab, Enter)
- Screen Readers (VoiceOver, NVDA)

### 🔧 Libraries
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Focus Lock](https://github.com/theKashey/react-focus-lock)

---

## 📸 Demo

### Buggy Page
![Buggy Page Screenshot](./screenshots/buggy-page.png)

### Fixed Page
![Fixed Page Screenshot](./screenshots/fixed-page.png)

---

## 🛠️ Getting Started

### 📦 Install dependencies

```bash
npm install
