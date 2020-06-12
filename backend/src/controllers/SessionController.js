const connection = require('../database/connection');

module.exports ={
    async create(request, response){
        const {id} = request.body;
        
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            response.status(400).json({ error: 'Não existe ONG com esse ID'});
        }else{
            return response.json(ong);
        }
    }
}