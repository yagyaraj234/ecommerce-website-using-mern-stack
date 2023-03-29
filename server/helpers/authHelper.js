import bcrypt from 'bcrypt'

export default hashPassword =async (password) =>{

    try{
        const saltrounds=10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }
    catch(error){
        console.log(error)
    }
}

export const comparePassword =async(password,hashPassword) =>{
    return bcrypt.compare(password,hashedPassword);
}