import bcrypt from 'bcryptjs'

const users =[

    {
        name: 'Admin1',
        email: 'admin1@outlook.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true

    }
]

export default users