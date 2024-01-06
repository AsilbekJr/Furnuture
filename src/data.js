import gray_chair from "./assets/image/gray_chair.png";
import gray_chair2 from "./assets/image/gray-chair2.png";
import bedroom from "./assets/image/bedroom.png";
import lamp2 from "./assets/image/lamp2.png";
import bathroomCabin from "./assets/image/bathroomCabin.png";

export const newFurnuture = [
  {
    id: crypto.randomUUID(),
    name: "Zamonaviy kulrang stul",
    price: "300 000",
    desc: "Dam olish uchun qulay",
    img: gray_chair,
  },
  {
    id: crypto.randomUUID(),
    name: "Zamonaviy to'shak",
    price: "800 000",
    desc: "Dam olish uchun qulay",
    img: bedroom,
  },
  {
    id: crypto.randomUUID(),
    name: "Eski yog'och kreslo",
    price: "1 300 000",
    desc: "Dam olish uchun qulay",
    img: gray_chair2,
  },
  {
    id: crypto.randomUUID(),
    name: "Uy chirog'i",
    price: "270 000",
    desc: "Uyni yoritish uchun",
    img: lamp2,
  },
  {
    id: crypto.randomUUID(),
    name: "Taiwan Hammom Shikafi",
    price: "300 000",
    desc: "Hammomlar uchun",
    img: bathroomCabin,
  },
];
