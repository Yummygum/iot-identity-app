# IOTA Identity Verification

A Next.js application for verifying credentials.

## Tech Stack

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Linting**: ESLint with flat config
- **Formatting**: Prettier
- **Data Validation**: Zod

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

Build the application for production:

```bash
bun run build
```

### Linting

Run ESLint to check code quality:

```bash
bun lint
```

Fix auto-fixable issues:

```bash
bun lint --fix
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── verify/ # Dummy API route for credential verification
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
└── lib/
    └── schemas/ # Zod schemas for API response validation
```

## Contributing

1. Follow the ESLint rules defined in `eslint.config.mjs`
2. Use Prettier for code formatting
3. Ensure all code passes linting before committing
