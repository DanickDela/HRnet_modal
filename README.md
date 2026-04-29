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
import { Trash2, Check } from "lucide-react";

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
        cancelIcon={<Check size={16} />}
        showConfirmButton={true}
        confirmIcon={<Trash2 size={16} />}
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

| Prop                   | Type           | Default               | Description                 |
| ---------------------- | -------------- | --------------------- | --------------------------- |
| isOpen                 | boolean        | required              | Controls modal visibility   |
| onClose                | function       | required              | Triggered when modal closes |
| title                  | string         | Modal title           | Modal title                 |
| message                | string         | ""                    | Informational text          |
| children               | node           | null                  | Custom JSX content          |
| showCloseIcon          | boolean        | false                 | Display top close button    |
| showCancelButton       | boolean        | false                 | Display cancel button       |
| showConfirmButton      | boolean        | false                 | Display confirm button      |
| closeIcon              | node           | ×                     | Custom close icon           |
| cancelIcon             | node           | null                  | Icon before cancel label    |
| confirmIcon            | node           | null                  | Icon before confirm label   |
| cancelText             | string         | Cancel                | Cancel button label         |
| confirmText            | string         | Confirm               | Confirm button label        |
| onCancel               | function       | optional              | Cancel callback             |
| onConfirm              | function       | optional              | Confirm callback            |
| confirmButtonType      | string         | button                | HTML button type            |
| width                  | string\|number | 520px                 | Modal width                 |
| maxHeight              | string\|number | 85vh                  | Max modal height            |
| borderRadius           | string\|number | 20px                  | Modal border radius         |
| fontSize               | string\|number | 1rem                  | Base font size              |
| fontFamily             | string         | inherit               | Font family                 |
| backgroundColor        | string         | #ffffff               | Modal background            |
| textColor              | string         | #111827               | Main text color             |
| titleColor             | string         | #111827               | Title color                 |
| overlayColor           | string         | rgba(...)             | Overlay color               |
| confirmButtonColor     | string         | #2563eb               | Confirm button color        |
| cancelButtonColor      | string         | #e5e7eb               | Cancel button color         |
| confirmButtonTextColor | string         | #ffffff               | Confirm text color          |
| cancelButtonTextColor  | string         | #111827               | Cancel text color           |
| boxShadow              | string         | 0 12px 40px rgba(...) | Modal shadow                |
| className              | string         | ""                    | Extra modal class           |
| overlayClassName       | string         | ""                    | Extra overlay class         |
| bodyClassName          | string         | ""                    | Extra body class            |
| closeButtonClassName   | string         | ""                    | Extra close button class    |
| confirmButtonClassName | string         | ""                    | Extra confirm button class  |
| cancelButtonClassName  | string         | ""                    | Extra cancel button class   |

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
- automatic focus on open
- Escape key closing
- overlay close support

---

## TypeScript Support

Works perfectly in TypeScript React projects.

```tsx
import HRnet_modal from "@delaroche/hrnet-modal";
import { Trash2, Check } from "lucide-react";
```

---

## Basic Example

```jsx
import { useState } from "react";
import HRnet_modal from "@delaroche/hrnet-modal";
import "@delaroche/hrnet-modal/style.css";
import { Trash2, Check } from "lucide-react";

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
        cancelIcon={<Check size={16} />}
        showConfirmButton={true}
        confirmIcon={<Trash2 size={16} />}
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

## Example Advanced Usage

```jsx
import { useState } from "react";
import HRnet_modal from "@delaroche/hrnet-modal";
import { Trash2, Check } from "lucide-react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <HRnet_modal
      isOpen={open}
      onClose={() => setOpen(false)}
      title="Delete employee"
      message="This action cannot be undone"
      showCancelButton={true}
      cancelIcon={<Check size={16} />}
      showConfirmButton={true}
      confirmIcon={<Trash2 size={16} />}
      confirmText="Delete"
      confirmButtonColor="#dc2626"
      cancelText="Keep"
    />
  );
}
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
