export function titleCase(value) {
    return value.replace(/\b\w/g, (initial) => initial.toUpperCase());
}
