# Privacy Policy

**Effective Date and Last Updated:** February 25, 2026

NimoteCode ("we", "us", "our", or "the Company") operates the NimoteCode mobile application (the "App" or "Service"), a professional cross-platform remote development IDE available on iOS and Android. We are deeply committed to protecting your privacy and handling personal information in a transparent, secure, and responsible manner.

This Privacy Policy describes how we collect, use, disclose, store, and protect your information when you download, install, register, or use the NimoteCode App. By using the App, you consent to the practices described in this Policy. If you do not agree, please do not use the Service.

We strongly recommend that you read this Policy carefully. If you have any questions, contact us at aoun.ma@foxmail.com.

## 1. Information We Collect

### 1.1 Information You Provide Directly
- **Account Information**: Email address (for registration, login, password reset, and subscription management); Google account identifier and basic profile information (if you choose Google Sign-In via Firebase Authentication).
- **Support and Communications**: Any information you voluntarily provide when contacting support (e.g., via email or in-app feedback), including descriptions of issues, screenshots, or logs you attach.
- **Subscription and Payment Data**: Subscription tier selection and transaction identifiers. All payment processing (including credit card details) is handled exclusively by Apple App Store or Google Play Billing, with subscription management facilitated by RevenueCat — we do **not** collect, store, access, or process full payment card numbers, CVV, or billing addresses.

### 1.2 Information Collected Automatically
- **Device and Usage Data**: Device model, manufacturer, OS version, app version, language settings, screen resolution, time zone, unique device identifiers (e.g., IDFA/GAID if permitted), crash reports, performance metrics, and error logs (anonymized).
- **Analytics Data**: Aggregated, anonymized usage statistics (e.g., which features are used, session duration, frequency of SSH connections or Git operations) to improve the App. This is optional and can be disabled in settings. We use Firebase Analytics for this purpose.
- **Connection Metadata**: Timestamps, IP addresses (transient, not logged long-term), and connection status for SSH/SFTP sessions (for debugging and abuse prevention only — **no command content or file contents are logged**).

### 1.3 Information We Explicitly Do NOT Collect
We do **not** collect, record, transmit to our servers, or store:
- SSH/SFTP credentials (private keys, passwords, passphrases, tokens, or host keys) — these are stored **only locally** on your device using platform-secure mechanisms (iOS Keychain / Android Keystore with encryption).
- Any content of commands executed in SSH terminals.
- Contents of files browsed, viewed, or edited via SFTP or the built-in editor.
- Source code, repository contents, or project data beyond temporary caching for editor functionality (cleared on session end or app close).
- AI-related data when using user-configured models: Prompts, code context, responses, or outputs are sent **directly** from your device to the third-party AI provider (e.g., OpenAI, Anthropic, local LLM) — we do **not** intercept, proxy, log, or store these interactions.

## 2. How We Use Your Information

We use the collected information only for the following legitimate purposes:
- To provide, operate, maintain, secure, personalize, and improve the App and its features (e.g., SSH connections, code highlighting, Git visualization, AI assistance setup).
- To authenticate your identity via Firebase Authentication, manage your account, and enable subscription-based features through RevenueCat.
- To process and verify in-app purchases and subscription status via platform billing APIs and RevenueCat.
- To respond to support inquiries, send service notifications (e.g., updates, subscription reminders), and communicate important changes.
- To detect, prevent, and investigate technical issues, abuse, fraud, or unauthorized access.
- To generate anonymized, aggregated analytics for product development and performance optimization using Firebase.

## 3. Data Sharing and Disclosure

We do **not** sell your personal information to third parties.

We may share information only in these limited cases:
- With Apple Inc. and Google LLC as required for app distribution, billing, crash reporting (if enabled), and analytics.
- With trusted service providers such as Firebase (for authentication and analytics) and RevenueCat (for subscription management) under strict data processing agreements that require equivalent protection.
- As required or permitted by law, regulation, subpoena, court order, or governmental request.
- In connection with a merger, acquisition, reorganization, or sale of assets — we will provide notice and obtain consent where required by law.

**Important for AI Features**: When you configure an external AI model or API (third-party or local), your code snippets, prompts, and context are transmitted **directly** to that provider's servers. We do **not** receive, store, or process this data. You are responsible for reviewing and complying with the privacy policy of any third-party AI service you choose to integrate.

## 4. Data Storage, Security, and Retention

- **Local Storage**: SSH credentials, app preferences, and temporary editor caches are encrypted on-device using platform-native secure storage.
- **Server-Side Storage**: Minimal account data (email, subscription status) is stored in secure, encrypted cloud infrastructure with access controls and regular security audits, managed via Firebase and RevenueCat.
- **Retention**: We retain personal data only as long as necessary for the purposes outlined (typically account lifetime + 1 year post-deletion for legal compliance), or as required by law. Anonymized analytics may be retained longer.

We implement reasonable technical, administrative, and physical safeguards to protect your data, though no system is 100% secure.

## 5. International Data Transfers

Your information may be transferred to and processed in jurisdictions outside your country (e.g., cloud servers in the US, EU, or Asia). We use appropriate safeguards (e.g., Standard Contractual Clauses where applicable) to ensure protection consistent with this Policy and applicable law.

## 6. Your Rights and Choices

Depending on your location and applicable law (GDPR, CCPA/CPRA, etc.), you may have rights including:
- Access, correction, deletion, or portability of your personal data.
- Opt-out of certain processing (e.g., analytics).
- Withdraw consent (where consent is the basis).
- Lodge a complaint with a supervisory authority.

To exercise these rights or request deletion of your account/data, email aoun.ma@foxmail.com. We will respond within the legally required timeframe (e.g., 30–45 days).

You can also manage preferences in-app (e.g., disable analytics).

## 7. Children's Privacy

The App is not intended for children under 13 years old (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it promptly.

## 8. Changes to This Privacy Policy

We may update this Policy to reflect changes in practices, technology, or law. We will notify you of material changes via in-app notice, email, or App Store update notes. Continued use after changes constitutes acceptance.

## 9. Contact Us

For questions, rights requests, or concerns:  
**Email:** aoun.ma@foxmail.com

**GitHub Issues:** https://github.com/nimotecode/nimote_issues/issues  

Thank you for trusting NimoteCode with your development workflow.
