import * as bcrypt from 'bcryptjs';

export default {
    jwtSecret: '@1s2ds5f4s5d1f2032DGet',
    hashPass(pass: string): string {
        const salt = bcrypt.genSaltSync(10);
        const Hash: string = bcrypt.hashSync(pass, salt);
        //console.log('Crendo hash: ', Hash);
        return Hash;
    },
    checkPass(passwordFlat: string, passwordHash: string): boolean {
        return bcrypt.compareSync(passwordFlat, passwordHash);
    }
}