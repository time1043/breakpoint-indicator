# tw-breakpoint-overlay

Tiny Tailwind CSS breakpoint indicator for React — shows the current breakpoint in the corner of the screen. Handy during development.

## Install

```bash
pnpm add -D tw-breakpoint-overlay
# npm i -D tw-breakpoint-overlay / yarn add -D tw-breakpoint-overlay
```

## Usage

```tsx
import { BreakpointIndicator } from "tw-breakpoint-overlay";

export default function App() {
  return (
    <>
      <YourApp />
      <BreakpointIndicator />
    </>
  );
}
```

## Tailwind setup

The component ships **no CSS** — it only emits Tailwind class names. Because it lives in `node_modules`, Tailwind won't scan it by default, so register it as a source (Tailwind v4):

```css
/* app.css */
@import "tailwindcss";
@source "../node_modules/tw-breakpoint-overlay/dist";
```

Adjust the path so it points at the installed package. Tailwind v3: add it to `content` instead.

## Breakpoints

| Label | Range           |
| ----- | --------------- |
| `xs`  | < 640px         |
| `sm`  | 640px – 767px   |
| `md`  | 768px – 1023px  |
| `lg`  | 1024px – 1279px |
| `xl`  | ≥ 1280px        |

These are Tailwind's defaults; if you customized them, edit the classes in `src/BreakpointIndicator.tsx`.

## Props

None. Styling is baked in (`fixed bottom-4 right-4`), including `dark:` support.

## Requirements

- React 18 or 19
- Tailwind CSS (any version that has `sm`/`md`/`lg`/`xl` screens)

## License

ISC
