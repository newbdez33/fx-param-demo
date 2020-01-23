/** TodoMVC model definitions **/

export interface TodoModel {
  id: number;
  gid: number;
  lot: number;
  price: number;
  completed: boolean;
}

export namespace TodoModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
