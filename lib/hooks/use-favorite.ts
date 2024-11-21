"use client";

import { useCallback, useState } from "react";

export function useFavorite() {
  const [isFavorite, setFavorite] = useState<boolean | null>(null);

  const addFavorite = useCallback(() => {
    setFavorite(true);
  }, []);

  const removeFavorite = useCallback(() => {
    setFavorite(false);
  }, []);

  return {
    isFavorite,
    removeFavorite,
    addFavorite,
  };
}
