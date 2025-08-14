import { createContext, useContext, useEffect, useState } from 'react';

const WISHLIST_KEY = 'wishlist';

interface WishlistContextType {
  wishlist: number[];
  isInWishlist: (id: number) => boolean;
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const isInWishlist = (id: number) => wishlist.includes(id);

  const addToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, isInWishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
