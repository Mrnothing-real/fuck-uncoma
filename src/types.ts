export type Subject = {
  name: string;
  year: number;
  term: string;
  correlatives: number[];
};

export type Elective = {
  name: string;
  correlatives: number[];
}

export type CareerDB = Subject[];
