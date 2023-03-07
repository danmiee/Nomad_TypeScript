// interface 사용하여 object 형태 알림
// 이 외 기능 없음
// 문법이 class와 유사함
interface iUser {
	name:string
}
// type은 할 수 없는 property 축적
// 따로 만든 인터페이스를 타입스크립트가 알아서 합쳐줌
interface iUser {
	lastName: string
}
interface iUser {
	health : number
}

interface iPlayer extends iUser {

}

const nico: iPlayer = {
	name: "nco",
	lastName: "n",
	health:10
}

// type 사용하여 object 형태 알림
// type은 이 외 많은 기능을 함
type tUser = {
	name:string
}

type tPlayer = tUser & {

}

const lynn: tPlayer = {
	name: "lynn"
}