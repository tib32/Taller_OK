import pool from '../database';
import { Request, Response, NextFunction } from 'express';

export const checkRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { Nick } = res.locals.jwtPayload;
        let usuario: any;
        try {
            usuario = await pool.query('SELECT * FROM usuario WHERE Binary(Nick) = ?', [Nick]);
        } catch (error) {
            return res.status(400).json({ message: 'User or password incorrect' });
        };
        if (usuario.length > 0) {
            const role: string = await usuario[0][('role')];
            if (roles.includes(role)) {
                next();
            }
            else {
                return res.status(401).json({ message: "No tiene privilegios de usuario" });
            }
        }
    }
};