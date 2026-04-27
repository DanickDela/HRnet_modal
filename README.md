@delaroche/hrnet-modal

![npm version](https://img.shields.io/npm/v/@delaroche/hrnet-modal)
![license](https://img.shields.io/npm/l/@delaroche/hrnet-modal)
![downloads](https://img.shields.io/npm/dm/@delaroche/hrnet-modal)
![react](https://img.shields.io/badge/React-18%2B-blue)
![mobile](https://img.shields.io/badge/Mobile-Friendly-success)

Reusable, customizable and responsive modal component for React.

Designed for modern React applications with:

- clean UI
- mobile friendly bottom sheet mode
- customizable buttons
- icons support
- overlay click close
- Escape key close
- flexible children content
- SCSS styling included

---

## Why choose HRnet Modal

HRnet Modal is built for developers who want a clean, modern and production-ready modal without unnecessary complexity.

### Highlights

- Lightweight and reusable
- Elegant desktop modal UI
- Native iPhone-style mobile bottom sheet
- Fully customizable colors, texts and buttons
- Children support for forms and custom JSX
- Overlay click close + Escape key close
- React 18+ compatible
- Easy integration with Vite / CRA / Next.js

---

## Preview

### Desktop

Centered elegant modal with smooth animation.

### Mobile

Full-width bottom sheet inspired by iOS.

---

## Installation

```bash
npm install @delaroche/hrnet-modal
```

---

## Import

```jsx
import HRnet_modal from "@delaroche/hrnet-modal";
import "@delaroche/hrnet-modal/style.css";
```

---

## Basic Example

```jsx
import { useState } from "react";
import HRnet_modal from "@delaroche/hrnet-modal";
import "@delaroche/hrnet-modal/style.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      <HRnet_modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete employee"
        message="Are you sure?"
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Delete"
        onCancel={() => setIsOpen(false)}
        onConfirm={() => alert("Deleted")}
      />
    </>
  );
}

export default App;
```

---

## Example With Children

```jsx
<HRnet_modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Employee details"
  showCloseIcon={true}
>
  <div>
    <label>First name</label>
    <input type="text" />

    <label>Last name</label>
    <input type="text" />
  </div>
</HRnet_modal>
```

---

## Full Props Reference

| Prop               | Type           | Default      | Description                 |
| ------------------ | -------------- | ------------ | --------------------------- |
| isOpen             | boolean        | required     | Controls modal visibility   |
| onClose            | function       | required     | Triggered when modal closes |
| title              | string         | Confirmation | Modal title                 |
| message            | string         | ""           | Informational text          |
| children           | node           | null         | Custom JSX content          |
| showCloseIcon      | boolean        | false        | Display top close button    |
| showCancelButton   | boolean        | false        | Display cancel button       |
| showConfirmButton  | boolean        | false        | Display confirm button      |
| cancelText         | string         | Cancel       | Cancel button label         |
| confirmText        | string         | Confirm      | Confirm button label        |
| onCancel           | function       | optional     | Cancel callback             |
| onConfirm          | function       | optional     | Confirm callback            |
| width              | string\|number | 520px        | Modal width                 |
| maxHeight          | string\|number | 85vh         | Max modal height            |
| backgroundColor    | string         | #fff         | Modal background            |
| overlayColor       | string         | rgba(...)    | Overlay color               |
| confirmButtonColor | string         | blue         | Confirm button color        |
| cancelButtonColor  | string         | gray         | Cancel button color         |

---

## Main Props

| Prop              | Type     | Default      | Description         |
| ----------------- | -------- | ------------ | ------------------- |
| isOpen            | boolean  | required     | Open / close modal  |
| onClose           | function | required     | Close callback      |
| title             | string   | Confirmation | Modal title         |
| message           | string   | ""           | Message text        |
| children          | node     | null         | Custom content      |
| showCloseIcon     | boolean  | false        | Show close button   |
| showCancelButton  | boolean  | false        | Show cancel button  |
| showConfirmButton | boolean  | false        | Show confirm button |
| cancelText        | string   | Cancel       | Cancel label        |
| confirmText       | string   | Confirm      | Confirm label       |
| onCancel          | function | optional     | Cancel callback     |
| onConfirm         | function | optional     | Confirm callback    |

---

## Styling Props

You can customize:

- width
- maxHeight
- borderRadius
- backgroundColor
- textColor
- titleColor
- overlayColor
- confirmButtonColor
- cancelButtonColor
- fontFamily
- boxShadow

---

## Mobile UX

On mobile devices:

- full width modal
- bottom sheet animation
- native iPhone inspired design

---

## Accessibility

Includes:

- `role="dialog"`
- `aria-modal="true"`
- Escape key closing
- overlay close support

---

## TypeScript Support

Works perfectly in TypeScript React projects.

```tsx
import HRnet_modal from "@delaroche/hrnet-modal";
```

---

## Example Advanced Usage

```jsx
<HRnet_modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete employee"
  message="This action cannot be undone"
  showCancelButton
  showConfirmButton
  confirmText="Delete"
  confirmButtonColor="#dc2626"
  cancelText="Keep"
/>
```

---

## Roadmap

- Swipe to close on mobile
- Dark mode
- Animation presets
- TypeScript definitions
- Accessibility enhancements

---

## Contributing

Pull requests and suggestions are welcome.

---

## Package Info

```bash
npm view @delaroche/hrnet-modal
```

---

## Author

Danick Delaroche

---

## License

MIT
