"use client";

import { useEffect } from "react";

export function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      const existingLink = document.querySelector(
        'link[href*="fonts.googleapis.com/css2?family=Inter"]'
      );
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return null;
}

