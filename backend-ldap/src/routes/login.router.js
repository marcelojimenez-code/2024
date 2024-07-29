import ldap from 'ldapjs';
import { Router } from 'express';
const router = Router();

// Configuración LDAP
const LDAP_HOST = '172.18.1.7';         // IP del servidor LDAP
const LDAP_PORT = 389;                  // Puerto LDAP
const LDAP_DOMAIN = 'minpublico.cl';    // Dominio LDAP

// Función para envolver ldap.bind en una promesa
const bindAsync = (client, dn, password) => {
    return new Promise((resolve, reject) => {
        client.bind(dn, password, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

router.post('/', async (req, res) => {
    try {
        const { usuario_login, password } = req.body;

        if (!usuario_login || usuario_login.length === 0) {
            return res.status(400).json({ message: 'No existe usuario' });
        }

        if (!password || password.length === 0) {
            return res.status(400).json({ message: 'No existe password' });
        }

        const usuario = `${usuario_login.toLowerCase()}@${LDAP_DOMAIN}`;
        const client = ldap.createClient({
            url: `ldap://${LDAP_HOST}:${LDAP_PORT}`
        });

        await bindAsync(client, usuario, password);

        res.status(200).json({ message: 'Ingreso exitoso' });
        client.unbind();
    } catch (err) {
        console.error('Autenticación fallida:', err.message);
        res.status(401).json({ message: 'Usuario no válido' });
    }
});

export default router;
