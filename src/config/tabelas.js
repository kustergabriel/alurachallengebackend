/* 
Classe Tabelas: Será feito toda a criação de tabela do banco de dados
*/

class Tabelas {
    // Chamar tabelas
    init(conexao) {
        console.log('Tabelas foram chamadas')
        this.conexao = conexao
        this.criarVideos()
        this.criarCategorias()
    }

    /*
    Tabela Videos: INT id PK, VARCHAR titulo, VARCHAR descricao, VARCHAR url 
    */
    criarVideos () {
        const SQL = 'CREATE TABLE IF NOT EXISTS Videos (id int NOT NULL AUTO_INCREMENT, titulo varchar(40) NOT NULL, descricao varchar(255) NOT NULL, url varchar(255) NOT NULL, PRIMARY KEY (id))'
        this.conexao.query(SQL, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Videos criada com sucesso!');
            }
        })
    }

    /*
    Tabela Categorias: id INT PK, VARCHAR titulo, VARCHAR cor
    */
    criarCategorias () {
        const sql = 'CREATE TABLE IF NOT EXISTS Categorias (id int NOT NULL AUTO_INCREMENT, titulo varchar(40) NOT NULL, cor varchar(50) NOT NULL, PRIMARY KEY (id))'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log("Tabela Categorias criada com sucesso!")
            }
        })
    }
}

export default Tabelas;