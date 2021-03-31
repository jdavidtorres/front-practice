import { Question } from "./question";
import { Subject } from "./subject";

export class Exam {

  id: number;
  name: string;
  createAt: string;
  questionsList: Question[] = [];
  subject: Subject;
  answered: boolean;
}
