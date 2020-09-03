type CusConstructorParameters<T extends new (...arg: any[]) => any> = T extends new (...arg: infer P) => any ? P : never;
type CusInstanceType<T extends new (...arg: any[]) => any> = T extends new (...arg: any[]) => infer P ? P : never;

class TestClass {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

type ElementOf<T> = T extends Array<infer E> ? E : never;

type Params = CusConstructorParameters<typeof TestClass>
type ElementOfTest = ElementOf<Params>
type Instance = CusInstanceType<typeof TestClass>

type CusExtract<T, P> = T extends P ? T : never;
type CusExtractTest = CusExtract<'a'|'b'|'c', 'b'|'a'>
// T1 | T2 => T1 & T2 函数产生逆变
type UnionToIntersection<U> = (U extends any ? (k: U) => void: never) extends (i: infer I) => void? I : never;
type UnionToIntersectionTest = UnionToIntersection<Params | Instance>