/*
  다형성 : 제네릭을 활용하여 다른 모양의 코드를 가질수 있게 함
  제네릭 : placeholder 타입을 사용하는 것
*/

// 브라우저에서 쓰는 로컬 스토리지 API와 비슷한 API를 갖는 클래스 만들기
// Storage는 이미 정의되어있기 때문에 구분하기 위해 SStorage로 정의
interface SStorage <T> {
  // key가 제한되지 않은 object를 정의하게 함
  [key: string]: T
}

// Generic
class LocalStorage <T> {
  private storage: SStorage<T> = {}
  // 메소드 생성
  set(key: string, value: T) { 
    this.storage[key] = value;
  }
  remove(key: string) { 
    delete this.storage[key]
  }
  get(key: string): T { 
    return this.storage[key]
  }
  clear() {
    this.storage = {}
  }
}

const stringsStorage = new LocalStorage<string>()

stringsStorage.get("key")
stringsStorage.set("hello", "how are you?")

const booleanStorage = new LocalStorage<boolean>()

booleanStorage.get("xxx")
booleanStorage.set("hello", true)