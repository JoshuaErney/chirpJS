# Contributing to ChirpJS

🎉 **Thank you for your interest in contributing to ChirpJS!**

We're excited to have you help make ChirpJS the best notification library for JavaScript. Whether you're fixing bugs, adding features, improving documentation, or sharing ideas, every contribution matters.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install** dependencies with `npm install`
4. **Create** a branch for your changes
5. **Make** your changes and test them
6. **Submit** a pull request

## 📋 Ways to Contribute

### 🐛 Bug Reports

Found a bug? We want to hear about it!

**Before submitting:**

- Check if the issue already exists in our [Issues](https://github.com/yourusername/chirpjs/issues)
- Try the latest version to see if it's already fixed
- Test in multiple browsers if possible

**When reporting:**

- Use our bug report template
- Include a clear, descriptive title
- Provide steps to reproduce the issue
- Include your environment details (browser, OS, ChirpJS version)
- Add a minimal code example or CodePen if possible

### 💡 Feature Requests

Have an idea for ChirpJS? We'd love to discuss it!

**Before requesting:**

- Check existing [Issues](https://github.com/yourusername/chirpjs/issues) and [Discussions](https://github.com/yourusername/chirpjs/discussions)
- Consider if it fits ChirpJS's goal of being lightweight and simple
- Think about how it would benefit other users

**When requesting:**

- Use our feature request template
- Describe the problem you're trying to solve
- Explain your proposed solution
- Consider alternative approaches
- Provide use cases and examples

### 🔧 Code Contributions

Ready to code? Here's how to get started:

#### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/chirpjs.git
cd chirpjs

# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build
```

#### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
chirpjs/
├── src/
│   ├── core/           # Core notification logic
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── styles/         # CSS and styling
│   └── index.ts        # Main entry point
├── tests/
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── fixtures/       # Test fixtures
├── docs/               # Documentation
├── examples/           # Usage examples
└── website/            # Demo website
```

## 🎨 Coding Standards

### TypeScript Guidelines

```typescript
// ✅ Good: Use descriptive names
interface NotificationOptions {
	duration: number;
	position: NotificationPosition;
	closable: boolean;
}

// ✅ Good: Proper type annotations
function showNotification(message: string, options: Partial<NotificationOptions> = {}): ChirpNotification {
	// Implementation
}

// ❌ Avoid: Vague names and any types
function show(msg: any, opts?: any): any {
	// Implementation
}
```

### JavaScript/ES6+ Guidelines

```javascript
// ✅ Good: Use const/let appropriately
const defaultOptions = { duration: 5000 };
let activeNotifications = [];

// ✅ Good: Use modern syntax
const notification = {
	...defaultOptions,
	...userOptions,
};

// ✅ Good: Use meaningful function names
function createNotificationElement(type, message) {
	// Implementation
}

// ❌ Avoid: var and unclear naming
var opts = {};
function create(t, m) {
	// Implementation
}
```

### CSS/Styling Guidelines

```css
/* ✅ Good: Use CSS custom properties */
.notification {
	background: var(--chirp-background);
	border-radius: var(--chirp-border-radius);
	box-shadow: var(--chirp-shadow);
}

/* ✅ Good: BEM-style naming */
.notification__title {
}
.notification__description {
}
.notification--success {
}

/* ❌ Avoid: Hardcoded values and unclear names */
.notif {
	background: #ffffff;
	border-radius: 8px;
}
```

### General Guidelines

- **Lightweight First**: Keep bundle size minimal
- **Performance**: Optimize for speed and efficiency
- **Accessibility**: Follow WCAG guidelines
- **Browser Support**: Test in supported browsers
- **Documentation**: Update docs for new features

## 🧪 Testing

We use Jest for testing. All code should include appropriate tests:

### Writing Tests

```javascript
// Unit test example
describe("ChirpNotification", () => {
	test("should create notification with correct type", () => {
		const notification = chirp.success("Test message");
		expect(notification.type).toBe("success");
		expect(notification.message).toBe("Test message");
	});

	test("should apply custom options", () => {
		const notification = chirp.info("Test", { duration: 3000 });
		expect(notification.duration).toBe(3000);
	});
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- notification.test.js
```

### Test Requirements

- All new features must include tests
- Bug fixes should include regression tests
- Aim for >90% code coverage
- Test in multiple browsers for DOM-related features

## 📝 Documentation

### Code Documentation

````typescript
/**
 * Creates and displays a notification
 * @param message - The notification message
 * @param options - Configuration options
 * @returns The created notification instance
 * @example
 * ```typescript
 * const notification = chirp.success('Success!', {
 *   duration: 3000,
 *   position: 'top-right'
 * });
 * ```
 */
function showNotification(message: string, options: NotificationOptions = {}): ChirpNotification {
	// Implementation
}
````

### Documentation Updates

When adding features:

- Update the README.md if needed
- Add JSDoc comments to new functions
- Update TypeScript types
- Add examples to the demo website
- Update the changelog

## 🔄 Pull Request Process

### Before Submitting

- [ ] Fork the repository and create a feature branch
- [ ] Write tests for your changes
- [ ] Ensure all tests pass (`npm test`)
- [ ] Run linting (`npm run lint`)
- [ ] Update documentation if needed
- [ ] Test in multiple browsers if applicable

### Pull Request Guidelines

1. **Title**: Use a clear, descriptive title

   - ✅ `feat: add dark theme support`
   - ✅ `fix: resolve position bug on mobile`
   - ❌ `update stuff`

2. **Description**: Include:

   - What changes you made and why
   - How to test the changes
   - Screenshots for UI changes
   - Breaking changes (if any)

3. **Size**: Keep PRs focused and reasonably sized

   - Prefer smaller, focused PRs over large ones
   - Split unrelated changes into separate PRs

4. **Commits**: Use conventional commit messages
   ```
   feat: add new notification type
   fix: resolve memory leak in cleanup
   docs: update API documentation
   test: add unit tests for positioning
   ```

### Review Process

1. **Automated Checks**: All tests and linting must pass
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, we'll merge your PR

## 🏆 Recognition

Contributors are recognized in several ways:

- **Contributors List**: Added to README.md and website
- **Changelog**: Credited in release notes
- **GitHub**: Contributor badge on your profile
- **Special Thanks**: Major contributors highlighted in releases

## 📞 Getting Help

Need help? We're here for you:

- **Discussions**: Use [GitHub Discussions](https://github.com/yourusername/chirpjs/discussions) for questions
- **Discord**: Join our [Discord server](your-discord-link) for real-time chat
- **Issues**: Create an issue for bugs or feature requests
- **Email**: Reach out to hello@chirpjs.dev for other inquiries

## 🌟 Code of Conduct

### Our Pledge

We're committed to making ChirpJS a welcoming and inclusive project for everyone, regardless of experience level, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

### Our Standards

**Positive behaviors include:**

- Being respectful and considerate
- Welcoming newcomers and helping them learn
- Focusing on constructive feedback
- Accepting responsibility for mistakes
- Being open to different perspectives

**Unacceptable behaviors include:**

- Harassment, discrimination, or exclusionary behavior
- Trolling, insulting comments, or personal attacks
- Publishing private information without permission
- Spam or off-topic content

### Enforcement

Violations of our code of conduct can be reported to conduct@chirpjs.dev. All reports will be handled confidentially and professionally.

## 🎯 Development Roadmap

Want to help but not sure where to start? Check out:

- **Good First Issues**: Perfect for newcomers
- **Help Wanted**: Issues where we need assistance
- **Roadmap**: Our planned features and improvements
- **Discussions**: Ideas and feature requests

## 🚀 Release Process

For maintainers and core contributors:

1. **Version Bump**: Update version in package.json
2. **Changelog**: Update CHANGELOG.md with changes
3. **Testing**: Final testing across browsers
4. **Build**: Create production build
5. **Publish**: Release to npm and GitHub
6. **Announcement**: Share release notes

---

**Thank you for contributing to ChirpJS! Together, we're building something amazing.** 🎉

_Questions? Feel free to ask in [Discussions](https://github.com/yourusername/chirpjs/discussions) or reach out to the maintainers._
