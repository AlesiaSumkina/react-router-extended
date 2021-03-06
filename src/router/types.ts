import { ElementType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type RouterPath = string | string[] | undefined;

export interface ExtendedRouterProps extends Partial<RouteComponentProps> {
  path: RouterPath;
  component: ElementType;
  redirectUrl?: string;
  guards?: Guard[];
  resolvers?: PropsResolvers;
  childs?: ExtendedRouterProps[];
  redirectToChild?: string;
  exact?: boolean;
}

export enum ExtentedRouterStatus {
  INITIAL,
  SUCCESS,
  FAIL,
}
export interface PropsResolvers {
  [index: string]: Resolver;
}
export interface Guard {
  canActivate(): Promise<boolean> | boolean;
  redirectUrl?: string;
}
export interface Resolver {
  resolve(): Promise<void> | void;
}

export type Props = RouteComponentProps & ExtendedRouterProps;
export interface ParentComponentWithChildRoutes {
  childRoutes: JSX.Element[];
}
