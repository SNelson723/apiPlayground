import { iWidget } from "../types";

const WidgetIcon = ({
  size = 24,
  onClick,
  className = "",
  component,
  isActive,
}: iWidget) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      version="1.1"
      viewBox="0 0 512 512"
      onClick={() => onClick(component)}
      className={`${className} ${
        isActive ? "fill-blue-500" : ""
      } cursor-grab fill-none stroke-blue-500 hover:fill-blue-500/25 transtion-all duration-300`}
      fill="none"
      style={{
        strokeWidth: 30,
      }}
    >
      <g>
        <g id="Layer_1">
          <g id="Layer_1-2" data-name="Layer_1">
            <circle cx="256" cy="256" r="230.1" />
            <line x1="109.6" y1="362.1" x2="178.4" y2="248.5" />
            <line x1="178.4" y1="248.5" x2="272.5" y2="279.7" />
            <line x1="273.5" y1="278.5" x2="323.5" y2="191.8" />
            <polygon points="359.1 115.9 288.7 166.3 367.5 202.1 359.1 115.9" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default WidgetIcon;
