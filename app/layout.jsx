import '@/styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: 'NextProject',
  description: 'next project to practice',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
