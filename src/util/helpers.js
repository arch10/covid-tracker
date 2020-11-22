function numberFormatter(num) {
    let num_parts = num.toString().split(".");
    const lastThree = num_parts[0].substring(num_parts[0].length - 3);
    num_parts[0] = num_parts[0].substring(0, num_parts[0].length - 3);
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    if (num_parts[0] === "") {
        num_parts[0] = lastThree;
    } else {
        num_parts[0] = num_parts[0] + "," + lastThree;
    }
    return num_parts.join(".");
}

export { numberFormatter };
