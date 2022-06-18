"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
var react_1 = require("react");
var useIntersectionObserver = function (_a) {
    var options = _a.options, target = _a.target;
    var _b = (0, react_1.useState)(), entries = _b[0], setEntries = _b[1];
    var observer = typeof window !== 'undefined'
        ? new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) { return setEntries(entry); });
        }, options)
        : false;
    (0, react_1.useEffect)(function currentElWatch() {
        if (typeof window !== 'undefined') {
            var targetCurrent_1 = target.current;
            if (targetCurrent_1 && observer !== false) {
                observer === null || observer === void 0 ? void 0 : observer.observe(targetCurrent_1);
            }
            return function () {
                if (targetCurrent_1 && observer !== false)
                    observer === null || observer === void 0 ? void 0 : observer.unobserve(targetCurrent_1);
            };
        }
        return;
    }, []);
    return entries;
};
exports.useIntersectionObserver = useIntersectionObserver;
