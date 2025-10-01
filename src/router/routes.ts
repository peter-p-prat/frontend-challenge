import {DefaultRoutes} from "./type";

type Routes = Record<string, DefaultRoutes | string>;

export const ROUTES = {
    base: "/",
    iris: "/iris",
    chat: "/chat",
    insights: "/insights",
    explore: "/explore",
} as const satisfies Routes;

export const REDIRECT_ROUTES = [
    {
        from: "*",
        to: ROUTES.iris,
    },
];
