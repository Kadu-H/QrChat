import express from "express";
import bodyParser from "body-parser";
import qrcode from "qrcode";
import Jimp from "jimp";

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

async function createImage(qr_src, cor) {
    const width = 1080;
    const height = 1920;

    const colorImage = new Jimp(width, height, cor);

    const qrImage = await Jimp.read(Buffer.from(qr_src.split(',')[1], 'base64'));
    qrImage.resize(700, 700, Jimp.RESIZE_NEAREST_NEIGHBOR);
     
    const x = (width - qrImage.bitmap.width) / 2;
    const y = (height - qrImage.bitmap.height) / 2;

    colorImage.composite(qrImage, x, y, Jimp.RESIZE_NEAREST_NEIGHBOR);

    const finalBase64Image = await colorImage.getBase64Async(Jimp.MIME_PNG);
    return finalBase64Image;
}

app.post('/', async (req, res) => {
    const linkWhats = "https://api.whatsapp.com/send?phone="+req.body.numero+"&text="+encodeURI(req.body.mensagem);
    qrcode.toDataURL(linkWhats, async (err,qr_src) => {
        const imagem = await createImage(qr_src,req.body.cor);
        res.render("scan", {
            imagem: imagem,
            qr_src: qr_src,
        });
    })
});

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.listen(80, () => {
    console.log("Rodando na porta 80");
});