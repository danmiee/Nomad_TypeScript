/* type과 interface의 차이점
  INTERFACE
    - 추상클래스와 비슷한 기능 : 원하는 메소드와 property를 클래스가 갖도록 강제
    - 차이점 : JS로 컴파일되지 않아 깔끔함(추상 클래스는 일반 클래스가 됨)
  TYPE
    - interface와 같은 기능 : object의 모양 설명
    - alias 생성
    - 타입을 특정 값으로 만들기
*/

// object의 모양을 보여주고 있으나 사용할 수 있는 기능과 문법은 다름
type PlayerA = {
  name:string
}
const playerA: PlayerA = {
  name:"nico"
}
// type 상속 : 이름 중복사용 불가, 부모타입 뒤 & 필수
type PlayerAA = PlayerA & {
  lastName: string
}
const playerAA: PlayerAA = {
  name: "nico",
  lastName: "xxx"
}
//////
interface PlayerB {
  name:string
}
const playerB: PlayerB = {
  name: "nico"
}
// interface 상속
interface PlayerBB extends PlayerB {
  lastName: string
}
// interface 이름 중복 사용 가능 > 하나로 합침
interface PlayerBB {
  health: number
}
const playerBB: PlayerBB = {
  name: "nico",
  lastName: "xxx",
  health: 1
}

// interface와 type 모두 abstract class 대체 가능
type PlayerC = {
  firstName: string
}
interface PlayerD {
  firstName: string
}
class User implements PlayerD {
  constructor(
    public firstName: string
  ){}
}

/*
  class나 object 모양을 정의할 때는 interface
  다른 모든 경우에서는 type 사용
*/

