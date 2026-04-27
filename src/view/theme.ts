import type { Msg } from "../message";
import type { Model } from "../model";
import type { Theme, View } from "../types";
import type { RenderNode } from "../ui";

const THEME_BTN_ID = "theme-btn";
const THEME_ICON_ID = "theme-icon";

export const create = (): View<Model, Msg, RenderNode> => {
    let uninitialised = true;
    return ({ state }: Model, raise: (msg: Msg) => void): RenderNode[] => {
        const icon = document.getElementById(THEME_ICON_ID);
        if (icon) {
            icon.setAttribute(
                "href",
                (() => {
                    switch (state.theme) {
                        case "light":
                            setTheme(state.theme);
                            return "#icon-theme-light";
                        case "dark":
                            setTheme(state.theme);
                            return "#icon-theme-dark";
                        default: {
                            const _exhaustiveCheck: never = state.theme;
                            return _exhaustiveCheck;
                        }
                    }
                })(),
            );
        }
        if (uninitialised) {
            const btn = document.getElementById(THEME_BTN_ID);
            if (btn) {
                btn.addEventListener("click", () => raise({ id: "Theme", theme: state.theme }));
            }
            uninitialised = false;
        }
        return [];
    };
};

function setTheme(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme);
}
