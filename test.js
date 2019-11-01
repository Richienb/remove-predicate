import test from "ava"
import removePredicate from "."

test("main", (t) => {
    t.deepEqual(removePredicate({
        a: {
            _a: "a",
            b: 1,
        },
        _b: ["b"],
    }, (_value, key) => key.startsWith("_")), { a: { b: 1 } })
})
