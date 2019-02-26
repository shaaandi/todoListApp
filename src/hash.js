import Hashes from 'jshashes';

let Generator = new Hashes.SHA256();

function giveKey (data) {
    return Generator.hex(data)
}


export default giveKey;