# ALX Rick and Morty GraphQL App

A modern Next.js application that demonstrates GraphQL integration using Apollo Client to fetch and display data from the Rick and Morty API.

## 🚀 Features

- **Next.js 15** with TypeScript for type safety
- **GraphQL Integration** using Apollo Client
- **Rick and Morty API** integration for character data
- **Tailwind CSS** for modern styling
- **ESLint** for code quality
- **Responsive Design** for all devices

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd alx-graphql-0x01
   ```

2. **Navigate to the project directory**
   ```bash
   cd alx-rick-and-morty-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

## 🚀 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 🧹 Code Quality

Run the linter to check for code quality issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 📁 Project Structure

```
alx-rick-and-morty-app/
├── graphql/              # GraphQL configuration and queries
│   ├── apolloClient.ts   # Apollo Client configuration
│   └── queries.ts        # GraphQL queries
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document wrapper
│   └── index.tsx         # Home page
├── public/               # Static assets
├── styles/               # CSS styles
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── README.md             # This file
```

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL Client**: Apollo Client
- **API**: Rick and Morty GraphQL API
- **Package Manager**: npm/yarn/pnpm/bun
- **Linting**: ESLint

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Rick and Morty API](https://rickandmortyapi.com/graphql)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the ALX Software Engineering program.

## 🙏 Acknowledgments

- ALX Software Engineering Program
- Rick and Morty API for providing the GraphQL endpoint
- Next.js team for the amazing framework
- Apollo GraphQL for the client library

---

**Happy Coding! 🎉** 