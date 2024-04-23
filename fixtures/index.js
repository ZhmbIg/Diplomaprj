import fixtures from "./init.js";
import db from "../models/index.js";

try {
    await db.init()
    await fixtures.init()
} catch (err) {
    console.log(err)
}
