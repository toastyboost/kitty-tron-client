export type Operation = {
  id: string;
  name: string; // Наименование технологической операции
  activity: string; // Вид работы
  scope: string; // Разряд
  executionTime: string; // Норма времени на выполнение
  equipment: string; // Оборудование
  queue: string; // Порядок исполнения
  type: 'head' | 'row' | 'category'
}

export type Accordance = {
  input: string;
  output: string;
}