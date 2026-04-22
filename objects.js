export class Scents {
  #name;
  #strength;

  constructor(name, strength) {
    this.#name = name; 
    this.#strength = strength; 
  }

  get name() {
    return this.#name;
  }

  get strength() {
    return this.#strength;
  }
}

export class Colognes {
  #name; 
  #price; 
  #imageURL; 
  #scents = []; 
  #male;

  constructor(name, price, imageURL, isMale) {
    this.#name = name;
    this.#price = price;
    this.#imageURL = imageURL;
    this.#male = isMale;
  }

  addScents(scent, strength) {
    const s = new Scents(scent, strength);
    this.#scents.push(s);

    for (let i = 0; i < this.#scents.length; i++) {
      let strongestIndex = i;

      for (let j = i + 1; j < this.#scents.length; j++) {
        if (this.#scents[j].strength > this.#scents[strongestIndex].strength) {
          strongestIndex = j;
        }
      }

      let temp = this.#scents[i];
      this.#scents[i] = this.#scents[strongestIndex];
      this.#scents[strongestIndex] = temp;
    }
  }

  get price() {
    return this.#price;
  }

  get name() {
    return this.#name;
  }

  get URL() {
    return this.#imageURL;
  }

  get scents() {
    return this.#scents;
  }

  get gender() {
    return this.#male;
  }
}

const c1 = new Colognes(
  "Hawas for him",
  35,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.46890.avif",
  true,
);
c1.addScents("Fruity", 45); 
c1.addScents("Citrus", 42);
c1.addScents("Aquatic", 34);
c1.addScents("Fresh", 30);

const c2 = new Colognes(
  "Club de nuit",
  65,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.34696.avif",
  true,
);
c2.addScents("Fruity", 30);
c2.addScents("Citrus", 45);
c2.addScents("Leather", 28);
c2.addScents("Smoky", 25);

const c3 = new Colognes(
  "La Male Elixir",
  120,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.81642.avif",
  true,
);
c3.addScents("Vanilla", 48);
c3.addScents("Sweet", 37);
c3.addScents("Honey", 33);
c3.addScents("Aromatic", 30);

const c4 = new Colognes(
  "Black Opium",
  140,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.25324.avif",
  false,
);
c4.addScents("Vanilla", 45);
c4.addScents("Sweet", 40);
c4.addScents("Coffee", 38);
c4.addScents("White Floral", 35);

const c5 = new Colognes(
  "Liquid Brun",
  40,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.94713.avif",
  true,
);
c5.addScents("Sweet", 45);
c5.addScents("Warm Spicy", 43);
c5.addScents("Vanilla", 41);
c5.addScents("Cinnamon", 32);

const c6 = new Colognes(
  "Emporio Armani Stronger With You Intensely",
  105,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.52802.avif",
  true,
);
c6.addScents("Sweet", 42);
c6.addScents("Amber", 33);
c6.addScents("Vanilla", 46);
c6.addScents("Cinnamon", 31);

const c7 = new Colognes(
  "Imagination",
  350,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.67370.avif",
  true,
);
c7.addScents("Citrus", 48);
c7.addScents("Fresh Spicy", 25);
c7.addScents("Fresh", 22);
c7.addScents("Green", 20);

const c8 = new Colognes(
  "Valentino Uomo Born In Roma Intense",
  135,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.78740.avif",
  true,
);
c8.addScents("Lavender", 48);
c8.addScents("Vanilla", 47);
c8.addScents("Aromatic", 38);
c8.addScents("Woody", 25);

const c9 = new Colognes(
  "Eclaire",
  50,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.93628.avif",
  false,
);
c9.addScents("Sweet", 47);
c9.addScents("Vanilla", 35);
c9.addScents("Caramel", 32);
c9.addScents("Lactonic", 30);

const c10 = new Colognes(
  "Hypnotic Poison",
  100,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.219.avif",
  false,
);
c10.addScents("Sweet", 42);
c10.addScents("Vanilla", 46);
c10.addScents("Almond", 42);
c10.addScents("Fruity", 37);

const c11 = new Colognes(
  "Devotion",
  60,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.84951.avif",
  false,
);
c11.addScents("Sweet", 41);
c11.addScents("Vanilla", 45);
c11.addScents("White Floral", 34);
c11.addScents("Lactonic", 24);

const c12 = new Colognes(
  "Yara",
  30,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.76880.avif",
  false,
);
c12.addScents("Sweet", 48);
c12.addScents("Vanilla", 47);
c12.addScents("Powdery", 46);
c12.addScents("Tropical", 32);

const c13 = new Colognes(
  "Valentino Donna Born In Roma",
  110,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.55805.avif",
  false,
);
c13.addScents("Woody", 45);
c13.addScents("Vanilla", 43);
c13.addScents("Fruity", 40);
c13.addScents("White Floral", 38);

const c14 = new Colognes(
  "Light Blue",
  80,
  "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.485.avif",
  false,
);
c14.addScents("Citrus", 45);
c14.addScents("Woody", 35);
c14.addScents("Fruity", 30);
c14.addScents("Fresh", 31);

export const aC = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
