var nome = [];
var nasc = [];
var cpf = [];
var turma = [];
    function salvarUser(){

        let nomeUser = document.getElementById("nomeUser").value;
        let dataUser = document.getElementById("dataUser").value;
        let cpfUser = document.getElementById("cpfUser").value;
        let turmaUser = document.getElementById("turmaUser").value;

        if(nomeUser || dataUser || cpfUser || turmaUser){
            nome.push(nomeUser);
            nasc.push(dataUser);
            cpf.push(cpfUser);
            turma.push(turmaUser);
            criaLista();
            //console.log(nome);
            document.getElementById("nomeUser").value = '';
            document.getElementById("dataUser").value = '';
            document.getElementById("cpfUser").value = '';
            document.getElementById("turmaUser").value = '';
        }else{
            alert("Por favor preencha todas as abas");
            document.getElementById('nomeUser').focus();
        }
    }
    function criaLista(){
        let tabela = document.getElementById("tabela").innerHTML = " <tr><th>Nome Usuário</th><th>Data de Nascimento</th><th>CPF</th><th>Turma</th><th>Ações</th></tr>";
        for(let i=0; i <= (nome.length - 1); i++){
            tabela += "<tr><td>" + nome[i] + "</td><td>" + nasc[i] + "</td><td>" + cpf[i] + "</td><td>" + turma[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
            document.getElementById('tabela').innerHTML = tabela;
        }
    }

    //Função p/edição nome

    function editar(i){
        document.getElementById("nomeUser").value = nome[(i - 1)];
        nome.splice(nome[(i-1)], 1);
        document.getElementById("dataUser").value = nasc[(i - 1)];
        nasc.splice(nasc[(i-1)], 1);
        document.getElementById("cpfUser").value = cpf[(i - 1)];
        cpf.splice(cpf[(i-1)], 1);
        document.getElementById("turmaUser").value = turma[(i - 1)];
        turma.splice(turma[(i-1)], 1);}


        
    //Função p/excluir nome

    function excluir(i){
        nome.splice((i - 1), 1);
        document.getElementById("tabela").deleteRow(i);
        nasc.splice((i - 1), 1);
        document.getElementById("tabela").deleteRow(i);
        cpf.splice((i - 1), 1);
        document.getElementById("tabela").deleteRow(i);
        turma.splice((i - 1), 1);
        document.getElementById("tabela").deleteRow(i);

    }