var url = 'https://example.com/api/notes';
function log(message) {
    console.log(message);
}
const logging = log;
export { logging as log };