# ChirpJS

<div align="center">

🐦 **Beautiful notifications that don't weigh you down**

[![npm version](https://badge.fury.io/js/chirpjs.svg)](https://badge.fury.io/js/chirpjs) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/chirpjs?label=gzipped)](https://bundlephobia.com/package/chirpjs) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

[Demo](your-demo-url) • [Documentation](your-docs-url) • [Examples](your-examples-url)

</div>

---

## ✨ Features

- **🪶 Lightweight** - Only 3KB gzipped with zero dependencies
- **🎨 Beautiful** - Modern design with smooth animations
- **📱 Mobile First** - Touch gestures and responsive design
- **♿ Accessible** - WCAG compliant with ARIA support
- **⚡ Performant** - Optimized for speed and efficiency
- **🔧 Flexible** - 6 notification types with extensive customization
- **📝 TypeScript** - Full TypeScript support included
- **🌍 Universal** - Works with any JavaScript framework

## 🚀 Quick Start

### Installation

```bash
# npm
npm install chirpjs

# yarn
yarn add chirpjs

# pnpm
pnpm add chirpjs
```

### Basic Usage

```javascript
import { chirp } from "chirpjs";

// Simple notifications
chirp.success("Operation completed successfully!");
chirp.error("Something went wrong");
chirp.warning("Please check your input");
chirp.info("Here's some helpful information");
```

### CDN Usage

```html
<script src="https://unpkg.com/chirpjs@latest/dist/chirp.min.js"></script>
<script>
	chirp.success("Hello from CDN!");
</script>
```

## 📖 Documentation

### Notification Types

| Type      | Description         | Example                                |
| --------- | ------------------- | -------------------------------------- |
| `success` | Positive feedback   | `chirp.success('Saved!')`              |
| `error`   | Error messages      | `chirp.error('Failed to save')`        |
| `warning` | Important notices   | `chirp.warning('Unsaved changes')`     |
| `info`    | General information | `chirp.info('New features available')` |
| `loading` | Progress indication | `chirp.loading('Processing...')`       |
| `custom`  | Fully customizable  | `chirp.custom('Welcome! 🎉')`          |

### Configuration Options

```javascript
chirp.success("Message", {
	duration: 5000, // Auto-dismiss time in milliseconds
	position: "top-right", // Notification position
	closable: true, // Show close button
	pauseOnHover: true, // Pause timer on hover
	theme: "light", // 'light' or 'dark'
	className: "my-class", // Custom CSS class
	icon: "✅", // Custom icon (string or HTML)
	action: {
		// Action button configuration
		label: "Undo",
		handler: () => console.log("Undo clicked"),
	},
});
```

### Positioning

Choose from 6 positioning options:

```javascript
// Top positions
chirp.info("Top Left", { position: "top-left" });
chirp.info("Top Center", { position: "top-center" });
chirp.info("Top Right", { position: "top-right" });

// Bottom positions
chirp.info("Bottom Left", { position: "bottom-left" });
chirp.info("Bottom Center", { position: "bottom-center" });
chirp.info("Bottom Right", { position: "bottom-right" });
```

### Loading Notifications with Progress

```javascript
// Create a loading notification
const loading = chirp.loading("Processing your request...");

// Update progress (0-100)
loading.progress(25);
loading.progress(50);
loading.progress(75);

// Complete with success
loading.success("Processing complete!");

// Or handle error
loading.error("Processing failed");
```

### Persistent Notifications

```javascript
// Notification that doesn't auto-dismiss
const persistent = chirp.info("This stays until dismissed", {
	duration: 0, // 0 = no auto-dismiss
});

// Manually dismiss later
setTimeout(() => {
	persistent.dismiss();
}, 10000);
```

## 🎨 Theming & Customization

### CSS Custom Properties

Customize the appearance using CSS variables:

```css
:root {
	/* Colors */
	--chirp-success-color: #10b981;
	--chirp-error-color: #ef4444;
	--chirp-warning-color: #f59e0b;
	--chirp-info-color: #3b82f6;

	/* Appearance */
	--chirp-border-radius: 0.75rem;
	--chirp-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
	--chirp-backdrop-blur: 20px;

	/* Typography */
	--chirp-font-family: "Inter", sans-serif;
	--chirp-font-size: 0.875rem;
	--chirp-font-weight: 500;
}
```

### Dark Theme

```javascript
// Enable dark theme globally
chirp.config({ theme: "dark" });

// Or per notification
chirp.success("Dark themed notification", { theme: "dark" });
```

### Custom Styling

```javascript
chirp.custom("Custom styled notification", {
	className: "my-custom-notification",
	icon: "<svg>...</svg>", // Custom SVG icon
	theme: "dark",
});
```

```css
.my-custom-notification {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
}
```

## 🛠️ Framework Integration

### React

```jsx
import { chirp } from "chirpjs";

function MyComponent() {
	const handleSubmit = async () => {
		const loading = chirp.loading("Saving...");

		try {
			await saveData();
			loading.success("Saved successfully!");
		} catch (error) {
			loading.error("Failed to save");
		}
	};

	return <button onClick={handleSubmit}>Save Data</button>;
}
```

### Vue 3

```vue
<template>
	<button @click="handleSubmit">Save Data</button>
</template>

<script setup>
import { chirp } from "chirpjs";

const handleSubmit = async () => {
	const loading = chirp.loading("Saving...");

	try {
		await saveData();
		loading.success("Saved successfully!");
	} catch (error) {
		loading.error("Failed to save");
	}
};
</script>
```

### Angular

```typescript
import { Component } from "@angular/core";
import { chirp } from "chirpjs";

@Component({
	selector: "app-example",
	template: '<button (click)="handleSubmit()">Save Data</button>',
})
export class ExampleComponent {
	async handleSubmit() {
		const loading = chirp.loading("Saving...");

		try {
			await this.saveData();
			loading.success("Saved successfully!");
		} catch (error) {
			loading.error("Failed to save");
		}
	}
}
```

## 📊 Bundle Size Comparison

| Library        | Bundle Size | Dependencies | TypeScript |
| -------------- | ----------- | ------------ | ---------- |
| **ChirpJS**    | **3KB**     | **0**        | **✅**     |
| React Toastify | 8KB         | 0            | ✅         |
| SweetAlert2    | 47KB        | 0            | ✅         |
| Notyf          | 4KB         | 0            | ✅         |
| Toastr         | 4KB         | 1 (jQuery)   | ❌         |

## 🌟 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **iOS Safari** 12+
- **Android Chrome** 60+

## 📱 Mobile Features

- **Touch Gestures** - Swipe to dismiss notifications
- **Safe Areas** - Respects device notches and safe areas
- **Responsive Design** - Adapts to all screen sizes
- **Reduced Motion** - Honors accessibility preferences

## ⚙️ Advanced Usage

### Global Configuration

```javascript
import { chirp } from "chirpjs";

// Set global defaults
chirp.config({
	duration: 4000,
	position: "top-center",
	theme: "dark",
	pauseOnHover: true,
});
```

### Queue Management

```javascript
// Clear all notifications
chirp.clear();

// Clear specific types
chirp.clear("error");
chirp.clear(["warning", "error"]);

// Limit concurrent notifications
chirp.config({ maxNotifications: 3 });
```

### Custom Animations

```javascript
chirp.success("Custom animation", {
	animation: {
		enter: "slideInRight",
		exit: "slideOutRight",
	},
});
```

## 🧪 TypeScript

ChirpJS is written in TypeScript and provides full type safety:

```typescript
import { chirp, ChirpOptions, ChirpNotification } from "chirpjs";

const options: ChirpOptions = {
	duration: 5000,
	position: "top-right",
	closable: true,
};

const notification: ChirpNotification = chirp.success("Typed!", options);
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/chirpjs.git
cd chirpjs

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Feather Icons](https://feathericons.com/)
- Inspired by modern notification patterns
- Thanks to all [contributors](https://github.com/yourusername/chirpjs/graphs/contributors)

---

<div align="center">

**Made with ❤️ for the JavaScript community**

[Website](your-website-url) • [Documentation](your-docs-url) • [NPM](your-npm-url) • [GitHub](your-github-url)

</div>
