export type DressingFormType =
  | 'mode'
  | 'category'
  | 'sub-category'
  | 'brand'
  | 'state'
  | 'size'
  | 'colors'
  | 'image-ex';

export type formConfigType = {
  type: 'mode' | 'category' | 'sub-category' | 'brand' | 'state' | 'size' | 'colors' | 'image-ex';
  placeholder: string;
  add_button: string;
  counter: string;
  name: string;
};
