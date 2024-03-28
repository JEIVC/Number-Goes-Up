function format(value) {
    newval = Number.parseInt(value).toString(12);
    newval = newval.replace('a', 'ᵡ').replace('b', 'ε')

    return newval;
}