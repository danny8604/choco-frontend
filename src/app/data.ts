import { loginFormData } from "../components/login/loginForm/LoginFormSlice";

// DetailsList Data
export const messageData = [
  {
    title: "PRODUCT DETAILS",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.",
  },
  {
    title: "DIMENSIONS",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.",
  },
  {
    title: "GENERAL",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.",
  },
  {
    title: "DESIGNER",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore il.",
  },
  {
    title: "DOWNLOADS",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.",
  },
  {
    title: "CARE AND MAINTENANCE",
    descriptTitle: "LOREM",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas earum inventore illum recusandae tenetur voluptatibus similique, tempore reiciendis autem at eligendi eveniet quos ipsam deleniti vero reprehenderit atque ipsa.",
  },
];

export const initinalShoppingCart = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart") || "")
  : [];

export const initinalAuth = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth") || "")
  : [];

console.log(initinalAuth, "test initinalAuth");
