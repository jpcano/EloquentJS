specialForms["set"] = function (args, env) {
    if (args.length != 2 || args[0].type != "word")
        throw new SyntaxError("Bad use of define");
    var value = evaluate(args[1], env);
    var found = false;
    while (Object.getPrototypeOf(env) != null && found == false) {
        env = Object.getPrototypeOf(env);
        found = Object.prototype.hasOwnProperty.call(env, args[0].name);
    }
    if (Object.getPrototypeOf(env) == null)
        throw new ReferenceError("Variable not defined");
    env[args[0].name] = value;
    return value;
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError