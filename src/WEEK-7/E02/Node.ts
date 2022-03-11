export class Node<T> {
    private data: T;
    public next:Node<T> | null = null;

    constructor(data:T){
        this.data = data;
    }

    get getData(){
        return this.data;
    }
}