export interface ProductsType {
  productName: string;
  price: number;
  series: string;
  path: string;
  img: { imgA: string; imgB: string; imgC: string; imgD: string; imgE: string };
  descript: string;
  category: string;
  designer: string;
  _id: string;
}

export interface FavoriteItemType {
  productId: {
    productName: string;
    price: number;
    series: string;
    path: string;
    img: {
      imgA: string;
      imgB: string;
      imgC: string;
      imgD: string;
      imgE: string;
    };
    descript: string;
    category: string;
    designer: string;
    _id: string;
  };
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
    series: string;
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

export interface Order {
  _id: string;
  products: ShoppingCartItem[];
  totalQuantity: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
export interface Orders {
  orders: [
    {
      _id: string;
      products: ShoppingCartItem[];
      totalQuantity: number;
      totalPrice: number;
      createdAt: string;
      updatedAt: string;
    }
  ];
}

export interface FavoriteItem {
  productId: string;
}

export interface ChairDataProps {
  chairData: ProductsType;
}

export interface FormInputs {
  id: number;
  errorMessage: string;
  input: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    pattern?: string;
  };
}
