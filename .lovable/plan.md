

## Finalize Branding Across the Site

Apply your chosen logo (3) and text style (A) across the entire site, including the browser tab icon (favicon).

### Changes

**1. Favicon (Browser Tab Icon)**
Update `index.html` to use Logo 3 as the favicon:
- Add a link tag pointing to `/images/Runestone_Masonry_5x5in_3.png`
- This will replace the current `favicon.ico` with your chosen logo

**2. Navigation (`src/components/Navigation.tsx`)**
- Remove the side-by-side logo comparison with labels
- Display only Logo 3 as the single logo
- Keep the menu title image next to it

**3. Hero Section (`src/components/HeroSection.tsx`)**
- Replace the 3-logo comparison with just Logo 3
- Replace the stacked text comparison with just Text A
- Remove all numeric/letter labels

**4. Footer (`src/components/Footer.tsx`)**
- Update the footer logo to use Logo 3 for consistency

**5. Cleanup**
Remove unused image files:
- `Runestone_Masonry_5x5_1.png` (Logo 1)
- `Runestone_Masonry_Transparent.png` (Logo 2)
- `Runestone_Masonry_Text_2.png` (Text B)

### Files Modified
- `index.html`
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/Footer.tsx`

### Result
Your chosen branding will appear consistently everywhere:
- **Browser tab**: Logo 3 as the favicon
- **Navigation**: Logo 3 + menu title
- **Hero**: Logo 3 + Text A
- **Footer**: Logo 3

