export class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor(id: string, name: string, price: number, emoji: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.emoji = emoji;
  }

  printOption():string{
      return `${this.name}.... ${this.price}`;
  }
}
