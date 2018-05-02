interface InitData {
  count: number;
  previous?: any;
  results: Result[];
  next: string;
}

interface Result {
  url: string;
  name: string;
}