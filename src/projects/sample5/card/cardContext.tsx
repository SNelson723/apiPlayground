import {
  createContext,
  useContext,
  type ReactNode,
  type FC,
  type HTMLAttributes,
} from "react";

// Define the props for the main Card component and its children. The subHeader string is optional, but can expand if needed
type CardProps = {
  children: ReactNode;
  subHeader?: string;
};

// CardChildrenProps extends HTMLAttributes to allow passing any valid HTML attributes to the children components
type CardChildrenProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

// CardContextType defines the type of the context value, which can be expanded if needed
// It is then used in CardContext that creates the React context to share the subHeader string with the children components
type CardContextType = {
  subHeader?: string;
};
const CardContext = createContext<CardContextType | null>(null);

// Body receives children as props and renders them inside a div with padding
const Body = ({ children }: CardChildrenProps) => (
  <div className="p-1 w-full h-full border-y-2">{children}</div>
);

// Header does the same as Body, but also consumes the context to display the subHeader string if it exists
const Header = ({ children }: CardChildrenProps) => {
  const { subHeader } = useContext(CardContext) || {};
  return (
    <div className="p-1 w-full h-full">
      {children}
      {subHeader && <p className="text-center">{subHeader}</p>}
    </div>
  );
};

// Footer does the same as Body
const Footer = ({ children }: CardChildrenProps) => (
  <div className="p-1 w-full h-full">{children}</div>
);

// This type extends the React functional component type for Card to also include static props for the subcomponents
// This allows us to use Card.Header, Card.Body, and Card.Footer as static properties of the Card component
type CardComponent = FC<CardProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

// This Card component is the main component that uses the CardContext to provide the subHeader string to its children
// It also glues all the pieces together by defining the static properties for the subcomponents
const Card: CardComponent = ({ children, subHeader }) => (
  // CardContext.Provider is used to provide the subHeader string and any other added context values to the children components
  <CardContext.Provider value={{ subHeader }}>
    <div className="border-2 border-gray-300 bg-slate-100 text-stone-950 rounded-lg shadow-md w-full h-full p-2">
      {children}
    </div>
  </CardContext.Provider>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
