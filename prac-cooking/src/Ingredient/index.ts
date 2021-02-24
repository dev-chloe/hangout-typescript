interface Ingredient {
  readonly name: string,
  readonly volume: number

  info(): void;
}

class CuttableIngredient implements Ingredient {

  // readonly name: string;
  // readonly volume: number;
  // 다듬어진 상태
  private isCutted: boolean;

  constructor(
    public name: string,
    public volume: number
  ) {
    // 입력받은 이름과 양으로 재료를 생성한다
    // this.name = name;
    // this.volume = volume;
    // 생성된 재료는 다듬어 지지 않은 상태이다
    this.isCutted = false;
  }

  public info(): void {
    console.log(`> ${this.isCutted ? '잘린 ' : ""}'${this.name}'는(은) '${this.volume}' 만큼 있습니다.`)
  }
}

export default Ingredient;

export { CuttableIngredient };