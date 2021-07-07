import bcrypt from 'bcryptjs'

const users =[
   
    {
        name: 'Admin ',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Admin ',
        email: 'admin@outlook.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    }
]

export default users