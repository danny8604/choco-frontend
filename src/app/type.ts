export interface ProductsType {
  id: string;
  descript: string;
  price: number;
  series: number;
  path: string;
  img: { imgA: string; imgB: string; imgC: string; imgD: string; imgE: string };
  category: string;
  designer: string;
}

export interface ShoppingCartItem {
  id: string;
  img: string;
  price: number;
  quantity: number;
}

export interface ShoppingCart {
  shoppingCart: ShoppingCartItem[];
}

export interface ItemQuantity {
  id: string;
  quantity: number;
}

export interface userInfor {
  userId: {
    shoppingCart: ShoppingCartItem[];
  };
}
