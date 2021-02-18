import Ingredient, { CuttableIngredient } from './Ingredient'

// 재료 선택한다
// 양파, 당근, 감자, 물, 카레가루, 돼지고기
const unCuttedOnion: Ingredient = new CuttableIngredient('양파', 1);
const unCuttedCarrot: Ingredient = new CuttableIngredient('당근', 2);
const unCuttedPotato: Ingredient = new CuttableIngredient('감자', 1.5);
const unCuttedPork: Ingredient = new CuttableIngredient('제주흑돼지 앞다리살', 1200);

unCuttedOnion.info();
unCuttedCarrot.info();
unCuttedPotato.info();
unCuttedPork.info();

// [[ FIXME!! ]] readonly로 값 변조를 막기!
unCuttedCarrot.name = '썩은 당근 ㅋㅋㅋ';
unCuttedCarrot.info();

// 잘리는 재료(need to cut with knife) - 양파, 당근, 감자, 돼지고기
// 안 잘리는 재료(not need to cut with knife) - 물, 카레가루

// 다듬는다
  // 칼로 다듬는다
  // 다듬은 재료 냄비에 담는다
// const cuttedIgredient = knife.cut(ingredient);
// pod.add(cuttedIgredient);


// 조리한다
  // 인덕션에서 국자로 저어가며 냄비를 끓인다



// const appleJam: Jam = pod.add(apple).heat();