export type FeildsState = {
  email: string;
  password: string;
};

export interface InputElementValue extends EventTarget {
  name: string;
  value: string;
}
