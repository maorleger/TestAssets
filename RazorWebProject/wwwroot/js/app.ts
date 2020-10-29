class Test {
    a: number;
    b: string;

    constructor(a: number, b: string) {
        this.a = a;
        this.b = b;
    }

    Nav() {
        return this.a;
    }
}

let test = new Test(42, "foo");
test.Nav();