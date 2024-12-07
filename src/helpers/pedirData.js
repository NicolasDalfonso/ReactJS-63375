import data from "../data/data.json";

export const pedirData = () => {
    return new Promise ((resolve, reject) => {
setTimeout ( ( ) => {
    resolve (data);
}, 500 )
    } )
}
