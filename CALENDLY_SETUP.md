# Calendly Integration Setup

## Overview
Your website now includes a Calendly scheduling widget in the contact section, allowing visitors to book calls directly from your website.

## What's Been Added
1. **Two-column contact layout**: Contact form on the left, Calendly widget on the right
2. **CalendlyWidget component**: A React component that properly integrates Calendly
3. **Configuration file**: Centralized settings in `lib/config.ts`

## Setup Steps

### 1. Get Your Calendly URL
1. Log into your [Calendly account](https://calendly.com)
2. Go to your event type (or create one)
3. Click "Share" → "Embed" → "Inline"
4. Copy the URL (it should look like: `https://calendly.com/yourusername/eventname`)

### 2. Update the Configuration
Edit `lib/config.ts` and replace the placeholder URL:

```typescript
export const config = {
  calendly: {
    // Replace this with your actual Calendly URL
    url: "https://calendly.com/yourusername/eventname"
  },
  // ... rest of config
}
```

### 3. Test the Integration
1. Run your development server
2. Navigate to the contact section
3. Verify the Calendly widget appears on the right side
4. Test booking a call through the widget

## Features

### Contact Form (Left Side)
- Name, email, and message fields
- Form validation and submission
- Success/error feedback
- Spam protection with honeypot field

### Calendly Widget (Right Side)
- Inline scheduling widget
- "Open Calendar" button for external access
- Responsive design that works on mobile
- Automatically loads Calendly script

## Customization

### Styling
- The widget uses your existing color scheme (`#3EA8FF`)
- Both columns have matching white backgrounds with subtle shadows
- Responsive grid layout (stacks on mobile)

### Widget Height
You can adjust the widget height by modifying the `style` prop in the CalendlyWidget component:

```typescript
<CalendlyWidget 
  url={config.calendly.url}
  style={{ minHeight: '600px' }} // Adjust this value
/>
```

### Event Types
If you want to show different event types, you can:
1. Create multiple event types in Calendly
2. Add multiple CalendlyWidget components
3. Use Calendly's prefill options to customize the experience

## Troubleshooting

### Widget Not Loading
- Check that your Calendly URL is correct
- Ensure you're using the "Inline" embed URL, not the popup or redirect URL
- Check browser console for any JavaScript errors

### Styling Issues
- The widget inherits some styles from Calendly
- You can override specific styles using the `style` prop
- Mobile responsiveness is handled automatically

### Performance
- The Calendly script is loaded asynchronously
- The widget only initializes when the component mounts
- No impact on initial page load performance

## Next Steps
1. Update the Calendly URL in `lib/config.ts`
2. Test the booking flow
3. Customize the event types and availability
4. Consider adding prefill options (name, email) from the contact form

## Support
If you need help with Calendly setup or customization, refer to the [Calendly Developer Documentation](https://developer.calendly.com/).
