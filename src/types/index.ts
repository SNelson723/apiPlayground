// The dragable widget types and interfaces for the application
export type iWidget = {
  size?: number;
  onClick: (widgetName: string) => void;
  className?: string;
  component: string;
  isActive?: boolean;
};

// The interface for the widget container
export interface IBody {
  _uid: string;
  component: string;
  height: number;
  width: number;
  title?: string;
  name?: string;
}
