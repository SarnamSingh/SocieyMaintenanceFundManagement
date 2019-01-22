const crypto = require('crypto');

exports. encrypt = (text, key) =>{
    let cipher = crypto.createCipher('aes-256-cbc', key);
    let crypted = cipher.update(text, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

exports. decrypt = (encryptedData, key)=>{
    let decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}