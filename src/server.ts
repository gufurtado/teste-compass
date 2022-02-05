import { app } from "./app";
import './shared/container';
import "reflect-metadata"


app.listen(3333,() => {
    console.log("server up!")
})