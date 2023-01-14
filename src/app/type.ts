export interface ProductsType {
  productName: string;
  descript: string;
  price: number;
  series: number;
  path: string;
  img: { imgA: string; imgB: string; imgC: string; imgD: string; imgE: string };
  category: string;
  designer: string;
  _id: string;
}

export interface ShoppingCartItem {
  productId: {
    productName: string;
    img: {
      imgA: string;
      imgB: string;
      imgC: string;
      imgD: string;
      imgE: string;
    };
    price: number;
    path: string;
    _id: string;
  };
  quantity: number;
}

export interface ShoppingCart {
  shoppingCart: ShoppingCartItem[];
}

export interface ItemQuantity {
  _id: string;
  productName: string;
  quantity: number;
}

export interface userInfor {
  userId: {
    shoppingCart: ShoppingCartItem[];
  };
}
