---
description: "Component patterns: CommonFullWidthWrapper, H1/H2/H3/P/Span typography, icons, Button, Chip, forwardRef, list mappers, constants, TypeScript patterns"
---

# Component Patterns

## `CommonFullWidthWrapper` — Section Foundation

Every full-width section is based on `CommonFullWidthWrapper` (from `@components/common-full-width-wrapper`).

Extend it with `styled()`:

```ts
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";

export const HeroWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;
```

Pass it props in JSX:

```ts
<HeroWrapper
  element="section"
  bg="var(--color-neutral-100)"
  wrapperCss={heroOverlayCss}
  secondContainer={<BackgroundImage />}
>
  {/* content */}
</HeroWrapper>
```

Props:

| Prop              | Type               | Description                                                                |
| ----------------- | ------------------ | -------------------------------------------------------------------------- |
| `bg`              | `string`           | CSS variable string for background, e.g. `"var(--color-neutral-900)"`      |
| `element`         | `string`           | Semantic HTML tag — `"section"` (default), `"header"`, `"footer"`, `"div"` |
| `wrapperCss`      | `SerializedStyles` | Extra `css` interpolation on the outer wrapper (overlays, gradients)       |
| `secondContainer` | `ReactNode`        | JSX rendered outside the inner container (background images, decorators)   |

Container width: **85% on desktop, 90% on tablet and phone**.

---

## `StandardSectionLayout` — Standard Section Wrapper

Every non-hero section uses `StandardSectionLayout` (from `@layouts/standard-section`) as its outer wrapper. It handles the `Chip`, `H2` title, `P` description, and `CommonFullWidthWrapper` automatically. Unless a section has unique layout needs, it should use `StandardSectionLayout` for consistency.

```ts
import StandardSectionLayout from "@layouts/standard-section";

<StandardSectionLayout
  chip={chip}
  title={title ?? ""}
  description={description}
  element="section"
  css={extraCss}
>
  {/* section content */}
</StandardSectionLayout>
```

Props:

| Prop          | Type               | Description                                                    |
| ------------- | ------------------ | -------------------------------------------------------------- |
| `chip`        | `string`           | Label rendered as `<Chip>` above the title                     |
| `title`       | `string`           | Section heading rendered as `<H2>`                             |
| `description` | `string`           | Optional subheading rendered as `<P>`                          |
| `bg`          | `string`           | Background color CSS variable (default: transparent)           |
| `element`     | `string`           | Semantic HTML tag for the outer wrapper (default: `"section"`) |
| `css`         | `SerializedStyles` | Extra Emotion `css` interpolation for overrides                |
| `children`    | `ReactNode`        | Section body rendered below the heading block                  |

Notes:

- `StandardSectionLayout` calls `.toUpperCase()` on `chip` internally — pass the raw label from `constants.ts`
- Pass `css={someExtraCss}` to override padding or positioning for specific sections
- Do **not** create a custom `CommonFullWidthWrapper` for sections that are covered by `StandardSectionLayout`

---

## `HeroSection` — Full-Bleed Page Hero

The shared `HeroSection` layout (from `@layouts/hero-section`) is placed at the top of each page module.

```ts
import HeroSection from "@layouts/hero-section";

<HeroSection
  imgSrc="https://..."
  chip="Industrial Grade Excellence"
  title="India's Most Trusted Water Tank Cleaning Service"
  subtitle="Sterile hygiene protocols..."
  CTAs={HeroCTAs}
/>
```

The `title` prop accepts either a plain `string` or `{ text: string; highlight: string }` for inline highlighted words. CTAs come from `constants.ts` typed as `NonNullable<HeroSectionProps["CTAs"]>`.

---

## HTML Typography Components

Never use raw `<h1>`, `<h2>`, `<h3>`, `<p>`, or `<span>`. Import from `@components/html`:

```ts
import { H1, H2, H3, P, Span } from "@components/html";
```

All accept `CommonTextProps`:

```ts
$size?:        "4xs" | "3xs" | "2xs" | "1xs" | "s" | "m" | "l" | "1xl" | "2xl" | "3xl" | "4xl"
$weight?:      "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "1000"
$color?:       "primary" | "secondary" | "accent" | "neutral" | "black" | "white"
$colorWeight?: "100" | "200" | ... | "1000"
$colorAlpha?:  number  // 0–1 — uses rgba() with the -base token automatically
$margin?:      string
$lineHeight?:  string
$letterSpacing?: string
```

Default sizes: `H1` → `4xl`, `H2` → `1xl`, `H3` → `m`, `P` → `2xs`.

```ts
<H2 $color="primary" $colorWeight="200" $weight="700">
  Our Cleaning Process
</H2>
<P $size="s" $color="neutral" $colorWeight="400" $margin="0.5rem 0 0">
  A step-by-step scientific approach to safe water tank cleaning.
</P>
<Span $colorAlpha={0.6} $color="neutral" $colorWeight="800">
  Optional note
</Span>
```

---

## Icon Usage

Icons come exclusively from `@mui/icons-material`.

**In types:**

```ts
import { SvgIconComponent } from "@mui/icons-material";

interface ItemType {
  icon: SvgIconComponent;
  title: string;
}
```

**In constants:**

```ts
import {
  WaterDropOutlined,
  CleaningServicesOutlined,
} from "@mui/icons-material";

export const items: NonNullable<MySectionProps["items"]> = [
  { icon: WaterDropOutlined, title: "Water Removal" },
  { icon: CleaningServicesOutlined, title: "Jet Cleaning" },
];
```

**In JSX (rename to `Icon` on destructure):**

```ts
const itemMapper = ({ icon: Icon, title }: ItemType) => (
  <ItemWrapper key={title}>
    <Icon className="icon" />
    <span className="title">{title}</span>
  </ItemWrapper>
);
```

