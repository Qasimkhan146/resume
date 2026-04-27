# Portfolio Website

This is a Next.js portfolio project.

## Contact Form Email Delivery

The contact form sends submissions to your provider email using SMTP.

### 1. Configure environment variables

Copy `.env.example` to `.env.local` and set real values:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_NAME` (display name shown as sender, e.g. `Qasim Khan`)
- `CONTACT_TO_EMAIL` (inbox that receives form submissions)
- `CONTACT_FROM_EMAIL` (sender used by SMTP)

For Gmail, use an **App Password** instead of your normal account password.

### 2. Start development server

```bash
npm run dev
```

### 3. Test form

Submit from:

- Home page contact section
- `/contact` page

Both call `POST /api/contact`.
