import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Descuento set ?', [req.body]);
        res.json({ text: 'Creando Descuento' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Descuentos = await pool.query('SELECT * FROM Descuento');
        res.json(Descuentos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Descuento = await pool.query('SELECT * FROM Descuento WHERE IDDescuento = ?', [id]);
        if (Descuento.length > 0) {
            return res.json(Descuento[0]);
        }
        res.status(404).json({ text: "Descuento no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Descuento set ? WHERE IDDescuento=?', [req.body, id]);
        res.json({ message: 'actualizando Descuento ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Descuento WHERE IDDescuento=?', [id]);
        res.json({ message: 'Eliminando Descuento ' + [id] });
    }

}
const Descuento = new Controlador();
export default Descuento;