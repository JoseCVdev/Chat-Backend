import { Request, Response } from "express";


const getMensaje = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'hola'
    })
};

const sendMensaje = (req: Request, res: Response) => {
    const hola = req.body;
    res.json({
        ok: true,
        hola
    })
};

const sendMensajeV2 = (req: Request, res: Response) => {
    const hola = req.body;
    const id = req.params.id;
    res.json({
        ok: true,
        hola,
        id
    })
};

export {
    getMensaje, sendMensaje, sendMensajeV2
}