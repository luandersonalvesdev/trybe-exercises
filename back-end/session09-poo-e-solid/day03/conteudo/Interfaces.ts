interface Connectable {
  connect(): void;
};

interface Disconnectable {
  disconnect(): void;
}

class Mysql implements Connectable, Disconnectable {
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }
}