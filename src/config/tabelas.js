class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas')
        this.conexao = conexao
        this.criarVideos()
    }

    criarVideos () {
        const SQL = 'CREATE TABLE Videos (id int NOT NULL AUTO_INCREMENT, titulo varchar(40) NOT NULL, descricao varchar(255) NOT NULL, url varchar(255) NOT NULL, PRIMARY KEY (id))'
        this.conexao.query(SQL, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Videos criada com sucesso!');
            }
        })
    }
}

export default Tabelas;