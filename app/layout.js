export const metadata = {
  title: 'Project 2B AI Tools',
  description: 'AI-powered tools to boost productivity',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Project 2B AI Tools Suite</h1>
          <nav>
            <a href="/">Home</a> | <a href="/prompt-optimizer">Prompt Optimizer</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}