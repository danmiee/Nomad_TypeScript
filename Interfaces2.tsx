// // 추상클래스 생성 - 추상클래스는 인스턴스 생성 불가
// abstract class User {
// 	constructor(
// 		protected firstName: string,
// 		protected lastName : string
// 	) { }
// 	// 추상메소드 생성 - 상속받는 모두가 반드시 구현해야함
// 	abstract sayHi(name: string): string
// 	abstract fullName(): string
// }
// class Player extends User {
// 	fullName(){
// 		return `${this.firstName} ${this.lastName}`
// 	}
// 	sayHi(name) {
// 		return `Hello, ${name}. My name is ${this.fullName}`
// 	}
// }

/* 추상클래스를 인터페이스로 바꾸기
	- JS로 컴파일했을 때 불필요한 내용은 사라지도록 */
interface User {
	firstName: string,
	lastName: string,
	sayHi(name: string): string
	fullName():string
}

class Player implements User {
	constructor(
		public firstName: string,
		public lastName:string
	) { }
	fullName(){
	return `${this.firstName} ${this.lastName}`
	}
	sayHi(name:string) {
		return `Hello, ${name}. My name is ${this.fullName}`
	}
}

function makeUser(user: User):User {
	// return 타입으로 User 인터페이스를 지정했기에 new User 미사용
	return {
		firstName: "nico",
		lastName: "las",
		fullName: () => "xx",
		sayHi: (name) => `hello, ${name}`
	}
}

makeUser({
	firstName: "nico",
	lastName: "las",
	fullName: () => "xx",
	sayHi: (name) => `hello, ${name}`
});