# Property Media Guide 📸🎬

## How to Add Your Property Images and Videos

### 📁 Folder Structure
```
properties/
├── images/
│   ├── mumbai-1/
│   │   ├── main.jpg           # Main property image (for property card)
│   │   ├── living-room.jpg    # Interior photos
│   │   ├── bedroom.jpg
│   │   ├── kitchen.jpg
│   │   ├── bathroom.jpg
│   │   └── exterior.jpg
│   ├── mumbai-2/
│   │   ├── main.jpg
│   │   ├── workspace.jpg      # For office properties
│   │   ├── meeting-room.jpg
│   │   └── reception.jpg
│   └── [property-id]/         # Create folder for each property
└── videos/
    ├── mumbai-1-tour.mp4      # Property video tours
    ├── mumbai-2-office-tour.mp4
    └── [property-id]-tour.mp4

```

### 🎯 Steps to Add Your Media:

1. **Create Property Folder**: Create a folder named with your property ID (e.g., `mumbai-1`, `navi-1`, etc.)

2. **Add Images**: Place your property images in the folder:
   - `main.jpg` - Main image shown on property card
   - `living-room.jpg`, `bedroom.jpg`, etc. - Additional photos for modal slider

3. **Add Videos**: Place video files in the `videos` folder:
   - Name format: `[property-id]-tour.mp4`

4. **Update Property Data**: In `src/pages/Properties.tsx`, add `mediaGallery` to your property:

```typescript
{
  id: "your-property-id",
  // ... other property details
  image: "/properties/images/your-property-id/main.jpg",
  mediaGallery: [
    { type: 'image' as const, src: '/properties/images/your-property-id/main.jpg', alt: 'Property exterior' },
    { type: 'image' as const, src: '/properties/images/your-property-id/living-room.jpg', alt: 'Living room' },
    { type: 'video' as const, src: '/properties/videos/your-property-id-tour.mp4', poster: '/properties/images/your-property-id/main.jpg', alt: 'Property tour' }
  ]
}
```

### 📐 Image Requirements:
- **Format**: JPG, PNG, WebP
- **Size**: 1200x800px or higher recommended
- **Quality**: High quality but optimized for web

### 🎬 Video Requirements:
- **Format**: MP4 (best compatibility)
- **Size**: Under 50MB for web performance
- **Resolution**: 1080p or 720p

### 💡 Tips:
- Use descriptive alt text for accessibility
- Keep file names lowercase and use hyphens
- Optimize images before uploading
- Test videos in different browsers

### 🔧 Fallback:
If you don't add `mediaGallery`, the modal will show default placeholder images from Unsplash.