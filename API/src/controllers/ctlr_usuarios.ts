import { Request, Response } from 'express';
import pool from '../database'
import config from '../config/config';
class Controlador {
    public async lista(req: Request, res: Response): Promise<void> {
        try {
            const usuarios = await pool.query('SELECT * FROM usuario');
            res.json(usuarios);
        }
        catch (e) {
            res.json({ message: e });
        }
    };

    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const usuario = await pool.query('SELECT * FROM usuario WHERE IDUsuario = ?', [id]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: "Usuario no encontrado" });
        }
        catch (e) {
            res.json({ message: e });
        }
    };

    public async insertar(req: Request, res: Response) {
        try {
            let { Pass } = req.body;

            req.body[('Pass')] = config.hashPass(Pass);

            const insertado = await pool.query('INSERT INTO usuario set ?', [req.body]);
            if (insertado) {
                return res.json({ text: 'Usuario creado' });
            }
            else {
                return res.status(409).json({ text: 'Usuario no creado' });
            }
        }
        catch (e) {
            res.json({ message: e });
        }
    };

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            let { Pass } = req.body;
            req.body[('Pass')] = config.hashPass(Pass);
            await pool.query('UPDATE usuario set ? WHERE IDUsuario=?', [req.body, id]);
            res.json({ message: 'actualizando usuario ' });
        }
        catch (e) {
            res.json({ message: e });
        }
    };

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await pool.query('DELETE FROM usuario WHERE IDUsuario=?', [id]);
            res.json({ message: 'Eliminando usuario ' + [id] });
        }
        catch (e) {
            res.json({ message: e });
        }
    };

}
const userController = new Controlador();
export default userController;