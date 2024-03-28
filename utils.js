function format(value) {
    newval = Number.parseInt(value).toString(12);
    newval = newval.replace('a', '𝛘').replace('b', 'Ɛ')

    return newval;
}