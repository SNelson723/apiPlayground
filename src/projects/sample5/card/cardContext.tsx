import React, { createContext, useContext } from "react";

type CardProps = {
  children: React.ReactNode;
  test?: string;
};

type CardContextType = {
  test?: string;
};

const CardContext = createContext<CardContextType | null>(null);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1">{children}</div>
);

const Header = ({ children }: { children: React.ReactNode }) => {
  const { test } = useContext(CardContext) || {};
  return (
    <div className="p-1">
      {children}
      {test && <span>{test}</span>}
    </div>
  );
};

const Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1">{children}</div>
);

type CardComponent = React.FC<CardProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

const Card: CardComponent = ({ children, test }) => (
  <CardContext.Provider value={{ test }}>
    <div className="border-2 border-gray-300 rounded-lg shadow-md">
      {children}
    </div>
  </CardContext.Provider>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
