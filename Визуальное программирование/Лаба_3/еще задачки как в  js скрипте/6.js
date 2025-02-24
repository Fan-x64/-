function checkProperties(array, array_svoistv) {
    return array.every(item => array_svoistv.every(svoistv => svoistv in item));
}