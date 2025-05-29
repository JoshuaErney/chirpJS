# Security Policy

## 🛡️ Supported Versions

We actively support the following versions of ChirpJS with security updates:

| Version | Supported              |
| ------- | ---------------------- |
| 0.x.x   | ✅ Current development |
| < 0.1   | ❌ No longer supported |

**Support Timeline:**

- **Current development (0.x)**: Full security support as we work toward v1.0
- **Pre-release versions**: Limited support for critical security issues only

**Note:** ChirpJS is currently in active development toward our v1.0 release. While we maintain security best practices, the API may change between versions. We recommend pinning to specific patch versions in production until v1.0 is released.

## 🚨 Reporting a Vulnerability

We take security vulnerabilities seriously and appreciate responsible disclosure. If you discover a security vulnerability in ChirpJS, please follow these steps:

### Preferred Reporting Method

**Email:** security@chirpjs.dev (replace with your actual security email)

**Please include:**

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if available)
- Your contact information for follow-up

### What to Expect

- **Initial Response:** Within 48 hours of your report
- **Status Update:** Weekly updates on investigation progress
- **Resolution Timeline:**
  - Critical vulnerabilities: 72 hours
  - High severity: 7 days
  - Medium/Low severity: 30 days

### Responsible Disclosure

We kindly request that you:

- Give us reasonable time to fix the vulnerability before public disclosure
- Avoid accessing or modifying user data without explicit permission
- Don't perform destructive testing on production systems
- Contact us before sharing details with third parties

## 🏆 Recognition

We believe in recognizing security researchers who help keep ChirpJS secure:

- **Hall of Fame:** Contributors will be listed in our security acknowledgments
- **Credits:** Appropriate credit in release notes and security advisories
- **Coordination:** We'll work with you on responsible disclosure timing

## 🔒 Security Considerations for ChirpJS

### Client-Side Security

ChirpJS is a client-side library with the following security considerations:

**Content Security Policy (CSP):**

- ChirpJS respects CSP directives
- No inline styles or scripts are injected
- All styling is applied via CSS classes

**XSS Prevention:**

- All user-provided content is properly escaped
- HTML content requires explicit opt-in via `allowHTML: true`
- Custom icons and messages are sanitized by default

**Data Handling:**

- No user data is collected or transmitted
- No external network requests are made
- All processing happens locally in the browser

### Safe Usage Guidelines

**Content Sanitization:**

```javascript
// ✅ Safe - content is automatically escaped
chirp.success(userInput);

// ⚠️ Requires caution - HTML content
chirp.success(htmlContent, { allowHTML: true });

// ✅ Recommended - use textContent for user input
chirp.success(sanitizeHtml(userInput), { allowHTML: true });
```

**Custom Icons:**

```javascript
// ✅ Safe - string icons
chirp.success("Message", { icon: "✅" });

// ⚠️ Requires validation - HTML icons
chirp.success("Message", {
	icon: trustedHtmlIcon,
	allowHTML: true,
});
```

## 🔍 Security Testing

We maintain security through:

- **Static Analysis:** Regular code scanning with security-focused linters
- **Dependency Auditing:** Zero dependencies mean minimal attack surface
- **Penetration Testing:** Regular security assessments
- **Community Review:** Open source transparency

## 📋 Security Checklist for Users

When integrating ChirpJS:

- [ ] Validate and sanitize user-generated content before displaying
- [ ] Use Content Security Policy (CSP) headers
- [ ] Keep ChirpJS updated to the latest version
- [ ] Review custom CSS for potential security implications
- [ ] Test notification content for XSS vulnerabilities
- [ ] Implement proper error handling to prevent information leakage

## 🚀 Security Updates

Security updates are distributed via:

- **npm:** Patch versions for security fixes
- **GitHub:** Security advisories and release notes
- **Email:** Notifications to registered security contacts
- **Website:** Security bulletins on our documentation site

### Subscribing to Security Updates

To receive security notifications:

1. Watch this repository for security advisories
2. Follow [@ChirpJS](https://twitter.com/chirpjs) on Twitter
3. Subscribe to our security mailing list: security-updates@chirpjs.dev

## 📞 Contact Information

**Security Team:** security@chirpjs.dev **General Contact:** hello@chirpjs.dev **Project Maintainer:** [Your Name] (@yourusername)

**Response Hours:** Monday-Friday, 9 AM - 5 PM UTC **Emergency Contact:** For critical vulnerabilities affecting major applications

## 🔗 Additional Resources

- [OWASP JavaScript Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Responsible Disclosure Guidelines](https://www.bugcrowd.com/resource/what-is-responsible-disclosure/)

---

**Last Updated:** [Current Date] **Version:** 1.0

We appreciate your help in keeping ChirpJS secure for everyone! 🙏
