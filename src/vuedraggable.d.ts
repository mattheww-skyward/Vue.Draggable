  import { DefineComponent, ComponentPublicInstance } from 'vue';

  export type DraggedContext<T> = {
    index: number;
    futureIndex: number;
    element: T;
  };

  export type DropContext<T> = {
    index: number;
    component: ComponentPublicInstance<any, any, any, any, any>;
    element: T;
  };

  export type Rectangle = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
  };

  export type MoveEvent<T> = {
    originalEvent: DragEvent;
    dragged: Element;
    draggedContext: DraggedContext<T>;
    draggedRect: Rectangle;
    related: Element;
    relatedContext: DropContext<T>;
    relatedRect: Rectangle;
    from: Element;
    to: Element;
    willInsertAfter: boolean;
    isTrusted: boolean;
  };

  declare const draggable: DefineComponent<
    {
      options: any,
      list: any[],
      value: any[],
      noTransitionOnDrag?: boolean,
      clone: any,
      tag?: string | null,
      move: any,
      componentData: any,
    },
    {},
    {},
    {},
    {}
  >;

  export default draggable;
