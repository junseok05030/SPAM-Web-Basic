// 놀이공원 가려는데 이번 달이 8월이여서 8살 친구들은 선물을 받습니다.
//5살 친구들 또한 선물을 받습니다.
//이 두 나이를 제외한 나머지 사람들은 볼펜을 받습니다.

const age = 5

switch  (age){
    default:
        console.log("볼펜볼펜");
        break;
    case  5 && 8 :
        console.log("선물");
        break;
    }