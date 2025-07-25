# 🛡️ copyguard-js

> A lightweight JavaScript utility to block copying, pasting, cutting, and right-clicking.

**copyguard-js** provides a simple, framework-free way to prevent users from copying content, opening the context menu, or pasting into inputs. It can be used to secure form fields, protect sensitive data, or discourage content scraping.

---

## 🚀 Features

* 🔒 Block `Ctrl+C` (Copy), `Ctrl+V` (Paste), `Ctrl+X` (Cut)
* 🖱️ Disable right-click (context menu)
* 🧠 Optional `onViolation` callback for custom behavior/logging
* 🪶 Zero dependencies
* 🧩 UMD and ES module compatible

---

## 📦 Installation

### npm

```bash
npm install copyguard-js
```

Then in your JavaScript:

```js
import Copyguard from 'copyguard-js';

Copyguard.enable({
  blockCopy: true,
  blockPaste: true,
  blockCut: true,
  blockRightClick: true,
  onViolation: (type) => {
    console.warn(`Blocked: ${type}`);
  }
});
```

### CDN

```html
<script src="https://unpkg.com/copyguard-js@latest/dist/copyguard.min.js"></script>
<script>
  Copyguard.enable({
    onViolation: (type) => {
      alert(`🚫 ${type} blocked`);
    }
  });
</script>
```

---

## 🧪 Example

```js
Copyguard.enable({
  blockCopy: true,
  blockPaste: true,
  blockCut: true,
  blockRightClick: true,
  onViolation: (action) => {
    console.log(`User tried to: ${action}`);
  }
});

// To disable protection:
Copyguard.disable();
```

---

## 🌐 Live Demo

View a demo at: [https://coreyadam8.github.io/copyguard-js](https://coreyadam8.github.io/copyguard-js)

---

## 📄 License

MIT License © [Corey Adam](https://github.com/coreyadam8)

---

## 🔗 Links

* 📦 [npm: copyguard-js](https://www.npmjs.com/package/copyguard-js)
* 🧑‍💻 [GitHub Repository](https://github.com/coreyadam8/copyguard-js)
