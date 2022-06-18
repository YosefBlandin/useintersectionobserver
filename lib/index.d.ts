import { MutableRefObject } from 'react';
interface iUseIntersectionObserverParams {
    options: {
        root: HTMLElement | null;
        rootMargin: string;
        threshold: number;
    };
    target: MutableRefObject<null>;
}
interface Bounds {
    readonly height: number;
    readonly width: number;
    readonly top: number;
    readonly left: number;
    readonly right: number;
    readonly bottom: number;
}
interface IntersectionObserverEntry {
    readonly time: number;
    readonly rootBounds: Bounds;
    readonly boundingClientRect: Bounds;
    readonly intersectionRect: Bounds;
    readonly intersectionRatio: number;
    readonly target: Element;
    readonly isIntersecting: boolean;
    readonly isVisible: boolean;
}
export declare const useIntersectionObserver: ({ options, target }: iUseIntersectionObserverParams) => IntersectionObserverEntry | {
    isIntersecting: boolean;
} | undefined;
export {};
