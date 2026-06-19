import { Pool } from "pg";

const url = "postgresql://postgres:111@localhost:5432/treinos"

export const database = new Pool({
    connectionString:url
})

