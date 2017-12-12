import { ObjectOmit } from 'typelevel-ts';
import * as React from 'react';

declare module 'mobx-react' {
  export function inject<D>(
    mapStoreToProps: (store: any) => D
  ): <A extends D>(component: React.ComponentType<A>) => React.SFC<ObjectOmit<A, keyof D> & Partial<D>>;
}
