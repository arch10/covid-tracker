const levels = {
    ERROR: 4,
    WARN: 3,
    INFO: 2,
    DEBUG: 1,
    TRACE: 0
};

// default level
let level = levels.TRACE;

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    level = levels.INFO;
}

export default {
    levels: levels,

    setLevel: (val) => {
        console.log("log level set to ", val);
        level = val;
    },

    trace: (...args) => {
        if (level <= 0) console.log("TRACE:", ...args);
    },

    debug: (...args) => {
        if (level <= 1) console.log("DEBUG:", ...args);
    },

    info: (...args) => {
        if (level <= 2) console.log("INFO:", ...args);
    },

    warn: (...args) => {
        if (level <= 3) console.warn("WARN:", ...args);
    },

    error: (...args) => {
        if (level <= 4) console.error("ERROR:", ...args);
    }
};
