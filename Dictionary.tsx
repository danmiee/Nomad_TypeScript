// type 생성
type Words = {
    // type만 알고 있을 때 [key:type] 사용
    [key:string]: string
}

class Dict {
    // property 생성, 선언
    private words:Words
    constructor() {
        // property 초기화
        this.words = {}
    }
    // 클래스를 타입처럼 사용
    add(word:Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
    // static은 JS에도 있음
    static hello() {
        return "hello"
    }
}

class Word {
    constructor(
        // public term: string,
        // public def: string
        
        // 다른 사람이 보기는 하되, 수정할 수 없게 읽기전용 처리
        public readonly term: string,
        public readonly def: string
    ) { }
}

const kimchi = new Word("kimchi", "한국음식")

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")

Dict.hello();