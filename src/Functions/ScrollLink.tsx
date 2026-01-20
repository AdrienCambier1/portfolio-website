import React, { useEffect, useCallback } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

type ScrollLinkProps = LinkProps & {
  id: string;
  top?: number;
  onClick?: () => void;
};

export default function ScrollLink({
  to,
  id,
  onClick,
  top = 0,
  children,
  ...props
}: ScrollLinkProps) {
  const location = useLocation();

  const scrollToTarget = useCallback(
    (targetId: string) => {
      const element = document.getElementById(targetId);
      if (!element) return;

      const offset = element.getBoundingClientRect().top + window.scrollY - top;
      window.scrollTo({ top: offset, behavior: "smooth" });
    },
    [top],
  );

  const handleClick = () => {
    localStorage.setItem("scrollToId", id);

    if (location.pathname === to) {
      scrollToTarget(id);
      localStorage.removeItem("scrollToId");
    }

    onClick && onClick();
  };

  useEffect(() => {
    const savedId = localStorage.getItem("scrollToId");
    if (savedId && location.pathname === to) {
      scrollToTarget(savedId);
      localStorage.removeItem("scrollToId");
    }
  }, [location.pathname, to, scrollToTarget]);

  return (
    <Link to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
