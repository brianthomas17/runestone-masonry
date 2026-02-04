

## Logo Comparison Plan

Add both new logos to the navigation so you can compare them side-by-side and decide which one works best for Runestone Masonry.

### What You'll See

The navigation will temporarily show both logos next to each other so you can compare how each one looks on the site. Once you pick your favorite, we can remove the other one.

### Changes

**1. Add Logo Files**
- Copy `Runestone_Masonry_5x5_1.png` (blue/cream version) to `public/images/`
- Copy `Runestone_Masonry_Transparent.png` (black/white version) to `public/images/`

**2. Update Navigation Component**
Modify `src/components/Navigation.tsx` to display both logos with labels:

```text
Current:  [Logo] [Title]

Updated:  [Logo 1] [Logo 2] [Title]
           "1"       "2"
```

Each logo will have a small number label underneath so you can easily tell us which one you prefer (Logo 1 = blue/cream, Logo 2 = black/white).

### Files Modified
- `public/images/Runestone_Masonry_5x5_1.png` (new file)
- `public/images/Runestone_Masonry_Transparent.png` (new file)
- `src/components/Navigation.tsx`

### After You Decide
Once you pick your favorite, just let me know which one (1 or 2) and I'll:
- Remove the other logo
- Update the navigation to show only your chosen logo
- Clean up the unused image file

