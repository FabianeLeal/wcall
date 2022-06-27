let qnt = 1
let toti= 0
let total = 0
function adicionar(){
    let option = $("option:selected");
    let codigo = option.attr("cod");
    let preco = +option.attr("preco");
    let qnt = +option.attr("qnt");
    let valor = option.val();

    toti = toti + qnt;
    total = total + preco;

    $("h4").html(total);
    $("h5").html(toti);

    let tabela = $("table");
    tabela.append(`
            <tr>
                <td>${codigo}</td>
                <td>${valor}</td>
                <td>${preco}</td>
                <td>${qnt}</td>
            </tr>
    `)
}
