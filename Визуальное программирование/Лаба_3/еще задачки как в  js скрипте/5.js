function sortByComputedProperty(array, compute) {
    return [...array].sort((a, b) => (
        compute(a) - compute(b);
    ));
}