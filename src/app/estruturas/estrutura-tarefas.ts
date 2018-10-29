export class Tarefa {
    public id: Number;
    public data: Date;
    public atividade: String;
    public descricao: String;
    public conteudo: String;
    public status: Boolean;


    constructor(id: Number, data: Date, atividade: String, descricao: String, conteudo: String, status: Boolean) {
        this.id = id;
        this.data = data;
        this.atividade = atividade;
        this.descricao = descricao;
        this.conteudo = conteudo;
        this.status = status;
    }

}
