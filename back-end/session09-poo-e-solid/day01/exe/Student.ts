class Student {
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(private _enrollment: string, private _name: string) {}

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome tem que ser maior que 3 caracteres');
    }
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('Só pode até 4 notas');
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('Só pode 2 notas de trabalho');
    }
    this._assignmentsGrades = value;
  }

  sumGrades() :number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((acc, curr) => acc + curr, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades/divider);
  }
}