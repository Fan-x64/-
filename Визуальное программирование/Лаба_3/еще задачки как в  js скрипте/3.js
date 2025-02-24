

function groupByproperty(array, name_sviostv) {
    return array.reduce((acc, item) => {
        const key = item[name_sviostv];

        if (!acc[key]) {
            acc[key] =[];
        }

        acc[key].push(item);
        return acc;
    }, {});
}

const data = [
    { name: "name1", age = 30, city = "gaf0" },
    { name: "name2", age = 40, city = "gaf1" },
    { name: "name3", age = 50, city = "gaf2" },
]

const grouped = groupByproperty(data, "city");
console.log(grouped);