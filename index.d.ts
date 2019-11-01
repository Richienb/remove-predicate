type predicateFn = (value: any, key: any) => any

/**
 * Remove items from an object based on a predicate.
 * @param obj The object or array to handle.
 * @param predicate The predicate to compare the items to.
 * @example
 * ```
 * const removePredicate = require("remove-predicate");
 *
 * removePredicate({
 *     a: {
 *         _a: "a",
 *         b: 1,
 *     },
 *     _b: ["b"],
 * }, (_value, key) => key.startsWith("_"))
 * //=> { a: { b: 1 } }
 * ```
*/
declare function removePredicate<T extends object | any[]>(obj: T, predicate?: predicateFn): T;
declare function removePredicate<T>(obj: T, predicate?: predicateFn): T;

export = removePredicate;
