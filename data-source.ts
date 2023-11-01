import { DataSource} from 'typeorm'
import { Product } from "./models/product"
import { User } from "./models/user"
import { Category } from "./models/category"

export const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "./main.sqlite3",
    synchronize: true,
    logging: true,
    entities: [ Product, User, Category ],
    subscribers: [],
    migrations: [],
})

dataSource.initialize()
    .then(() => {
        console.log('success')
    })
    .catch((err) => {
        console.log('error')
    });



