import Ingredient, { CuttableIngredient } from './Ingredient'

// Step.1 재료 선택한다
const ingredients: Array<Ingredient> = new Array<Ingredient>();

// 자를수 있는 재료 - 양파, 당근, 감자, 돼지고기
const unCuttedOnion: Ingredient = new CuttableIngredient('양파', 1);
const unCuttedCarrot: Ingredient = new CuttableIngredient('당근', 2);
const unCuttedPotato: Ingredient = new CuttableIngredient('감자', 1.5);
const unCuttedPork: Ingredient = new CuttableIngredient('제주흑돼지 앞다리살', 1200);

// 재료를 담는다
ingredients.push(unCuttedOnion);
ingredients.push(unCuttedCarrot);
ingredients.push(unCuttedPotato);
ingredients.push(unCuttedPork);

// TODO | 자를수 없는 재료 - 카레가루, 물

// TODO | 재료를 담는다

// interface에 readonly로 설정해놔야 당근이 썩지 않아요
// 컴파일 에러 발생
// unCuttedCarrot.name = '썩은 당근 ㅋㅋㅋ'; 


// Step.1 결과물
// 잘리는 재료(need to cut with knife) - 양파, 당근, 감자, 돼지고기
// 안 잘리는 재료(not need to cut with knife) - 물, 카레가루
for (let i of ingredients) i.info();
// for (let i = 0; i < ingredients.length; i++) ingredients[i].info();
// for (let i in ingredients) ingredients[i].info();


// TODO | Step.2 다듬는다
// TODO | 칼로 다듬는다
// TODO | 다듬은 재료 냄비에 담는다
// TODO | const cuttedIgredient = knife.cut(ingredient);
// TODO | pod.add(cuttedIgredient);


// TODO | Step.3 조리한다
// TODO | 인덕션에 냄비를 올리고 가열한다
// TODO | 국자로 저어가며 냄비를 끓인다
// TODO | const appleJam: Jam = pod.add(apple).heat();

// TODO | 완성!
