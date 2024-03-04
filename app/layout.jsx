import React from "react";
import '@/assets/styles/global.css';

export const metadata = {
    title: 'PropertyPulse - Home',
    description: 'Find your dream home in minutes',
    keywords:'find, home, property, real estate, propertypulse',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
