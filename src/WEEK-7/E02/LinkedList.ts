import { Node } from './Node';

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  // First In First Out (FIFO)
  public add(value: T): void {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }

  // Last In First Out (LIFO)
  public addFirst(value: T) {
    if (this.head === null) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  public removeLast(): void {
    if (this.head !== null) {
      let node = this.head;
      let previous: Node<T> = node;
      while (node.next !== null) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
      this.length--;
    }
  }

  public toString(): string {
    if (this.head === null) return '[]';
    let representation = '';
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.getData)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.getData)}`;
    representation = `[${representation}]`;
    return representation;
  }
}