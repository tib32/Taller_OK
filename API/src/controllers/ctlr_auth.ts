//IMPORT TYPEORM - DB
import { Request, Response } from 'express';
import pool from '../database';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
class AuthController {
  static login = async (req: Request, res: Response) => {
    const { Nick, Pass } = req.body;
    if (!(Nick && Pass)) {
      return res.status(400).json({ message: 'User & password are required' });
    }
    let usuario: any;
    try {
      usuario = await pool.query('SELECT * FROM usuario WHERE Binary(Nick) = ?', [Nick]);
    } catch (e) {
      return res.status(400).json({ message: 'User or password incorrect' });
    }
    if (usuario.length > 0) {
      const Contrasena = usuario[0][('Pass')];
      const IDUsuario = usuario[0][('IDUsuario')];
      if (config.checkPass(Pass, Contrasena)) {
        const token = jwt.sign({ IDUsuario, Nick }, config.jwtSecret, { expiresIn: '23h' });
        res.json({ message: 'OK baby', token });
      }
      else {
        return res.status(401).json({ message: 'Test! User or password incorrect' });
      }
    } else {
      res.status(404).json({ text: "Usuario no logueado" });
    }
  }
  static changePassword = async (req: Request, res: Response) => {
    const { IDUsuario, password, Pass } = res.locals.Payload;
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      return res.status(400).json({ message: 'Old password and New Password are required!' });
    }
    let usuario: any;
    try {
      usuario = await pool.query('SELECT * FROM usuario WHERE IDUsuario = ?', [IDUsuario]);
    } catch (e) {
      return res.status(400).json({ message: 'User or password incorrect' });
    }
    if (!config.checkPass(oldPassword, password)) {
      res.status(401).json({ message: 'Check your old password' });
    }

    try {
      req.body[('Pass')] = config.hashPass(newPassword);
      await pool.query('UPDATE usuario set usuario.pass =? WHERE IDUsuario=?', [req.body[('Pass')], IDUsuario]);
      res.json({ message: 'Password changed ' });
    }
    catch (e) {
      res.json({ message: e });
    }
  }
};
export default AuthController;
