# HRnet Modal

A reusable and customizable React modal component for alerts, confirmation dialogs, forms, and custom content.

The component supports desktop and mobile modals, mobile bottom sheets, swipe-to-close gestures, custom icons, styling props, and accessibility-friendly behavior.

---

## Features

- Reusable React modal component
- Desktop centered modal
- Mobile bottom sheet mode
- selection of bottom sheet mode or modal mode for mobile
- Optional iOS-style drag handle
- Swipe down to close on mobile bottom sheet
- Close on overlay click
- Close with Escape key
- Optional close icon
- Optional cancel and confirm buttons
- Custom icons for action buttons
- Custom content with `children`
- Custom colors, width, border radius, font, and shadow
- Scroll lock while modal is open
- Accessibility support

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

## Basic Usage

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

## Confirmation Example

```jsx
<HRnet_modal
  isOpen={isOpen}
  title="Delete Employee"
  message="Are you sure?"
  onClose={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
  onConfirm={handleDelete}
  showCancelButton
  showConfirmButton
  cancelText="Cancel"
  confirmText="Delete"
  confirmButtonColor="#dc2626"
/>
```

---

## Mobile Modes

### Bottom Sheet (default)

```jsx
<HRnet_modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  mobileMode="bottom-sheet"
/>
```

### Centered Modal

```jsx
<HRnet_modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  mobileMode="modal"
/>
```

When using `mobileMode="modal"`, the drag handle is automatically hidden.

---

## Overlay Position

### Fixed (default)

Covers the full screen.

```jsx
overlayPosition = "fixed";
```

### Absolute

Useful if you only want to cover a parent container such as `<main>`.

```jsx
overlayPosition = "absolute";
```

Parent element must have:

```css
.main {
  position: relative;
}
```

---

## Custom Icons

```jsx
import { X, Trash2 } from "lucide-react";

<HRnet_modal
  isOpen={isOpen}
  showCloseIcon
  closeIcon={<X size={22} />}
  confirmIcon={<Trash2 size={16} />}
/>;
```

---

## Custom Content

```jsx
<HRnet_modal
  isOpen={isOpen}
  title="Custom Form"
  onClose={() => setIsOpen(false)}
>
  <form>
    <input type="text" placeholder="Your name" />
    <button type="submit">Save</button>
  </form>
</HRnet_modal>
```

---

## Props

| Prop                   | Type            | Default      | Description                 |
| ---------------------- | --------------- | ------------ | --------------------------- |
| isOpen                 | boolean         | required     | Controls modal visibility   |
| onClose                | function        | required     | Close callback              |
| title                  | string          | Modal title  | Title text                  |
| message                | string          | ""           | Optional message            |
| children               | node            | null         | Custom content              |
| showCloseIcon          | boolean         | false        | Show close button           |
| showCancelButton       | boolean         | false        | Show cancel button          |
| showConfirmButton      | boolean         | false        | Show confirm button         |
| closeIcon              | node            | X            | Custom close Icon           |
| cancelIcon             | node            | null         | Icon before cancel label    |
| confirmIcon            | node            | null         | Icon before confirm label   |
| onCancel               | function        | optional     | Cancel callback             |
| onConfirm              | function        | optional     | Confirm callback            |
| cancelText             | string          | Cancel       | Cancel button text          |
| confirmText            | string          | Confirm      | Confirm button text         |
| mobileMode             | string          | bottom-sheet | modal / bottom-sheet        |
| overlayPosition        | string          | fixed        | fixed / absolute            |
| width                  | string / number | 520px        | Modal width                 |
| maxHeight              | string / number | 85vh         | Max height                  |
| borderRadius           | string / number | 20px         | Radius                      |
| backgroundColor        | string          | #ffffff      | Background                  |
| textColor              | string          | #111827      | Text color                  |
| titleColor             | string          | #111827      | Title color                 |
| overlayColor           | string          | rgba(...)    | Overlay color               |
| fontFamily             | string          | inherit      | Font family                 |
| className              | string          | ""           | Custom modal class          |
| overlayClassName       | string          | ""           | Custom overlay class        |
| bodyClassName          | string          | ""           | Custom body class           |
| confirmButtonClassName | string          | ""           | Custom confirm button class |
| cancelButtonClassName  | string          | ""           | Custom cancel button class  |
| closeButtonClassName   | string          | ""           | Custom close button class   |

---

## Accessibility

Includes:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`
- Escape key closing
- Automatic focus on opening

---

## License

MIT
