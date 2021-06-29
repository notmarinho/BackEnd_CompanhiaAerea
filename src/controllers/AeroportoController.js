const Aeroporto = require('../models/Aeroporto')

module.exports = {
    async consulta(req, res) {
        const aeroporto = await Aeroporto.findAll()
        return res.json(aeroporto)
    },

    async create(req, res) {
        const { codigo_aeroporto, nome, cidade, estado } = req.body

        const aeroporto = await Aeroporto.create({ codigo_aeroporto, nome, cidade, estado })

        return res.json(aeroporto)
    },

    async atualizar(req, res) {
        console.log("BODY REQUEST\n ", req.body)
        const { codigo_aeroporto, nome, cidade, estado } = req.body
        const { codigo } = req.params
        const aeroporto = await Aeroporto.update({ codigo_aeroporto, nome, cidade, estado }, { where: { codigo_aeroporto: codigo } })

        return res.json(aeroporto)
    },

    async delete(req, res) {
        const { codigo_aeroporto } = req.body
        const aeroporto = await Aeroporto.destroy({ where: { codigo_aeroporto: codigo_aeroporto } })
        return res.json(aeroporto)
    }
}