import React, { useEffect } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

type ScrollLinkProps = LinkProps & {
  id: string;
  top?: number;
  onClick?: () => void;
};

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  id,
  onClick,
  top = 0,
  children,
  ...props
}) => {
  const location = useLocation();

  const handleClick = () => {
    localStorage.setItem("scrollToId", id);
    onClick && onClick();
  };

  useEffect(() => {
    const savedId = localStorage.getItem("scrollToId");
    if (savedId && location.pathname === to) {
      const element = document.getElementById(savedId);
      if (element) {
        const offset =
          element.getBoundingClientRect().top + window.scrollY - top;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      localStorage.removeItem("scrollToId");
    }
  }, [location]);

  return (
    <Link to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
