import express from "express";
import bodyParser from "body-parser";
import qrcode from "qrcode";
import { createCanvas, loadImage } from "canvas";

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

function renderView(){
    app.use(bodyParser.urlencoded({ extended: false }));

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.set("view engine", "ejs");
    app.set("views", __dirname+"/src/view/");
}

renderView();

app.post('/', (req, res) => {
    const linkWhats = "https://api.whatsapp.com/send?phone="+req.body.numero+"&text="+encodeURI(req.body.fraseQR);
    qrcode.toDataURL(linkWhats,(err,src) => {
        console.log(src);
        res.render("scan", {
            qr_src: src,
        });
    })
});

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.listen(80, () => {
    console.log("Rodando na porta 80");
});