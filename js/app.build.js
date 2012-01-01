({
    appDir:     "../",
    baseUrl:    "js",
    dir:        "../../release-litmark",
    optimize:   "none",
    inlineText: "true",
    paths:      {
        jquery:     "empty:",
        underscore: "libs/underscore-min",
        backbone:   "libs/backbone-optamd3-min",
        text:       "libs/require-text.min",
        order:      "libs/require-order.min"
    },
    modules:    [
        {
            name:    "main",
            exclude: ["jquery"]
        }
    ]})