**In styles (target via `.icon` class):**

```ts
const ItemWrapper = styled.li`
  .icon {
    font-size: 2rem;
    color: var(--color-secondary-400);
  }
`;
```

---

## Button Component

`Button` from `@components/button` is polymorphic — never use raw `<a>` or `<button>`.

- No `href` → renders as `<button>`
- With `href` → renders as Next.js `<Link>`

```ts
import Button from "@components/button";

// Action button
<Button $variant="filled" $size="md" $color="primary" $colorWeight="500">
  Get a Quote
</Button>

// Navigation link
<Button href="/contact" $variant="outlined" $size="lg" $color="secondary" $colorWeight="400">
  Contact Us
</Button>

// Glass with border
<Button $variant="glass" $withBorder $color="secondary" $colorWeight="800">
  Learn More
</Button>
```

Variants: `filled` | `outlined` | `glass` | `text`
Sizes: `sm` | `md` | `lg`
Color props: `$color`, `$colorWeight`, `$textColor`, `$textColorWeight`
Extra props: `$fontWeight`, `$padding` (custom padding string), `$borderRadius` (`"full"` | `"lg"` | `"md"` | `"sm"` | `"none"` | arbitrary string)

Press state uses a `data-down` attribute, not CSS `:active`, for consistent touch/mouse behavior.

---

## Chip Component

Used as a small label before section headings:

```ts
import Chip from "@components/chip";

<Chip
  $backgroundColor="secondary"
  $backgroundColorWeight="800"
  $textColorWeight="100"
>
  {label.toUpperCase()}
</Chip>
```

- Call `.toUpperCase()` when using `Chip` directly; `StandardSectionLayout` and `HeroSection` handle casing internally
- Store chip labels as SCREAMING_CASE in `constants.ts` (e.g., `"CLIENT VOICES"`, `"OUR PROCESS"`) — no need to transform at import
- Font is `var(--font-mono)` internally — gives a technical, monospaced aesthetic

---

## `forwardRef` Pattern

Name the inner function `XWithoutRef`:

```ts
import { forwardRef, Ref } from "react";
import { ButtonProps } from "./types";

const ButtonWithoutRef = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return <button ref={ref} {...props} />;
};

const Button = forwardRef(ButtonWithoutRef);
Button.displayName = "Button";
export default Button;
```

---

## List Mapper Pattern

Define mappers **outside** the component when they don't need closure:

```ts
// Outside component — no state access needed
const processItemMapper = ({ icon: Icon, title, description }: ProcessItemType) => (
  <ProcessItem key={title}>
    <Icon className="icon" />
    <H3>{title}</H3>
    <P>{description}</P>
  </ProcessItem>
);

const MySection = ({ items }: Props) => (
  <Wrapper>{items.map(processItemMapper)}</Wrapper>
);
```

Use `useCallback` when the mapper needs component state or props:

```ts
const ctaMapper = useCallback(
  ({ text, href, variant }: CtaType, index: number) => (
    <Button key={`cta-${index}`} href={href} $variant={variant}>
      {text}
    </Button>
  ),
  []
);
```

Use `useMemo` when building complex JSX to pass as a prop (e.g., `secondContainer`):

```ts
const bgImage = useMemo(
  () => <Image src={heroBg} alt="" aria-hidden fill />,
  []
);

return <HeroWrapper secondContainer={bgImage}>{children}</HeroWrapper>;
```

### Stateful Item Extraction

When a list item needs its own `ref`, `useEffect`, or local state (e.g., IntersectionObserver for scroll-based activation), extract it as a named `Item` component **in the same file**:

```ts
// process.tsx
const Item = ({ icon: Icon, title, description }: ItemType) => {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        ref.current?.classList.toggle("active", !!entry?.isIntersecting);
      },
      { threshold: 0.95 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <ProcessItem ref={ref}>
      <Icon className="icon" />
      <H3>{title}</H3>
      <P>{description}</P>
    </ProcessItem>
  );
};

const itemMapper = (props: ItemType) => <Item key={props.title} {...props} />;
```

- The outer `itemMapper` stays simple and pure; the `Item` component handles complexity
- The `active` class is toggled by JavaScript on scroll; styles define both `&:hover` (desktop/tablet) and `&.active` (phone)

---

## Constants Pattern

All static data lives in `constants.ts`, typed against `types.ts`:

```ts
// constants.ts
import { NonNullable } from "typescript"; // not needed — built-in
import { MySectionProps } from "@modules/my-section/types";
import { WaterDropOutlined } from "@mui/icons-material";

export const processItems: NonNullable<MySectionProps["items"]> = [
  { icon: WaterDropOutlined, title: "Water Removal", description: "..." },
];

export const homeHeroProps: Pick<MySectionProps, "title" | "subtitle"> = {
  title: { text: "Clean ", highlight: "Water Tanks" },
  subtitle: "Certified machine-based cleaning across India.",
};
```

- `index.tsx` imports from `constants.ts` and passes data as props — it stays a pure composition file

---

## TypeScript Patterns

```ts
// Extract type of optional prop
type ItemsType = NonNullable<MySectionProps["items"]>;

// Extract array item type for mapper signatures
type ItemType = NonNullable<MySectionProps["items"]>[number];

// Flexible union prop with runtime guard
interface Props {
  title: string | { text: string; highlight: string };
}
const isStringTitle = (t: Props["title"]): t is string => typeof t === "string";

// avoid any; use as any only for polymorphic ref bridging
const element = (href ? Link : "button") as any;
```

Never use `any` as a type annotation. Reserve `as any` only for unavoidable polymorphic type bridging.
