
export function prepareSearchTerm(raw){
    //convert to lowercase
    let searchTerm = raw.toLowerCase();

    //escape foreign characters?

    //replace spaces with +
    searchTerm.replace(' ','+');

    console.log("api-utils::prepareSearchTerm", raw, searchTerm);
    return searchTerm;

}