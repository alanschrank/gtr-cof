import type { Msg } from "../message";
import type { Model } from "../model";
import type { Update as UpdateModel } from "../types";

export const Update: UpdateModel<Model, Extract<Msg, { id: "Theme" }>> = (model, _msg) => {
    switch (model.state.theme) {
        case "dark":
            model.state.theme = "light";
            break;
        case "light":
            model.state.theme = "dark";
            break;
        default: {
            const _exhaustivenessCheck: never = model.state.theme;
        }
    }
    return model;
};
